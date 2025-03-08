// Image imports and exports management file
import { StaticImageData } from 'next/image';

// Logo and hero section
import logoLight from '../../public/images/logo-light.svg';
import logoDark from '../../public/images/logo-dark.svg';
import heroBg from '../../public/images/hero-bg.jpg';

// Export grouped images
export const logos = {
  light: logoLight,
  dark: logoDark,
};

export const backgrounds = {
  hero: heroBg,
};

// Type for services data
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

// Services data
export const servicesData: ServiceItem[] = [
  {
    id: 'consulting',
    title: 'IT Consulting',
    description: 'Strategic IT solutions tailored for the banking sector to enhance operational efficiency.',
    iconName: 'briefcase',
  },
  {
    id: 'regulatory',
    title: 'Regulatory Compliance',
    description: 'Navigate complex regulatory landscapes with our specialized compliance expertise.',
    iconName: 'shield-check',
  },
  {
    id: 'digital',
    title: 'Digital Transformation',
    description: 'Modernize your banking operations with cutting-edge digital transformation strategies.',
    iconName: 'refresh-cw',
  },
  {
    id: 'security',
    title: 'Cybersecurity & Risk',
    description: 'Protect your financial institution with advanced cybersecurity and risk management solutions.',
    iconName: 'lock',
  },
  {
    id: 'cloud',
    title: 'Cloud Computing',
    description: 'Scalable cloud infrastructure solutions designed specifically for financial institutions.',
    iconName: 'cloud',
  },
  {
    id: 'data',
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights with our business intelligence solutions.',
    iconName: 'bar-chart',
  },
  {
    id: 'project',
    title: 'Project Management',
    description: 'End-to-end project management services specialized for banking technology implementations.',
    iconName: 'clipboard-list',
  },
];

// Why choose us data
export const whyChooseUsData = [
  {
    id: 'expertise',
    title: 'Industry Expertise',
    description: 'We have extensive experience working with Canadian banks, understanding their unique challenges and regulatory landscape.',
  },
  {
    id: 'solutions',
    title: 'Customized Solutions',
    description: 'Our team tailors IT strategies to meet your specific business goals and requirements for optimal efficiency.',
  },
  {
    id: 'track-record',
    title: 'Proven Track Record',
    description: 'We have successfully managed and delivered high-impact projects, ensuring seamless execution and measurable ROI.',
  },
  {
    id: 'future-ready',
    title: 'Future-Ready Approach',
    description: 'We integrate the latest technologies to help financial institutions stay ahead of industry trends and competition.',
  },
];