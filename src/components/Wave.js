import React from "react";
import { motion } from 'framer-motion';
import styled from "styled-components"
const Wave = () => {
    return (
        <WaveStyle viewBox="0 0 710 84" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                d="M8 42.0019C8 42.0019 384 -33.9981 381 42.0019C378 118.002 702 42.0019 702 42.0019"
                stroke="#d65a31"
                opacity="0.2"
                strokeWidth="8"
                strokeLinecap="round"
            />
        </WaveStyle>

    );
}
//Styled Components
const WaveStyle = styled.svg`
position:absolute;
z-index: 1;
top:30%;
left:0;

@media (max-width:768px){
    top:40%;
}

`
export default Wave;