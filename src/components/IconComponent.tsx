import React from 'react';
import * as LucideIcons from 'lucide-react';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  className?: string;
}

const IconComponent: React.FC<IconProps> = ({ 
  name, 
  size = 24, 
  color, 
  className = '' 
}) => {
  // First letter uppercase, rest lowercase to match Lucide icon naming
  const formatIconName = (iconName: string): string => {
    // Handle kebab-case icon names (convert to PascalCase)
    if (iconName.includes('-')) {
      return iconName
        .split('-')
        .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
        .join('');
    }
    
    // Handle regular names (convert first letter to uppercase)
    return iconName.charAt(0).toUpperCase() + iconName.slice(1).toLowerCase();
  };
  
  const formattedName = formatIconName(name);
  
  // Check if the icon exists in Lucide
  const IconComp = (LucideIcons as any)[formattedName];
  
  // If icon doesn't exist, return fallback
  if (!IconComp) {
    console.warn(`Icon "${name}" (formatted as "${formattedName}") not found in Lucide icons`);
    return <LucideIcons.HelpCircle size={size} color={color} className={className} />;
  }
  
  return <IconComp size={size} color={color} className={className} />;
};

export default IconComponent;