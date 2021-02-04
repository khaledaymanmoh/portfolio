import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//Icons
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt, faAt } from '@fortawesome/free-solid-svg-icons';

// import styled from 'styled-components';
import { titleAnim, pageAnimation, slider, cardAnim, lineAnim } from '../animation';
import { Frame4 } from './MyWork';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';

const Contacts = () => {
  return (
    <StyledContacts
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <Frame5 variants={slider} />
      <motion.div className="title">
        <motion.h1 variants={titleAnim}>Contacts</motion.h1>
        <motion.div variants={lineAnim} className='line'></motion.div>
      </motion.div>

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

  /* display: flex; */
 
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
    /* a{
    text-decoration: none;
    color: #eeeeee;

  } */
  }

  .icon {
    color: #eee;
    /* color: #d65a31; */
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
    /* opacity:0.5;
    &:hover {
      opacity: 1;

    } */
  }
`;

export default Contacts;
