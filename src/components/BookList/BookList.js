import React, { Component } from 'react'
import { books } from '../../motion/variants.js'
import Book from "../Book/Book.js"
import { Wrapper, Title, BooksList } from "./styles"

class BookList extends Component {

    render() {

        const bookList = this.props.books.map((book, index) => {
            return <Book book={book} key={index} />
        })


        return (
            <Wrapper>
                <Title>
                    BookFolio
                </Title>
                <BooksList 
                    variant={books}
                    initial="hidden"
                    animate="visible"
                >
                    {bookList}
                </BooksList>
            </Wrapper>
        )
    }
}

export default BookList
