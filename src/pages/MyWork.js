import React from 'react';
//Libraries
import { motion } from 'framer-motion';
import styled from 'styled-components';
//Animations
import {
  pageAnimation,
  sliderContainer,
  slider,
  fade,
} from '../animation';
//Components
import Project from '../components/Project';
import Title from '../components/Title';
import ScrollTop from '../components/ScrollTop';
//Data
import projects from '../projects';

const MyWork = () => {
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

      <Title title="My Work" />
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
      <ScrollTop />
    </WorkStyle>
  );
};

const WorkStyle = styled(motion.div)`
  background: #222831;
  min-height: 90vh;
 
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
