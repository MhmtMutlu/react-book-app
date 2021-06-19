import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1440px;
    margin: auto;
    padding: 1rem 3rem;

    @media (max-width: 1520px) {
        max-width: 1160px;
    }

    @media (max-width: 1160px) {
        max-width: 816px;
    }

    @media (max-width: 816px) {
        max-width: 420px;
    }
`

export const Title = styled.h3`
    padding: 3rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
    color: var(--primary-color);
`

export const BooksList = styled.div`
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;

    @media (max-width: 1520px) {
        grid-template-columns: 33% 33% 33%;
    }

    @media (max-width: 1160px) {
        grid-template-columns: 50% 50%;
    }

    @media (max-width: 816px) {
        grid-template-columns: 100%;
    }
`