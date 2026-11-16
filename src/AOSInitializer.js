// AOSInitializer.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const AOSInitializer = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 1500, 
      once: true, 
      easing: 'ease-in-sine',
    });
  }, []);

  return <>{children}</>;
};

export default AOSInitializer;
