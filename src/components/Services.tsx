import React from 'react';
import { SectionHeader, ServiceCard } from '@/components/SectionComponents';
import { servicesData } from '@/utils/images';

const Services = () => {
  return (
    <section id="services" className="section section-dark">
      <div className="container mx-auto">
        <SectionHeader 
          title="Our Services" 
          subtitle="We offer comprehensive IT solutions and project management services tailored specifically for the banking sector" 
          centered={false}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-24 mb-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
      
      {/* Simple divider */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-white"></div>
    </section>
  );
};

export default Services;