import React from 'react';
import { motion } from 'framer-motion';
// import styled from 'styled-components';
import AboutSection from '../components/AboutSection';
import { pageAnimation } from '../animation';

const About = () => {
  return (
    <motion.div variants={pageAnimation} initial='hidden' animate='show' exit="exit">
      <AboutSection />
    </motion.div>
  );
};

export default About;
