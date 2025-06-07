import React from 'react';
import { motion } from 'framer-motion';
import { Brain, User } from 'lucide-react';
import { Message } from '../App';
import TypingIndicator from './TypingIndicator';

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <motion.div
      className={`flex items-start space-x-3 ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Avatar */}
      <motion.div
        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
          isUser 
            ? 'bg-apple-blue text-white' 
            : 'bg-gradient-to-br from-purple-500 to-pink-500 text-white'
        }`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1, duration: 0.2 }}
      >
        {isUser ? <User size={16} /> : <Brain size={16} />}
      </motion.div>

      {/* Message Content */}
      <motion.div
        className={`max-w-xs lg:max-w-md ${isUser ? 'ml-auto' : 'mr-auto'}`}
        initial={{ opacity: 0, x: isUser ? 20 : -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
      >
        <div
          className={`px-4 py-3 rounded-2xl shadow-sm ${
            isUser
              ? 'bg-apple-blue text-white rounded-br-md'
              : 'bg-white border border-apple-gray-200 text-apple-gray-900 rounded-bl-md'
          }`}
        >
          {message.isThinking ? (
            <TypingIndicator />
          ) : (
            <p className="text-sm leading-relaxed whitespace-pre-wrap">
              {message.text}
            </p>
          )}
        </div>
        
        <motion.p
          className={`text-xs text-apple-gray-500 mt-1 ${isUser ? 'text-right' : 'text-left'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.2 }}
        >
          {message.timestamp.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default MessageBubble;