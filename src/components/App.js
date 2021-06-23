import React, { Component } from 'react'
import BookList from './BookList/BookList'
import Header from './Header/Header'
import BookContextProvider from '../contexts/BookContext'
import ThemeContextProvider from '../contexts/ThemeContext'
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {

    render() {
        return (
          <Router>
            <ThemeContextProvider>
              <BookContextProvider>
                <Header />
                <BookList />
              </BookContextProvider>
            </ThemeContextProvider>
          </Router>
        )
    }
}

export default App