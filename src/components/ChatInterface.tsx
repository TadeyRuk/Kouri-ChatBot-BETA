import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mic, Volume2, VolumeX } from 'lucide-react';
import { Message } from '../App';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';

interface ChatInterfaceProps {
  messages: Message[];
  onSendMessage: (text: string) => void;
  isListening: boolean;
  onToggleVoiceRecording: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
  currentInput: string;
  onInputChange: (value: string) => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({
  messages,
  onSendMessage,
  isListening,
  onToggleVoiceRecording,
  isMuted,
  onToggleMute,
  currentInput,
  onInputChange
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentInput.trim()) {
      onSendMessage(currentInput);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <motion.div
      className="flex-1 flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <motion.div
        className="border-t border-apple-gray-200 bg-white/80 backdrop-blur-xl p-4"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <form onSubmit={handleSubmit} className="flex items-end space-x-3">
          <div className="flex-1 relative">
            <textarea
              ref={inputRef}
              value={currentInput}
              onChange={(e) => onInputChange(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask Kouri anything..."
              className="w-full resize-none rounded-2xl border border-apple-gray-300 px-4 py-3 pr-12 focus:border-apple-blue focus:ring-2 focus:ring-apple-blue/20 transition-all duration-200 bg-white/90 backdrop-blur-sm"
              rows={1}
              style={{ minHeight: '48px', maxHeight: '120px' }}
            />
          </div>

          <div className="flex items-center space-x-2">
            <motion.button
              type="button"
              onClick={onToggleVoiceRecording}
              className={`p-3 rounded-xl transition-all duration-200 ${
                isListening
                  ? 'bg-red-500 text-white shadow-lg'
                  : 'bg-apple-gray-100 text-apple-gray-700 hover:bg-apple-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mic size={20} />
            </motion.button>

            <motion.button
              type="button"
              onClick={onToggleMute}
              className="p-3 rounded-xl bg-apple-gray-100 text-apple-gray-700 hover:bg-apple-gray-200 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </motion.button>

            <motion.button
              type="submit"
              disabled={!currentInput.trim()}
              className={`p-3 rounded-xl transition-all duration-200 ${
                currentInput.trim()
                  ? 'bg-apple-blue text-white shadow-lg hover:bg-blue-600'
                  : 'bg-apple-gray-200 text-apple-gray-400 cursor-not-allowed'
              }`}
              whileHover={currentInput.trim() ? { scale: 1.05 } : {}}
              whileTap={currentInput.trim() ? { scale: 0.95 } : {}}
            >
              <Send size={20} />
            </motion.button>
          </div>
        </form>

        <motion.p
          className="text-xs text-apple-gray-500 mt-2 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          Powered by DeepSeek R1 7B • Running locally on your device
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default ChatInterface;