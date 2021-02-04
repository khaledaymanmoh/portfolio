import React from 'react';
import styled from 'styled-components';
import { Link /*useLocation*/ } from 'react-router-dom';
import logo1 from '../images/logo1.png';

// import { motion } from 'framer-motion';
// import { lineAnim } from '../animation';

const Nav = () => {
  return (
    <NavStyle>
      <Link to='/'>
        <img id='logo' src={logo1} alt='' />
      </Link>
      <ul>
        <li>
          <Link to='/'>About</Link>
          <div className='line'></div>
        </li>
        <li>
          <Link to='/work'>My Work</Link>
          <div className='line'></div>
        </li>
        <li>
          <Link to='/contacts'>Contact</Link>
          <div className='line'></div>
        </li>
      </ul>
    </NavStyle>
  );
};

const NavStyle = styled.nav`
  position: sticky;
  top: 0;
  height: 10vh;
  display: flex;
  padding: 1rem 5rem;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  background: #393e46;
  box-shadow: 0px 1px 20px 0px #000000;
  z-index: 3;
  /* width:100%;x */
  #logo {
    width: 5rem;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    margin: 0rem 5rem;
    .line {
      height: 0.2rem;
      background: #d65a31;
      width: 0%;
      transition: 0.5s ease-out;
    }
    &:hover {
      .line {
        width: 100%;
      }
    }
  }
  a {
    color: #eeeeee;
    text-decoration: none;
  }

  @media screen and (max-width:786px){
    flex-direction:column;
    justify-content: space-around;
    height:20vh;
    text-align:center;
    /* padding:0; */
    ul{
      flex-direction: column;
      justify-content: center;
      li{
        font-size:1.2rem;
      }
    
    }
  }
`;

export default Nav;
