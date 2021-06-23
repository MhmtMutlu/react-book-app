import React, {useState, useEffect} from "react"
import axios from "axios"

export const BookContext = React.createContext()

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([])

    useEffect(() => {
      axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=PsI9GW6O4obMK3SK7MnsKf9usfbaMWLB')
          .then(response => {
              setBooks(response.data.results.books)
          })
          .catch(err => {
              console.log(err)
          })
  }, [])
    
      return (
          <BookContext.Provider value={[...books]}>
              {props.children}
          </BookContext.Provider>
      )

}

export default BookContextProvider