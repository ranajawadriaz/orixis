export type ChatRole = 'user' | 'assistant';
export interface ChatMessage {
  role: ChatRole;
  content: string;
}

export interface StreamHandle {
  cancel: () => void;
}

/**
 * Streams a chat completion from our own serverless endpoint (/api/chat), which
 * holds the Groq API key server-side. The browser never sees the key.
 */
export function streamChat(
  history: ChatMessage[],
  onToken: (token: string) => void,
  onDone: (full: string) => void,
  onError: (err: Error) => void,
): StreamHandle {
  const controller = new AbortController();

  (async () => {
    let full = '';
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history }),
        signal: controller.signal,
      });

      // The endpoint reports a missing/misconfigured key with a JSON error.
      if (res.status === 500 || res.status === 401) {
        const data = await res.json().catch(() => ({}));
        onError(new Error(data.error === 'MISSING_KEY' ? 'MISSING_KEY' : 'SERVER'));
        return;
      }
      if (!res.ok || !res.body) {
        throw new Error(`Request failed (${res.status})`);
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() ?? '';

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed.startsWith('data:')) continue;
          const data = trimmed.slice(5).trim();
          if (data === '[DONE]') {
            onDone(full);
            return;
          }
          try {
            const json = JSON.parse(data);
            const token = json.choices?.[0]?.delta?.content ?? '';
            if (token) {
              full += token;
              onToken(token);
            }
          } catch {
            /* ignore keep-alive / partial frames */
          }
        }
      }
      onDone(full);
    } catch (err) {
      if ((err as Error).name === 'AbortError') return;
      onError(err as Error);
    }
  })();

  return { cancel: () => controller.abort() };
}
