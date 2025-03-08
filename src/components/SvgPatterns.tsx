import React from 'react';

const SvgPatterns = () => {
  return (
    <div className="svg-defs" aria-hidden="true">
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          {/* Network Pattern */}
          <pattern id="networkPattern" patternUnits="userSpaceOnUse" width="100" height="100">
            <rect width="100" height="100" fill="none"/>
            
            {/* Network Nodes */}
            <circle cx="20" cy="20" r="2" fill="currentColor" />
            <circle cx="80" cy="20" r="2" fill="currentColor" />
            <circle cx="20" cy="80" r="2" fill="currentColor" />
            <circle cx="80" cy="80" r="2" fill="currentColor" />
            <circle cx="50" cy="50" r="3" fill="currentColor" />
            <circle cx="35" cy="35" r="1.5" fill="currentColor" />
            <circle cx="65" cy="35" r="1.5" fill="currentColor" />
            <circle cx="35" cy="65" r="1.5" fill="currentColor" />
            <circle cx="65" cy="65" r="1.5" fill="currentColor" />
            
            {/* Connection Lines */}
            <line x1="20" y1="20" x2="35" y2="35" stroke="currentColor" strokeWidth="0.5" />
            <line x1="80" y1="20" x2="65" y2="35" stroke="currentColor" strokeWidth="0.5" />
            <line x1="20" y1="80" x2="35" y2="65" stroke="currentColor" strokeWidth="0.5" />
            <line x1="80" y1="80" x2="65" y2="65" stroke="currentColor" strokeWidth="0.5" />
            
            <line x1="35" y1="35" x2="50" y2="50" stroke="currentColor" strokeWidth="0.5" />
            <line x1="65" y1="35" x2="50" y2="50" stroke="currentColor" strokeWidth="0.5" />
            <line x1="35" y1="65" x2="50" y2="50" stroke="currentColor" strokeWidth="0.5" />
            <line x1="65" y1="65" x2="50" y2="50" stroke="currentColor" strokeWidth="0.5" />
            
            <line x1="35" y1="35" x2="65" y2="35" stroke="currentColor" strokeWidth="0.5" />
            <line x1="35" y1="65" x2="65" y2="65" stroke="currentColor" strokeWidth="0.5" />
            <line x1="35" y1="35" x2="35" y2="65" stroke="currentColor" strokeWidth="0.5" />
            <line x1="65" y1="35" x2="65" y2="65" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          
          {/* Circuit Pattern */}
          <pattern id="circuitPattern" patternUnits="userSpaceOnUse" width="100" height="100">
            <rect width="100" height="100" fill="none"/>
            
            {/* Horizontal Lines */}
            <line x1="10" y1="20" x2="70" y2="20" stroke="currentColor" strokeWidth="1" />
            <line x1="30" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="1" />
            <line x1="0" y1="80" x2="40" y2="80" stroke="currentColor" strokeWidth="1" />
            
            {/* Vertical Lines */}
            <line x1="20" y1="0" x2="20" y2="40" stroke="currentColor" strokeWidth="1" />
            <line x1="50" y1="30" x2="50" y2="80" stroke="currentColor" strokeWidth="1" />
            <line x1="80" y1="10" x2="80" y2="90" stroke="currentColor" strokeWidth="1" />
            
            {/* Nodes */}
            <circle cx="20" cy="20" r="3" fill="currentColor" />
            <circle cx="50" cy="50" r="3" fill="currentColor" />
            <circle cx="80" cy="80" r="3" fill="currentColor" />
            <circle cx="20" cy="80" r="3" fill="currentColor" />
            <circle cx="80" cy="20" r="3" fill="currentColor" />
            
            {/* Small Squares */}
            <rect x="15" y="45" width="10" height="10" stroke="currentColor" strokeWidth="1" fill="none" />
            <rect x="75" y="15" width="10" height="10" stroke="currentColor" strokeWidth="1" fill="none" />
            <rect x="45" y="75" width="10" height="10" stroke="currentColor" strokeWidth="1" fill="none" />
          </pattern>
          
          {/* Digital Dots Pattern */}
          <pattern id="digitalDotsPattern" patternUnits="userSpaceOnUse" width="100" height="100">
            <rect width="100" height="100" fill="none"/>
            
            {/* Dots Grid */}
            <circle cx="10" cy="10" r="1.5" fill="currentColor" />
            <circle cx="30" cy="10" r="1.5" fill="currentColor" />
            <circle cx="50" cy="10" r="1.5" fill="currentColor" />
            <circle cx="70" cy="10" r="1.5" fill="currentColor" />
            <circle cx="90" cy="10" r="1.5" fill="currentColor" />
            
            <circle cx="10" cy="30" r="1.5" fill="currentColor" />
            <circle cx="30" cy="30" r="1.5" fill="currentColor" />
            <circle cx="50" cy="30" r="1.5" fill="currentColor" />
            <circle cx="70" cy="30" r="1.5" fill="currentColor" />
            <circle cx="90" cy="30" r="1.5" fill="currentColor" />
            
            <circle cx="10" cy="50" r="1.5" fill="currentColor" />
            <circle cx="30" cy="50" r="1.5" fill="currentColor" />
            <circle cx="50" cy="50" r="1.5" fill="currentColor" />
            <circle cx="70" cy="50" r="1.5" fill="currentColor" />
            <circle cx="90" cy="50" r="1.5" fill="currentColor" />
            
            <circle cx="10" cy="70" r="1.5" fill="currentColor" />
            <circle cx="30" cy="70" r="1.5" fill="currentColor" />
            <circle cx="50" cy="70" r="1.5" fill="currentColor" />
            <circle cx="70" cy="70" r="1.5" fill="currentColor" />
            <circle cx="90" cy="70" r="1.5" fill="currentColor" />
            
            <circle cx="10" cy="90" r="1.5" fill="currentColor" />
            <circle cx="30" cy="90" r="1.5" fill="currentColor" />
            <circle cx="50" cy="90" r="1.5" fill="currentColor" />
            <circle cx="70" cy="90" r="1.5" fill="currentColor" />
            <circle cx="90" cy="90" r="1.5" fill="currentColor" />
            
            {/* Larger accent dots */}
            <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.4" />
            <circle cx="60" cy="60" r="3" fill="currentColor" opacity="0.4" />
            <circle cx="80" cy="40" r="3" fill="currentColor" opacity="0.4" />
            <circle cx="40" cy="80" r="3" fill="currentColor" opacity="0.4" />
          </pattern>
        </defs>
      </svg>
    </div>
  );
};

export default SvgPatterns;