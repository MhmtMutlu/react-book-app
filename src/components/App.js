import React, { Component } from 'react'
import BookList from './BookList/BookList'
import Header from './Header/Header'
import BookContextProvider from '../contexts/BookContext'
import ThemeContextProvider from '../contexts/ThemeContext'

class App extends Component {

    render() {
        return (
            <ThemeContextProvider>
              <BookContextProvider>
                <Header />
                <BookList />
              </BookContextProvider>
            </ThemeContextProvider>
        )
    }
}

export default App