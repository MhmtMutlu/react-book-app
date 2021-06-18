import React, { Component } from 'react'
import Book from "./Book.js"

class BookList extends Component {

    render() {

        const bookList = this.props.books.map((book, index) => {
            return <Book book={book} key={index} />
        })

        return (
            <div>
                {bookList}
            </div>
        )
    }
}

export default BookList
