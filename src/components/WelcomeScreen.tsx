import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Zap, Heart, Sparkles, ArrowRight } from 'lucide-react';

interface WelcomeScreenProps {
  onGetStarted: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onGetStarted }) => {
  const features = [
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Runs completely offline on your device. Your conversations never leave your computer.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Powered by DeepSeek R1 7B for instant, intelligent responses without cloud delays.'
    },
    {
      icon: Heart,
      title: 'Personal Touch',
      description: 'Adapts to your personality and preferences for truly personalized interactions.'
    }
  ];

  return (
    <motion.div
      className="flex-1 flex items-center justify-center p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-2xl text-center">
        <motion.div
          className="mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.div
            className="w-24 h-24 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-2xl"
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Brain size={40} className="text-white" />
          </motion.div>
          
          <motion.h1
            className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Meet Kouri
          </motion.h1>
          
          <motion.p
            className="text-xl text-apple-gray-600 mb-8 leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Your personalized on-device AI companion, designed with privacy and personality in mind.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-12"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <feature.icon size={24} className="text-white" />
              </motion.div>
              <h3 className="text-lg font-semibold text-apple-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-apple-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <motion.button
            onClick={onGetStarted}
            className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 mx-auto"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Sparkles size={20} />
            <span>Get Started</span>
            <motion.div
              className="group-hover:translate-x-1 transition-transform duration-200"
            >
              <ArrowRight size={20} />
            </motion.div>
          </motion.button>
          
          <motion.p
            className="text-sm text-apple-gray-500 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.4 }}
          >
            No account required • Completely private • Ready in seconds
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WelcomeScreen;