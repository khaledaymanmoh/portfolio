import React from 'react';
//Libraries
import styled from 'styled-components';
import { motion } from 'framer-motion';
//Animations
import { cardAnim, lineAnim } from '../animation';
//Components
import { useScroll } from "./useScroll";

const Project = ({ id, title, description, image, using, link }) => {
  const [element, controls] = useScroll();
  return (
    <StyledProject variants={cardAnim} ref={element} animate={controls} initial="hidden">
      <h1>{title}</h1>
      <motion.div variants={lineAnim} className='line'></motion.div>
      <h2>Using:</h2>
      <ul className='used-techs'>
        {using.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <div className='body'>
        <img src={image} alt={'project ' + id} />
        <p>{description}</p>
      </div>
      <a target="_blank" rel="noreferrer" href={link}>Visit Project</a>
    </StyledProject>
  );
};

const StyledProject = styled(motion.div)`
  width: 50vw;
  margin: 2rem auto;
  padding: 1rem;
  text-align: center;
  color: #eeee;
  box-shadow: 0px 1px 20px 0px #000000;
  border-radius: 2rem;
  @media screen and (max-width:786px){
    width:90vw;
  }

  .line {
    height: 0.5rem;
    border-radius: 0.2rem;
    background: #d65a31;
    margin: auto;
  }
  ul {
    display: flex;
    list-style: none;
    justify-content: center;
    li {
      margin: 0.5rem;
    }
  }
  .body {
    display: flex;
    flex-wrap: wrap;
    margin: 1rem auto 0 auto;
    justify-content: center;
    text-align: left;
    @media screen and (max-width:786px){
      flex-direction:column;
  }
    p {
      flex: 2;
      margin: 0 1rem;
    }
    img {
      flex: 1;
      width: 15rem;
      min-width: 15rem;
      height: 15rem;
      margin: auto;
      object-fit: cover;
      border-radius: 0.5rem;
      border: 2px solid #d65a31;
      box-shadow: 0px 1px 20px 0px #000000;
      @media screen and (max-width:786px){
        width:90%;
        margin-bottom:1rem;
  }

    }
  }
  a {
    display:block;
    margin-right:1rem;
    text-align:right;
    color: #d65a31;
    opacity: 0.5;
    text-decoration: none;
    transition: 0.5s ease;
    &:hover {
      opacity: 1;
    }
  }

`;

export default Project;
