import Book from './components/Book.jsx'
import './App.css'

const App = () => {
  return (
    <>
        <h1><center>My Book Store</center></h1>
        <div className="bookstore">
            <Book />
            <Book />
            <Book />
        </div>
    </>
  )
}

export default App