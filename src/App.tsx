import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Products from "./pages/Products";
import CaseStudies from "./pages/CaseStudies";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const queryClient = new QueryClient();

const genAI = new GoogleGenerativeAI('AIzaSyA6dbe8AUb3ouGB0csFwGEB8JZq-txFKCs');

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  
  const trainingContext = `You are an AI assistant for a tech company website. Our company helps users build websites, apps, and AI agents. We provide comprehensive tech solutions and respond to client inquiries quickly via email. Users can also place orders through our platform. Keep responses concise, helpful, and professional. Focus on how we can help with their tech needs.`;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!userInput.trim() || isLoading) return;
    
    const currentInput = userInput;
    setUserInput('');
    setIsLoading(true);
    
    // Add user message
    const newMessages = [...messages, { type: 'user', content: currentInput, timestamp: new Date() }];
    setMessages(newMessages);
    
    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
      const prompt = `${trainingContext}\n\nUser question: ${currentInput}\n\nProvide a concise, helpful response:`;
      const result = await model.generateContent(prompt);
      const text = result.response.text();
      
      // Add AI response
      setMessages(prev => [...prev, { 
        type: 'ai', 
        content: text, 
        timestamp: new Date() 
      }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        type: 'ai', 
        content: 'Sorry, I encountered an error. Please try again later.', 
        timestamp: new Date() 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleClickOutside = (event) => {
    if (isChatOpen && !event.target.closest('.chat-container') && !event.target.closest('.chat-button')) {
      setIsChatOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isChatOpen]);

  const clearChat = () => {
    setMessages([]);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="min-h-screen bg-orixis-bg text-orixis-text">
              <Navbar />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/services" element={<Services />} />
                <Route path="/products" element={<Products />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/about" element={<About />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
              
              {/* Chat Button */}
              <button 
                className="chat-button"
                onClick={() => setIsChatOpen(!isChatOpen)}
                style={{ 
                  position: 'fixed', 
                  bottom: '20px', 
                  right: '20px', 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '50%', 
                  backgroundColor: '#8B5CF6', 
                  color: 'white', 
                  border: 'none', 
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)',
                  transition: 'transform 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px'
                }}
                onMouseOver={(e) => (e.target as HTMLElement).style.transform = 'scale(1.05)'}
                onMouseOut={(e) => (e.target as HTMLElement).style.transform = 'scale(1)'}
              >
                💬
              </button>

              {/* Chat Container */}
              {isChatOpen && (
                <div 
                  className="chat-container" 
                  style={{ 
                    position: 'fixed', 
                    bottom: '100px', 
                    right: '20px', 
                    width: '350px', 
                    height: '500px', 
                    backgroundColor: '#1F2937',
                    border: '1px solid #374151',
                    borderRadius: '12px', 
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden'
                  }}
                >
                  {/* Chat Header */}
                  <div style={{
                    padding: '16px',
                    backgroundColor: '#8B5CF6',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div>
                      <h3 style={{ margin: '0', fontSize: '16px', fontWeight: '600' }}>AI Assistant</h3>
                      <p style={{ margin: '0', fontSize: '12px', opacity: '0.9' }}>Ask about our tech solutions</p>
                    </div>
                    <div>
                      <button
                        onClick={clearChat}
                        style={{
                          background: 'rgba(255,255,255,0.2)',
                          border: 'none',
                          color: 'white',
                          padding: '4px 8px',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          marginRight: '8px',
                          fontSize: '12px'
                        }}
                      >
                        Clear
                      </button>
                      <button
                        onClick={() => setIsChatOpen(false)}
                        style={{
                          background: 'rgba(255,255,255,0.2)',
                          border: 'none',
                          color: 'white',
                          padding: '4px 8px',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontSize: '12px'
                        }}
                      >
                        ✕
                      </button>
                    </div>
                  </div>

                  {/* Messages Area */}
                  <div style={{
                    flex: '1',
                    overflowY: 'auto',
                    padding: '16px',
                    backgroundColor: '#111827'
                  }}>
                    {messages.length === 0 && (
                      <div style={{ 
                        textAlign: 'center', 
                        color: '#9CA3AF', 
                        padding: '20px',
                        fontSize: '14px'
                      }}>
                        👋 Hi! I'm here to help you with websites, apps, and AI agents. What can I assist you with today?
                      </div>
                    )}
                    
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        style={{
                          marginBottom: '12px',
                          display: 'flex',
                          justifyContent: message.type === 'user' ? 'flex-end' : 'flex-start'
                        }}
                      >
                        <div
                          style={{
                            maxWidth: '80%',
                            padding: '8px 12px',
                            borderRadius: '12px',
                            fontSize: '14px',
                            lineHeight: '1.4',
                            backgroundColor: message.type === 'user' ? '#8B5CF6' : '#374151',
                            color: 'white',
                            wordWrap: 'break-word'
                          }}
                        >
                          {message.content}
                        </div>
                      </div>
                    ))}
                    
                    {isLoading && (
                      <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '12px' }}>
                        <div
                          style={{
                            padding: '8px 12px',
                            borderRadius: '12px',
                            backgroundColor: '#374151',
                            color: '#9CA3AF',
                            fontSize: '14px'
                          }}
                        >
                          Thinking...
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Input Area */}
                  <div style={{
                    padding: '16px',
                    backgroundColor: '#1F2937',
                    borderTop: '1px solid #374151'
                  }}>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type your message..."
                        disabled={isLoading}
                        style={{
                          flex: '1',
                          padding: '10px 12px',
                          borderRadius: '8px',
                          border: '1px solid #374151',
                          backgroundColor: '#111827',
                          color: 'white',
                          fontSize: '14px',
                          outline: 'none'
                        }}
                      />
                      <button
                        onClick={handleSendMessage}
                        disabled={isLoading || !userInput.trim()}
                        style={{
                          padding: '10px 16px',
                          backgroundColor: userInput.trim() && !isLoading ? '#8B5CF6' : '#6B7280',
                          color: 'white',
                          border: 'none',
                          borderRadius: '8px',
                          cursor: userInput.trim() && !isLoading ? 'pointer' : 'not-allowed',
                          fontSize: '14px',
                          fontWeight: '500'
                        }}
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;