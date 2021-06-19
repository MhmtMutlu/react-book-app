import styled from "styled-components";

export const Card = styled.div`
    width: 20rem;
    position: relative;
    text-align: center;
    padding: 0.5rem;
    margin: 2rem 0 2rem 2.5rem;
    border-radius: 3rem;
    box-shadow: 1px 10px 18px #e3e3e3;
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