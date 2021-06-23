import { motion } from "framer-motion";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Wrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 50rem;
  height: 26rem;
  padding: 4rem;
  background-color: #f4f4f4;
  border-radius: 1rem;

  @media (max-width: 1160px) {
    max-width: 30rem;
    height: 35rem;
  }

`;

export const Content = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(170, 170, 170, 0.7);
  backdrop-filter: blur(3px);
`;

export const CloseIconButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1040;
  background-color: Transparent;
  background-repeat:no-repeat;
  border: none;
  cursor:pointer;
`;

export const Icon = styled(FontAwesomeIcon)`
  color: var(--search-color);
`;