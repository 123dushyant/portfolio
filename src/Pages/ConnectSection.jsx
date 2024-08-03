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
    <div className="white-section overflow-hidden bg-customGray">
      <div
        ref={sectionRef}
        className={`connect-section  ${shrink ? 'shrink' : ''}`}>
        <h2>GOT A PROJECT IN MIND?</h2>
        <h1>LET'S CONNECT</h1>
        <a id='Button' href="mailto:aaashishrana2002@gmail.com" className="email-button border-2 border-solid border-black  rounded-full">
      WRITE A MESSAGE
    </a>
      
        <div id='social-buttons' className="social-links ">
        <a href="https://www.instagram.com/_dushyant_thakur_01?igsh=OHpneGQxY200OXR0" className="social-button " target="_blank" rel="noopener noreferrer">
        <span>INSTAGRAM</span>
      </a>
      <a href="" className="social-button " target="_blank" rel="noopener noreferrer">
        <span>TWITTER</span>
      </a>
      <a href="https://www.linkedin.com/in/ashish-rana-b23070267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="social-button " target="_blank" rel="noopener noreferrer">
        <span>LINKEDIN</span>
      </a>
        </div>
       
      </div>
    </div>
  );
};

export default ConnectSection;