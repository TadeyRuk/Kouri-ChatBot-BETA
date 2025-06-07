import React from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, 
  MessageSquare, 
  Brain, 
  Shield, 
  Palette, 
  Volume2,
  Info,
  X,
  Plus,
  Clock,
  Star
} from 'lucide-react';

interface SidebarProps {
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  const menuItems = [
    { icon: MessageSquare, label: 'New Chat', action: () => {} },
    { icon: Clock, label: 'Recent Chats', action: () => {} },
    { icon: Star, label: 'Favorites', action: () => {} },
    { icon: Settings, label: 'Settings', action: () => {} },
    { icon: Brain, label: 'AI Model', action: () => {} },
    { icon: Shield, label: 'Privacy', action: () => {} },
    { icon: Palette, label: 'Appearance', action: () => {} },
    { icon: Volume2, label: 'Voice & Audio', action: () => {} },
    { icon: Info, label: 'About Kouri', action: () => {} }
  ];

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Sidebar */}
      <motion.div
        className="fixed left-0 top-12 bottom-0 w-80 bg-white/95 backdrop-blur-xl border-r border-apple-gray-200 shadow-2xl z-50 flex flex-col"
        initial={{ x: -320, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -320, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
      >
        {/* Header */}
        <div className="p-6 border-b border-apple-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <motion.div
                className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Brain size={20} className="text-white" />
              </motion.div>
              <div>
                <h2 className="text-lg font-semibold text-apple-gray-900">Kouri</h2>
                <p className="text-sm text-apple-gray-600">AI Companion</p>
              </div>
            </div>
            <motion.button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-apple-gray-100 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <X size={18} className="text-apple-gray-600" />
            </motion.button>
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto py-4">
          <div className="px-4 space-y-1">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.label}
                onClick={item.action}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-apple-gray-100 transition-all duration-200 text-left group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <item.icon 
                  size={20} 
                  className="text-apple-gray-600 group-hover:text-apple-blue transition-colors duration-200" 
                />
                <span className="text-apple-gray-900 font-medium">
                  {item.label}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-apple-gray-200">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-apple-gray-900">
                Status: Online
              </span>
            </div>
            <p className="text-xs text-apple-gray-600">
              Running DeepSeek R1 7B locally
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;