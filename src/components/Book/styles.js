import styled from "styled-components";
import { motion } from "framer-motion"

export const Card = styled(motion.div)`
    width: 20rem;
    position: relative;
    text-align: center;
    padding: 0.5rem;
    margin: 2rem 0 2rem 2.5rem;
    border-radius: 3rem;
`

export const Image = styled.img`
    width: 100%;
    object-fit: cover;
    border-radius: 3rem 3rem 0 0;
`

export const Detail = styled.div`
    padding: 0.3rem;
`

export const Title = styled.h3`
    font-size: 28px;
    margin: 0.5rem 0;
`

export const Author = styled.p`
    min-height: 1rem;
    margin-top: 1rem;
`