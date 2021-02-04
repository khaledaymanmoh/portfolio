import React from 'react';
//Libraries
import styled from 'styled-components';
import { motion } from 'framer-motion';
//Animations
import { titleAnim, lineAnim } from '../animation';

const Title = ({ title }) => {
  return (
    <TitleStyle>
      <motion.h1 variants={titleAnim}>{title}</motion.h1>
      <motion.div variants={lineAnim} className='line'></motion.div>
    </TitleStyle>
  );
};

const TitleStyle = styled(motion.div)`
  width: 50%;
  margin: auto;
  padding-top: 1rem;
  h1 {
    text-align: center;
    color: #eee;
  }
  .line {
    height: 0.5rem;
    border-radius: 0.2rem;
    background: #d65a31;
    margin: auto;
  }
`;

export default Title;
