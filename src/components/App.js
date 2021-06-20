import React, { Component } from 'react'
import BookList from './BookList/BookList'
import BookContextProvider from '../contexts/BookContext'

class App extends Component {

    render() {
        return (
            <div>
              <BookContextProvider>
                <BookList />
              </BookContextProvider>
            </div>
        )
    }
}

export default App