import React, { Component } from 'react'
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
                <BooksList>
                    {bookList}
                </BooksList>
            </Wrapper>
        )
    }
}

export default BookList
