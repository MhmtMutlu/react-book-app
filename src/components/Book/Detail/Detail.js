import React from 'react'
import { useParams } from "react-router"
import { useContext } from "react"
import Modal from '../../Modal/Modal'
import * as s from "./styles"
import { BookContext } from '../../../contexts/BookContext'

const Detail = () => {
    const { rank } = useParams();
    const { getBookByRank } = useContext(BookContext);
    const getBook = getBookByRank(rank)
    return (
        <Modal>
            <s.Wrapper>
                <s.ImageContainer>
                    <s.Image src={getBook["0"].book_image} alt={getBook["0"].title} />
                </s.ImageContainer>
                <s.Detail>
                    <s.Title>{getBook["0"].title}</s.Title>
                    <s.Description>{getBook["0"].description}</s.Description>
                    <s.Author>{getBook["0"].author}</s.Author>
                    <s.ButtonWrapper>
                        <s.LinkButton href={getBook["0"].amazon_product_url} target="_blank" >
                            Amazon Link
                        </s.LinkButton>
                    </s.ButtonWrapper>
                </s.Detail>
            </s.Wrapper>
        </Modal>
    )
}

export default Detail