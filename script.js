document.querySelectorAll('.question-item').forEach(button => {
    button.addEventListener('click', () => {
        const container = button.parentElement;
        
        // Close all other questions
        document.querySelectorAll('.question-container').forEach(item => {
            if (item !== container) {
                item.classList.remove('active');
            }
        });

        // Toggle current question
        container.classList.toggle('active');
    });
});
function switchLanguage(lang) {
    // Remove active class from all buttons
    document.querySelectorAll('.language-switch button').forEach(btn => {
        btn.classList.remove('active');
    });

    // Add active class to clicked button
    document.getElementById(`${lang}Btn`).classList.add('active');

    // Here you can add your language switching logic
    if (lang === 'ru') {
        // Switch content to Russian
        console.log('Switching to Russian');
        // You can add translations here
    } else {
        // Switch content to English
        console.log('Switching to English');
        // You can add translations here
    }
}


import React, { useState, useEffect } from 'react';

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.addEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      className="fixed pointer-events-none transition-all duration-100 ease-out"
      style={{
        transform: `translate(${position.x + 20}px, ${position.y + 20}px)`,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="w-6 h-6 rounded-full bg-green-500 opacity-70"></div>
    </div>
  );
};

export default CursorFollower;