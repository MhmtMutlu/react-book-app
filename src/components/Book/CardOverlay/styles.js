import { motion } from "framer-motion"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Backdrop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: inherit;
  width: 100%;
  height: 100%;
  background-color: rgba(180, 180, 180, 0.75);
  backdrop-filter: blur(2px);
`;

export const WrapperLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  cursor: pointer;
`;

export const WrapperContainer = styled(motion.div)`
  position: relative;
`;

export const Icon = styled(FontAwesomeIcon)`
  color: var(--search-color);
`;