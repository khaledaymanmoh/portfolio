import React from "react";
import { motion } from "framer-motion"
//Components
import Title from "./Title";
//Animations
import { fade, cardAnim } from "../animation";
import { useScroll } from "./useScroll";
//Images
import personalshot from '../images/personalshot.jpeg';
//Styles
import { Screen, Story } from "../styles"

const MyStory = () => {
    const [element, controls] = useScroll();

    return (
        <Screen variants={cardAnim} ref={element} animate={controls}>
            <Story>
                <Title title="My Story" />
                <motion.div variants={fade} className='article'>
                    <div className='image'>
                        <img src={personalshot} alt='' />
                    </div>

                    <p className='parag'>
                        I discovered my passion for computer programming in my early days in university, in which I was studying civil engineering, and due to my love for civil engineering then, combined with some fear of the unknown (to be honset), I decided not to switch majors, and self learn programming instead.
                        I started exploring different languages randomly and solving some problems using code during my years of studying, beside building a software for my Bachelor Thesis project using Matlab.
                        After graduating, I decided to shift to software Engineering, aiming to be a self-taught fullstack developer.
                        started the journey and here I am..
                    </p>
                </motion.div>
            </Story>
        </Screen>
    );

}

export default MyStory;