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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fuga
                        consequuntur qui. Provident dolorem earum eius ab illo ratione eum
                        ut. Odio, repellat tenetur temporibus obcaecati quod placeat. Nemo
                        autem similique molestiae asperiores voluptate! Dolore accusantium
                        qui similique voluptate nesciunt nulla magnam, corrupti vitae sed
                    </p>
                </motion.div>
            </Story>
        </Screen>
    );

}

export default MyStory;