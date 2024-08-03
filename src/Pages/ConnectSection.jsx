import React, { useEffect, useRef, useState } from 'react';

const ConnectSection = () => {
  const sectionRef = useRef(null);
  const [shrink, setShrink] = useState(false);

  const handleScroll = () => {
    if (sectionRef.current) {
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      if (sectionTop <= window.innerHeight / 2) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="white-section overflow-hidden bg-customGray py-12 px-6 sm:px-4">
      <div
        ref={sectionRef}
        className={`connect-section ${shrink ? 'shrink' : ''} text-center space-y-6`}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">GOT A PROJECT IN MIND?</h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">LET'S CONNECT</h1>
        <a
          id="Button"
          href="mailto:aaashishrana2002@gmail.com"
          className="email-button border-2 border-solid border-black rounded-full px-6 py-3 text-lg font-semibold transition-colors duration-300 hover:bg-black hover:text-white"
        >
          WRITE A MESSAGE
        </a>
        <div id="social-buttons" className="social-links flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.instagram.com/_dushyant_thakur_01?igsh=OHpneGQxY200OXR0"
            className="social-button bg-gray-800 text-white py-2 px-4 rounded-full transition-colors duration-300 hover:bg-gray-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>INSTAGRAM</span>
          </a>
          <a
            href="#"
            className="social-button bg-gray-800 text-white py-2 px-4 rounded-full transition-colors duration-300 hover:bg-gray-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>TWITTER</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ashish-rana-b23070267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="social-button bg-gray-800 text-white py-2 px-4 rounded-full transition-colors duration-300 hover:bg-gray-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>LINKEDIN</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConnectSection;