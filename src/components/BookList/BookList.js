import React, { useContext } from 'react'
import { bookCards } from '../../motion/variants.js'
import Book from "../Book/Book.js"
import { Wrapper, ListOfBooks, WrapperSection } from "./styles"
import { BookContext } from "../../contexts/BookContext"
import { ThemeContext } from "../../contexts/ThemeContext"

const BookList = () => {
    const { books } = useContext(BookContext)
    const book = books
        return (
            <ThemeContext.Consumer>
                {(contextTheme) => {
                    const { isDarkTheme, dark, light } = contextTheme
                    const theme = isDarkTheme ? dark : light
                    return (
                        <WrapperSection style={{background: theme.bg, color: theme.txt}}>
                            <Wrapper>
                                <ListOfBooks 
                                    variant={bookCards}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    {book?.map((book, index) => {
                                        return <Book book={book} key={index} />
                                    })}
                                </ListOfBooks>
                            </Wrapper>
                        </WrapperSection>
                    )
                }}
            </ThemeContext.Consumer>
        )
}

export default BookList
