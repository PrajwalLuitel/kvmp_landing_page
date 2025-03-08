import React from 'react';
import { motion } from 'framer-motion';
import IconComponent from './IconComponent';

interface FloatingCardProps {
  title: string;
  iconName: string;
  colorClass: string;
  index: number;
}

const FloatingCard: React.FC<FloatingCardProps> = ({ 
  title, 
  iconName, 
  colorClass,
  index 
}) => {
  // Calculate position based on index
  const getPosition = () => {
    // Positions are arranged in a circular pattern
    const positions = [
      { top: '-120px', left: '50%', transform: 'translateX(-50%)' },
      { top: '-60px', right: '-110px' },
      { bottom: '-60px', right: '-110px' },
      { bottom: '-120px', left: '50%', transform: 'translateX(-50%)' },
      { bottom: '-60px', left: '-110px' }
    ];
    
    return positions[index % positions.length];
  };
  
  // Get the animation delay based on index
  const getAnimationDelay = () => {
    return (index * 0.2) + 1; // Start from 1s, increment by 0.2s per item
  };
  
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.6, 
        delay: getAnimationDelay(),
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <motion.div
      className="floating-card absolute"
      style={getPosition()}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <div className="flex items-center bg-white rounded-xl shadow-glow p-3 backdrop-blur-lg bg-opacity-90">
        <div className={`${colorClass} rounded-full p-2 mr-3`}>
          <IconComponent name={iconName} size={20} className="text-white" />
        </div>
        <span className="font-semibold text-gray-800 whitespace-nowrap">{title}</span>
      </div>
    </motion.div>
  );
};

export default FloatingCard;