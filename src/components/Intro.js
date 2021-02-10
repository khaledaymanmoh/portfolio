import React from 'react';
//Libraries
import { motion } from 'framer-motion';
//Components
import Wave from './Wave';
import Swipe from './Swipe';
//Animations
import { fade, titleAnim, lineAnim } from '../animation';
//Styles
import { Screen, Introduction } from "../styles";

const AboutSection = () => {
  return (
    <motion.div>
      <Screen>
        <Introduction variants={fade}>
          <motion.h1 variants={titleAnim}>Hello World!</motion.h1>
          <motion.div variants={lineAnim} className='line'></motion.div>
          <motion.h2 variants={titleAnim}>This is</motion.h2>
          <motion.h2 variants={titleAnim}>
            <span>Khaled Ayman</span>
          </motion.h2>
          <motion.h2 variants={titleAnim}>
            A <span>Self taught</span> software developer
          </motion.h2>
          <Swipe />
        </Introduction>
        <Wave />
      </Screen>
    </motion.div >
  );
};

export default AboutSection;
