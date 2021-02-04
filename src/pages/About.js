import React from 'react';
//Libraries
import { motion } from 'framer-motion';
//Animations
import { pageAnimation } from '../animation';
//Components
import AboutSection from '../components/AboutSection';

const About = () => {
  return (
    <motion.div variants={pageAnimation} initial='hidden' animate='show' exit="exit">
      <AboutSection />
    </motion.div>
  );
};

export default About;
