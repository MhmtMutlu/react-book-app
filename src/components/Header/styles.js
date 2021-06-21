import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 2rem 8rem;
    align-items: center;
`

export const SearchBar = styled.input`
    width: 40%;
    background-color: #ced4da;
    border-radius: 2rem;
    outline: none;
    padding 1rem 1rem;
    font-size: 24px;
`
export const Icon = styled(FontAwesomeIcon)`
    color: #ced4da;
`;

export const Title = styled.h1`
    font-size: 36px;
`