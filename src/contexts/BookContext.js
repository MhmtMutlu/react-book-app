import React, {useState, useEffect} from "react"
import axios from "axios"

export const BookContext = React.createContext()

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
      axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=PsI9GW6O4obMK3SK7MnsKf9usfbaMWLB')
          .then(response => {
              setBooks(response.data.results.books)
          })
          .catch(err => {
              console.log(err)
          })
    }, [])

    const getBookByRank = (rank) => {
        const book = books.filter(b => b.rank == rank);
        console.log(book)
        return book;
    }

    const searchBook = (e) => {
        setSearch(e.target.value)
        console.log(e.target.value)
    }

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(search.toLowerCase())
    )
    
    return (
        <BookContext.Provider value={{ getBookByRank: getBookByRank, filteredBooks: filteredBooks, searchBook: searchBook }}>
            {props.children}
        </BookContext.Provider>
    )

}

export default BookContextProvider