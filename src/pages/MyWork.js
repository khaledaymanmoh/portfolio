import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import projects from '../projects';
import Project from '../components/Project';

// Importing animations
import {
  pageAnimation,
  sliderContainer,
  slider,
  fade,
  titleAnim,
  lineAnim
} from '../animation';

const MyWork = () => {
  console.log(projects);
  return (
    <WorkStyle
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider} />
        <Frame2 variants={slider} />
        <Frame3 variants={slider} />
        <Frame4 variants={slider} />
      </motion.div>

      <motion.div className="title">
        <motion.h1 variants={titleAnim}>My Work</motion.h1>
        <motion.div variants={lineAnim} className='line'></motion.div>
      </motion.div>
      <motion.div variants={fade} className='projects'>
        {projects.map((project) => (
          <Project
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            using={project.using}
            link={project.link}
          />
        ))}
      </motion.div>
    </WorkStyle>
  );
};

const WorkStyle = styled(motion.div)`
  background: #222831;
  min-height: 90vh;
  .title{
  width:50%;
  margin:auto;
  padding-top:1rem; 
  h1{
  text-align:center;
  color:#eee
}
.line {
    height: 0.5rem;
    border-radius: 0.2rem;
    background: #d65a31;
    margin: auto;
  }

}
 
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #555555;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #cdc9c3;
`;
const Frame3 = styled(Frame1)`
  background: #fbf7f0;
`;
export const Frame4 = styled(Frame1)`
  background: #d9e4dd;
`;



export default MyWork;
