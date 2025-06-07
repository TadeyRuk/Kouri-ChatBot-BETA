import React from 'react';
import { motion } from 'framer-motion';

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-center space-x-1">
      <span className="text-sm text-apple-gray-600">Thinking</span>
      <div className="flex space-x-1">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-1 h-1 bg-apple-gray-400 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: index * 0.2
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TypingIndicator;