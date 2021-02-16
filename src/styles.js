import styled from 'styled-components';
import { motion } from "framer-motion";

export const Screen = styled(motion.div)`
  background: #222831;
  min-height: 90vh;
  @media (max-width: 786px) {
    min-height: 80vh;
  }
  h1 {
    color: #eeeeee;
    font-size: 3rem;
    @media (max-width: 786px) {
      font-size: 2rem;
    }
  }
  .line {
    height: 0.5rem;
    border-radius: 0.2rem;
    background: #d65a31;
    margin: auto;
  }
  h2 {
    color: #eeeeee;
    font-size: 2rem;

    @media (max-width: 786px) {
      font-size: 1.5rem;
    }

    span {
      color: #d65a31;
    }
  }
`;

export const Introduction = styled(motion.div)`
  position: relative;
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: center;
  z-index: 2;
  @media (max-width: 786px) {
    width: 90%;
  }
`;

export const Story = styled(Introduction)`
  width: 90%;
  .article {
    display: flex;
    @media (max-width: 786px) {
      flex-direction: column;
    }
    .image {
      flex: 4;
      img {
        @media (max-width: 786px) {
          width: 50%;
          margin: 1rem;
        }
        width: 80%;
        height: 100%;
        object-fit: cover;
        border-radius: 1rem;
        box-shadow: 0px 1px 20px 0px #000000;
      }
    }
    .parag {
      color: #eee;
      font-size: 1rem;
      flex: 6;
      padding: 5rem;
      @media (max-width: 786px) {
        padding: 0;
      }
    }
  }
`;