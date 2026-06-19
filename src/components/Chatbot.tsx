import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Fab from '@mui/material/Fab';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import SmartToyRoundedIcon from '@mui/icons-material/SmartToyRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { streamChat, type ChatMessage, type StreamHandle } from '@/lib/chatbot';
import { SITE, whatsappLink } from '@/lib/site';

const GREETING: ChatMessage = {
  role: 'assistant',
  content: `Hi! I'm Ori, the Orixis assistant 👋 Ask me about our services, products, pricing, or how we can help your project.`,
};

const SUGGESTIONS = [
  'What services do you offer?',
  'Tell me about your AI products',
  'How much does a project cost?',
  'I want to start a project',
];

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [input, setInput] = useState('');
  const [streaming, setStreaming] = useState(false);
  const streamRef = useRef<StreamHandle | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, open]);

  useEffect(() => () => streamRef.current?.cancel(), []);

  const send = (text: string) => {
    const content = text.trim();
    if (!content || streaming) return;

    const next: ChatMessage[] = [...messages, { role: 'user', content }];
    setMessages([...next, { role: 'assistant', content: '' }]);
    setInput('');
    setStreaming(true);

    // Only send the real conversation (drop the static greeting) to the model.
    const history = next.filter((m, i) => !(i === 0 && m === GREETING));

    streamRef.current = streamChat(
      history,
      (token) =>
        setMessages((prev) => {
          const copy = [...prev];
          copy[copy.length - 1] = {
            role: 'assistant',
            content: copy[copy.length - 1].content + token,
          };
          return copy;
        }),
      () => setStreaming(false),
      (err) => {
        setStreaming(false);
        const msg =
          err.message === 'MISSING_KEY'
            ? `I'm not fully configured yet, but the team replies fast on WhatsApp (${SITE.phoneDisplay}) or email (${SITE.email}).`
            : `Sorry, I hit a snag. Please try again, or reach us on WhatsApp (${SITE.phoneDisplay}).`;
        setMessages((prev) => {
          const copy = [...prev];
          copy[copy.length - 1] = { role: 'assistant', content: msg };
          return copy;
        });
      },
    );
  };

  const showSuggestions = messages.length === 1;

  return (
    <>
      {/* Launcher */}
      <Box
        sx={{
          position: 'fixed',
          right: { xs: 20, sm: 30 },
          bottom: { xs: 20, sm: 30 },
          zIndex: 1300,
        }}
      >
        <AnimatePresence>
          {!open && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              <Fab
                aria-label="Open chat assistant"
                onClick={() => setOpen(true)}
                sx={{
                  width: 66,
                  height: 66,
                  background: 'linear-gradient(135deg, #0D9488 0%, #7C3AED 100%)',
                  color: '#fff',
                  boxShadow: '0 12px 34px rgba(13,148,136,0.5)',
                  '&:hover': { background: 'linear-gradient(135deg, #0B7268 0%, #6D28D9 100%)' },
                }}
              >
                <SmartToyRoundedIcon sx={{ fontSize: 33 }} />
              </Fab>
            </motion.div>
          )}
        </AnimatePresence>
      </Box>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            sx={{
              position: 'fixed',
              right: { xs: 12, sm: 24 },
              bottom: { xs: 12, sm: 24 },
              left: { xs: 12, sm: 'auto' },
              zIndex: 1301,
            }}
          >
            <Paper
              elevation={12}
              sx={{
                width: { xs: 'auto', sm: 384 },
                height: { xs: '75vh', sm: 560 },
                maxHeight: 'calc(100vh - 32px)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                borderRadius: '20px',
                border: 1,
                borderColor: 'divider',
              }}
            >
              {/* Header */}
              <Box
                sx={{
                  px: 2,
                  py: 1.5,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.25,
                  background: 'linear-gradient(135deg, #0D9488 0%, #7C3AED 100%)',
                  color: '#fff',
                }}
              >
                <Avatar sx={{ bgcolor: 'rgba(255,255,255,0.2)', width: 38, height: 38 }}>
                  <SmartToyRoundedIcon />
                </Avatar>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Box sx={{ fontWeight: 700, lineHeight: 1.2 }}>Ori · Orixis Assistant</Box>
                  <Box sx={{ fontSize: 12, opacity: 0.9, display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#4ade80' }} />
                    Online, usually replies instantly
                  </Box>
                </Box>
                <IconButton aria-label="Close chat" onClick={() => setOpen(false)} sx={{ color: '#fff' }}>
                  <CloseRoundedIcon />
                </IconButton>
              </Box>

              {/* Messages */}
              <Box
                ref={scrollRef}
                sx={{
                  flex: 1,
                  overflowY: 'auto',
                  px: 2.25,
                  py: 2.25,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1.5,
                  bgcolor: 'background.default',
                }}
              >
                {messages.map((m, i) => (
                  <Box
                    key={i}
                    sx={{
                      alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
                      maxWidth: '88%',
                      px: 1.875,
                      py: 1.25,
                      borderRadius: '18px',
                      fontSize: 14,
                      lineHeight: 1.55,
                      whiteSpace: 'pre-wrap',
                      wordBreak: 'break-word',
                      boxShadow: '0 2px 8px rgba(15,23,42,0.06)',
                      color: m.role === 'user' ? '#fff' : 'text.primary',
                      background:
                        m.role === 'user'
                          ? 'linear-gradient(135deg, #0D9488 0%, #7C3AED 100%)'
                          : (theme) => (theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.06)' : '#F1F5F9'),
                      borderTopRightRadius: m.role === 'user' ? 6 : '18px',
                      borderTopLeftRadius: m.role === 'user' ? '18px' : 6,
                    }}
                  >
                    {m.content || (streaming && i === messages.length - 1 ? <TypingDots /> : '')}
                  </Box>
                ))}

                {showSuggestions && (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mt: 0.5 }}>
                    {SUGGESTIONS.map((s) => (
                      <Chip
                        key={s}
                        label={s}
                        size="small"
                        variant="outlined"
                        onClick={() => send(s)}
                        sx={{ cursor: 'pointer', borderColor: 'primary.main', color: 'primary.main' }}
                      />
                    ))}
                  </Box>
                )}
              </Box>

              {/* Composer */}
              <Box
                component="form"
                onSubmit={(e) => {
                  e.preventDefault();
                  send(input);
                }}
                sx={{
                  p: 1.5,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  borderTop: 1,
                  borderColor: 'divider',
                  bgcolor: 'background.paper',
                }}
              >
                <IconButton
                  aria-label="Chat on WhatsApp"
                  component="a"
                  href={whatsappLink(`Hi Orixis! I have a question.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: '#25D366' }}
                >
                  <WhatsAppIcon />
                </IconButton>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Ask Ori anything…"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  autoComplete="off"
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: '999px', bgcolor: 'background.default' } }}
                />
                <IconButton
                  type="submit"
                  aria-label="Send message"
                  disabled={!input.trim() || streaming}
                  sx={{
                    color: '#fff',
                    background: 'linear-gradient(135deg, #0D9488 0%, #7C3AED 100%)',
                    '&:hover': { background: 'linear-gradient(135deg, #0B7268 0%, #6D28D9 100%)' },
                    '&.Mui-disabled': { background: 'rgba(120,120,120,0.25)', color: 'rgba(255,255,255,0.6)' },
                  }}
                >
                  <SendRoundedIcon fontSize="small" />
                </IconButton>
              </Box>
            </Paper>
          </Box>
        )}
      </AnimatePresence>
    </>
  );
};

const TypingDots = () => (
  <Box sx={{ display: 'inline-flex', gap: 0.5, py: 0.5 }}>
    {[0, 1, 2].map((i) => (
      <Box
        key={i}
        component={motion.span}
        animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
        transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
        sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: 'text.disabled' }}
      />
    ))}
  </Box>
);

export default Chatbot;
