import React, { Component } from 'react'
import { bookCards } from '../../motion/variants.js'
import Book from "../Book/Book.js"
import { Wrapper, BooksList, WrapperSection } from "./styles"
import { BookContext } from "../../contexts/BookContext"
import { ThemeContext } from "../../contexts/ThemeContext"

class BookList extends Component {

    render() {
        return (
            <ThemeContext.Consumer>
                {(contextTheme) => (
                    <BookContext.Consumer>
                        {contextBook => {
                            const { books } = contextBook
                            const { isDarkTheme, dark, light } = contextTheme
                            const theme = isDarkTheme ? dark : light
                            return (
                                <WrapperSection style={{background: theme.bg, color: theme.txt}}>
                                    <Wrapper>
                                        <BooksList 
                                            variant={bookCards}
                                            initial="hidden"
                                            animate="visible"
                                        >
                                            {books.map((book, index) => {
                                                return <Book book={book} key={index} />
                                            })}
                                        </BooksList>
                                    </Wrapper>
                                </WrapperSection>
                            )
                        }}
                    </BookContext.Consumer>
                )}
            </ThemeContext.Consumer>
        )
    }
}

export default BookList
