import React from 'react';

const ProgressTracker = ({ progress }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-1 z-40 bg-dark-800">
      <div 
        className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300"
        style={{ width: `${progress}%` }}
      ></div>
      
      {/* Achievement markers to create a sense of accomplishment */}
      {[25, 50, 75].map(marker => (
        <div 
          key={marker}
          className={`absolute bottom-0 w-2 h-2 rounded-full transition-all duration-300 ${
            progress >= marker ? 'bg-white' : 'bg-gray-400'
          }`}
          style={{ 
            left: `${marker}%`, 
            transform: 'translate(-50%, 50%)',
            boxShadow: progress >= marker ? '0 0 8px rgba(255, 255, 255, 0.8)' : 'none'
          }}
        ></div>
      ))}
    </div>
  );
};

export default ProgressTracker;