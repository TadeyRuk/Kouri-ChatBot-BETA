import React from 'react';
import { motion } from 'framer-motion';
import { Menu, Minimize2, Square, X, Brain } from 'lucide-react';

interface TitleBarProps {
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const TitleBar: React.FC<TitleBarProps> = ({ onToggleSidebar, isSidebarOpen }) => {
  return (
    <motion.div 
      className="h-12 bg-white/80 backdrop-blur-xl border-b border-apple-gray-200 flex items-center justify-between px-4 select-none"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center space-x-3">
        <motion.button
          onClick={onToggleSidebar}
          className="p-1.5 rounded-md hover:bg-apple-gray-100 transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Menu size={16} className="text-apple-gray-700" />
        </motion.button>
        
        <div className="flex items-center space-x-2">
          <motion.div
            className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-md flex items-center justify-center"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <Brain size={14} className="text-white" />
          </motion.div>
          <span className="text-sm font-medium text-apple-gray-900">Kouri</span>
        </div>
      </div>

      <div className="flex items-center space-x-1">
        <motion.button
          className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors duration-200"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        />
        <motion.button
          className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors duration-200"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        />
        <motion.button
          className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors duration-200"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        />
      </div>
    </motion.div>
  );
};

export default TitleBar;