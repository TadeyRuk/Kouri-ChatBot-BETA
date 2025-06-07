import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  Send, 
  Mic, 
  Settings, 
  Minimize2, 
  X, 
  Brain,
  Sparkles,
  Volume2,
  VolumeX
} from 'lucide-react';
import ChatInterface from './components/ChatInterface';
import Sidebar from './components/Sidebar';
import TitleBar from './components/TitleBar';
import WelcomeScreen from './components/WelcomeScreen';

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  isThinking?: boolean;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentInput, setCurrentInput] = useState('');

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setCurrentInput('');

    // Add thinking indicator
    const thinkingMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: 'Thinking...',
      sender: 'ai',
      timestamp: new Date(),
      isThinking: true
    };

    setMessages(prev => [...prev, thinkingMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 2).toString(),
        text: `Hello! I'm Kouri, your personal AI companion. I understand you said: "${text}". I'm running locally on your device using DeepSeek R1 7B, ensuring complete privacy. How can I assist you today? 🧠✨`,
        sender: 'ai',
        timestamp: new Date()
      };

      setMessages(prev => prev.filter(msg => !msg.isThinking).concat([aiResponse]));
    }, 1500);
  };

  const handleGetStarted = () => {
    setIsFirstTime(false);
  };

  const toggleVoiceRecording = () => {
    setIsListening(!isListening);
    // Voice recording logic would go here
  };

  return (
    <div className="h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col overflow-hidden font-sf">
      <TitleBar 
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        isSidebarOpen={isSidebarOpen}
      />
      
      <div className="flex flex-1 overflow-hidden">
        <AnimatePresence>
          {isSidebarOpen && (
            <Sidebar onClose={() => setIsSidebarOpen(false)} />
          )}
        </AnimatePresence>

        <main className="flex-1 flex flex-col relative">
          <AnimatePresence mode="wait">
            {isFirstTime ? (
              <WelcomeScreen 
                key="welcome"
                onGetStarted={handleGetStarted} 
              />
            ) : (
              <ChatInterface
                key="chat"
                messages={messages}
                onSendMessage={handleSendMessage}
                isListening={isListening}
                onToggleVoiceRecording={toggleVoiceRecording}
                isMuted={isMuted}
                onToggleMute={() => setIsMuted(!isMuted)}
                currentInput={currentInput}
                onInputChange={setCurrentInput}
              />
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

export default App;