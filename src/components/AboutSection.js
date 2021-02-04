import React from 'react';
//Libraries
import { motion } from 'framer-motion';
import styled from 'styled-components';
//Components
import Wave from "./Wave"
//Animations
import { fade, titleAnim, lineAnim } from "../animation"

const AboutSection = () => {
  return (
    <AboutSectionStyle>
      <Introduction variants={fade}>
        <motion.h1 variants={titleAnim}>Hello World!</motion.h1>
        <motion.div variants={lineAnim} className='line'></motion.div>
        <motion.h2 variants={titleAnim}>This is</motion.h2>
        <motion.h2 variants={titleAnim}><span>Khaled Ayman</span></motion.h2>
        <motion.h2 variants={titleAnim}>A <span>Self taught</span> software developer</motion.h2>
      </Introduction>
      <Wave />
    </AboutSectionStyle>
  );
};

const AboutSectionStyle = styled(motion.div)`
  background: #222831; 
  min-height: 90vh;
  @media (max-width:786px){
    min-height:80vh;
  }
  h1{
    color: #eeeeee;
    font-size:3rem;
    @media (max-width:786px){
    font-size:2rem;
  }
   
  }
  .line {
    height: 0.5rem;
    border-radius: 0.2rem;
    background: #d65a31;
    margin: auto;
  }
  h2{
    color: #eeeeee;
    font-size:2rem;

    @media (max-width:786px){
    font-size:1.5rem;
  }

    span{
      color:#d65a31;
    }

  }
`;

const Introduction = styled(motion.div)`
position:relative;
width:50%;
margin: auto;
display: flex;
flex-direction:column;
padding:1rem;
align-items:center;
z-index:2;
/* img{
  position: relative;
  z-index:10;
  width:20rem;
  margin:auto;
} */

`
export default AboutSection;
