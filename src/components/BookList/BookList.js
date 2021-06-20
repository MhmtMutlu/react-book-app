import React, { Component } from 'react'
import { bookCards } from '../../motion/variants.js'
import Book from "../Book/Book.js"
import { Wrapper, Title, BooksList } from "./styles"
import { BookContext } from "../../contexts/BookContext"

class BookList extends Component {

    render() {
        return (
            <BookContext.Consumer>
                {value => {
                    return (
                        <Wrapper>
                            <Title>
                                BookFolio
                            </Title>
                            <BooksList 
                                variant={bookCards}
                                initial="hidden"
                                animate="visible"
                            >
                                {value.books.map((book, index) => {
                                    return <Book book={book} key={index} />
                                })}
                            </BooksList>
                        </Wrapper>
                    )
                }}
            </BookContext.Consumer>
        )
    }
}

export default BookList
