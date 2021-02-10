import React from 'react';
//Libraries
import { motion } from 'framer-motion';
//Animations
import { pageAnimation } from '../animation';
//Components
import Intro from '../components/Intro';
import ScrollTop from '../components/ScrollTop';
import MyStory from "../components/MyStory"

const About = () => {
  return (
    <motion.div variants={pageAnimation} initial='hidden' animate='show' exit="exit">
      <Intro />
      <MyStory />
      <ScrollTop />
    </motion.div>
  );
};

export default About;
