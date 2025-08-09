import { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatLogRef = useRef(null);

  const appendMessage = (text, sender) => {
    setMessages(prev => [...prev, { text, sender, id: Date.now() }]);
  };

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    appendMessage(`You: ${userMessage}`, 'user');
    setInputValue('');
    setIsLoading(true);

    try {
      const res = await fetch('https://ai-chatbot-teal-beta-72.vercel.app/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });
      
      if (!res.ok) {
        const errorText = await res.text();
        console.error('API Error:', errorText);
        throw new Error(`HTTP ${res.status}: ${errorText}`);
      }
      
      const data = await res.json();
      
      if (data.reply) {
        appendMessage(`Bot: ${data.reply}`, 'bot');
      } else {
        appendMessage('Bot: Sorry, no response.', 'bot');
      }
    } catch (error) {
      console.error('Chat API error:', error);
      appendMessage('Bot: Error contacting server.', 'bot');
    } finally {
      setIsLoading(false);
    }
  };

  const getCurrentSection = () => {
    const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
    
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) {
          return section;
        }
      }
    }
    return 'hero';
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    if (chatLogRef.current) {
      chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      {/* Chat Toggle Button */}
      <div
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary rounded-full shadow-lg cursor-pointer flex items-center justify-center text-white text-2xl z-50 hover:scale-110 transition-transform"
        onClick={() => setIsOpen(!isOpen)}
        title="Chat with us!"
      >
        💬
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[360px] max-h-[480px] border border-border rounded-xl shadow-2xl bg-card flex flex-col z-50">
          {/* Header */}
          <div className="p-3 bg-primary text-primary-foreground font-semibold rounded-t-xl">
            AI Chatbot
          </div>

          {/* Chat Log */}
          <div
            ref={chatLogRef}
            className="flex-1 p-4 overflow-y-auto border-b border-border bg-background min-h-[300px] max-h-[350px]"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-3 ${
                  message.sender === 'user'
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground'
                }`}
              >
                {message.text}
              </div>
            ))}
            {isLoading && (
              <div className="text-muted-foreground mb-3">
                Bot: Typing...
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="flex p-4 gap-3">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message…"
              className="flex-1 px-3 py-2 text-sm border border-input rounded-full bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              disabled={isLoading}
            />
            <button
              onClick={sendMessage}
              disabled={isLoading || !inputValue.trim()}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold hover:bg-primary/90 disabled:bg-muted disabled:cursor-not-allowed flex items-center gap-1"
            >
              <Send size={14} />
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};
