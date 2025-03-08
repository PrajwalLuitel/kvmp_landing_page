import React from 'react';
import { motion } from 'framer-motion';
import { ServiceItem } from '@/utils/images';
import { fadeIn, cardVariants } from '@/utils/animations';
import { ChevronRight, Check } from 'lucide-react';
import IconComponent from './IconComponent';

// Section Header Component
interface SectionHeaderProps {
  title: string;
  subtitle: string;
  centered?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  centered = false 
}) => {
  return (
    <motion.div 
      className={`mb-12 ${centered ? 'text-center' : ''}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn('up')}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
      <div className={`h-1 w-24 bg-blue-600 rounded mb-6 ${centered ? 'mx-auto' : ''}`}></div>
      <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">{subtitle}</p>
    </motion.div>
  );
};

// Service Card Component
interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  return (
    <motion.div
      className="service-card h-full flex flex-col"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.2 }}
      custom={index * 0.2}
    >
      <div className="flex items-center mb-6">
        <div className="p-3 bg-blue-100 rounded-full mr-4 flex-shrink-0">
          <IconComponent name={service.iconName} size={28} className="text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold">{service.title}</h3>
      </div>
      <p className="text-gray-600 flex-grow text-base leading-relaxed">{service.description}</p>
      <motion.button
        className="mt-6 text-blue-600 font-medium flex items-center"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        Learn more
        <ChevronRight className="ml-2 h-5 w-5" />
      </motion.button>
    </motion.div>
  );
};

// Feature Item Component
interface FeatureItemProps {
  title: string;
  description: string;
  index: number;
}

export const FeatureItem: React.FC<FeatureItemProps> = ({ title, description, index }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn('up', index * 0.2)}
      className="mb-10"
    >
      <div className="flex items-start">
        <div className="flex-shrink-0 bg-blue-600 rounded-full p-2 mr-5 mt-1">
          <Check className="h-5 w-5 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-gray-600 text-base leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

// Call to Action Button
interface CTAButtonProps {
  text: string;
  onClick?: () => void;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ text, onClick }) => {
  return (
    <motion.button
      className="gradient-button"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
};