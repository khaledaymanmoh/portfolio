import React from 'react';
//Libraries
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
//Animations
import { titleAnim, pageAnimation, slider, cardAnim } from '../animation';
import { Frame4 } from './MyWork';
import Title from "../components/Title"
//Icons
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt, faAt } from '@fortawesome/free-solid-svg-icons';
//Components
import ScrollTop from "../components/ScrollTop";
const Contacts = () => {
  return (
    <StyledContacts
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <Frame5 variants={slider} />
      <Title title="Contacts" />
      <Details variants={cardAnim}>

        <ContactItem variants={titleAnim}>
          <FontAwesomeIcon className='icon' icon={faAt} />
          <h3>khaledaymanmoh@gmail.com</h3>
        </ContactItem>
        <ContactItem variants={titleAnim}>
          <FontAwesomeIcon className='icon' icon={faPhoneAlt} />
          <h3>+201110788836</h3>
        </ContactItem>
        <ContactItem variants={titleAnim}>
          <FontAwesomeIcon className='icon' icon={faGithub} />
          <h3 className='link-to'><a href='https://github.com/khaledaymanmoh'>Github</a></h3>
        </ContactItem>

        <ContactItem variants={titleAnim}>
          <FontAwesomeIcon className='icon' icon={faLinkedin} />
          <h3 className='link-to'>
            <a href='https://www.linkedin.com/in/khaledaymanmoh/'>LinkedIn</a>
          </h3>
        </ContactItem>

        <ContactItem variants={titleAnim}>
          <FontAwesomeIcon className='icon' icon={faInstagram} />
          <h3 className='link-to'>
            <a href='http://www.instagram.com/khaledaymanmoh'>Instagram</a>
          </h3>
        </ContactItem>
      </Details>
      <ScrollTop />
    </StyledContacts>
  );
};

const Frame5 = styled(Frame4)`
  background: #d65a31;
`;
const StyledContacts = styled(motion.div)`
 min-height: 90vh;
background: #222831;
@media(max-height:768px){
  min-height:80vh;
}
 
  `;

const Details = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: left;
  min-width: fit-content;
  width: fit-content;
  min-height: 20vh;
  margin: 3rem auto;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0px 1px 20px 0px #000000;
  
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  margin: 0.5rem;
  
  h3 {
    margin-left: 1rem;
    color: #eeeeee;
    text-align:left;
  }

  .icon {
    color: #eee;
    font-size: 2rem;
  }

  .link-to {
    a{
    opacity:0.6;
    text-decoration: none;
    transition: 0.3s ease-out;
    color: #eeeeee;
    &:hover {
      opacity: 1;
      color:#d65a31;  
      }
    }
  }
`;

export default Contacts;
