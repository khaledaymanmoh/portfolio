import React from "react";
//Libraries
import { motion } from 'framer-motion';
import styled from "styled-components";
import { swipeFade, swipeAnim } from "../animation";

const Swipe = () => {
    return (
        <SwipeStyle variants={swipeFade} width="143" height="254" viewBox="0 0 143 254" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path variants={swipeAnim} d="M65.6967 145.303C68.6256 148.232 73.3744 148.232 76.3033 145.303L124.033 97.5736C126.962 94.6447 126.962 89.8959 124.033 86.967C121.104 84.0381 116.355 84.0381 113.426 86.967L71 129.393L28.5736 86.967C25.6447 84.0381 20.8959 84.0381 17.967 86.967C15.0381 89.8959 15.0381 94.6447 17.967 97.5736L65.6967 145.303ZM63.5 3.27835e-07L63.5 140L78.5 140L78.5 -3.27835e-07L63.5 3.27835e-07Z" fill="#D65A31" />
            <motion.path variants={swipeAnim} d="M14.304 206.336C12.096 206.336 10.112 205.952 8.352 205.184C6.624 204.384 5.264 203.296 4.272 201.92C3.28 200.512 2.768 198.896 2.736 197.072H7.392C7.552 198.64 8.192 199.968 9.312 201.056C10.464 202.112 12.128 202.64 14.304 202.64C16.384 202.64 18.016 202.128 19.2 201.104C20.416 200.048 21.024 198.704 21.024 197.072C21.024 195.792 20.672 194.752 19.968 193.952C19.264 193.152 18.384 192.544 17.328 192.128C16.272 191.712 14.848 191.264 13.056 190.784C10.848 190.208 9.072 189.632 7.728 189.056C6.416 188.48 5.28 187.584 4.32 186.368C3.392 185.12 2.928 183.456 2.928 181.376C2.928 179.552 3.392 177.936 4.32 176.528C5.248 175.12 6.544 174.032 8.208 173.264C9.904 172.496 11.84 172.112 14.016 172.112C17.152 172.112 19.712 172.896 21.696 174.464C23.712 176.032 24.848 178.112 25.104 180.704H20.304C20.144 179.424 19.472 178.304 18.288 177.344C17.104 176.352 15.536 175.856 13.584 175.856C11.76 175.856 10.272 176.336 9.12 177.296C7.968 178.224 7.392 179.536 7.392 181.232C7.392 182.448 7.728 183.44 8.4 184.208C9.104 184.976 9.952 185.568 10.944 185.984C11.968 186.368 13.392 186.816 15.216 187.328C17.424 187.936 19.2 188.544 20.544 189.152C21.888 189.728 23.04 190.64 24 191.888C24.96 193.104 25.44 194.768 25.44 196.88C25.44 198.512 25.008 200.048 24.144 201.488C23.28 202.928 22 204.096 20.304 204.992C18.608 205.888 16.608 206.336 14.304 206.336ZM66.9079 179.696L58.6999 206H54.1879L47.8519 185.12L41.5159 206H37.0039L28.7479 179.696H33.2119L39.2599 201.776L45.7879 179.696H50.2519L56.6359 201.824L62.5879 179.696H66.9079ZM73.4989 175.424C72.6669 175.424 71.9629 175.136 71.3869 174.56C70.8109 173.984 70.5229 173.28 70.5229 172.448C70.5229 171.616 70.8109 170.912 71.3869 170.336C71.9629 169.76 72.6669 169.472 73.4989 169.472C74.2989 169.472 74.9709 169.76 75.5149 170.336C76.0909 170.912 76.3789 171.616 76.3789 172.448C76.3789 173.28 76.0909 173.984 75.5149 174.56C74.9709 175.136 74.2989 175.424 73.4989 175.424ZM75.6109 179.696V206H71.2429V179.696H75.6109ZM87.4234 184.544C88.2874 183.04 89.5674 181.792 91.2634 180.8C92.9914 179.776 94.9914 179.264 97.2634 179.264C99.5994 179.264 101.711 179.824 103.599 180.944C105.519 182.064 107.023 183.648 108.111 185.696C109.199 187.712 109.743 190.064 109.743 192.752C109.743 195.408 109.199 197.776 108.111 199.856C107.023 201.936 105.519 203.552 103.599 204.704C101.711 205.856 99.5994 206.432 97.2634 206.432C95.0234 206.432 93.0394 205.936 91.3114 204.944C89.6154 203.92 88.3194 202.656 87.4234 201.152V218.48H83.0554V179.696H87.4234V184.544ZM105.279 192.752C105.279 190.768 104.879 189.04 104.079 187.568C103.279 186.096 102.191 184.976 100.815 184.208C99.4714 183.44 97.9834 183.056 96.3514 183.056C94.7514 183.056 93.2634 183.456 91.8874 184.256C90.5434 185.024 89.4554 186.16 88.6234 187.664C87.8234 189.136 87.4234 190.848 87.4234 192.8C87.4234 194.784 87.8234 196.528 88.6234 198.032C89.4554 199.504 90.5434 200.64 91.8874 201.44C93.2634 202.208 94.7514 202.592 96.3514 202.592C97.9834 202.592 99.4714 202.208 100.815 201.44C102.191 200.64 103.279 199.504 104.079 198.032C104.879 196.528 105.279 194.768 105.279 192.752ZM139.493 191.84C139.493 192.672 139.445 193.552 139.349 194.48H118.325C118.485 197.072 119.365 199.104 120.965 200.576C122.597 202.016 124.565 202.736 126.869 202.736C128.757 202.736 130.325 202.304 131.573 201.44C132.853 200.544 133.749 199.36 134.261 197.888H138.965C138.261 200.416 136.853 202.48 134.741 204.08C132.629 205.648 130.005 206.432 126.869 206.432C124.373 206.432 122.133 205.872 120.149 204.752C118.197 203.632 116.661 202.048 115.541 200C114.421 197.92 113.861 195.52 113.861 192.8C113.861 190.08 114.405 187.696 115.493 185.648C116.581 183.6 118.101 182.032 120.053 180.944C122.037 179.824 124.309 179.264 126.869 179.264C129.365 179.264 131.573 179.808 133.493 180.896C135.413 181.984 136.885 183.488 137.909 185.408C138.965 187.296 139.493 189.44 139.493 191.84ZM134.981 190.928C134.981 189.264 134.613 187.84 133.877 186.656C133.141 185.44 132.133 184.528 130.853 183.92C129.605 183.28 128.213 182.96 126.677 182.96C124.469 182.96 122.581 183.664 121.013 185.072C119.477 186.48 118.597 188.432 118.373 190.928H134.981Z" fill="#D65A31" />
        </SwipeStyle>
    );
}

const SwipeStyle = styled(motion.svg)`
    position:absolute;
    z-index: 1;
    top:100%;

    @media (max-width:768px){
        width:20%;
    }

`
export default Swipe;