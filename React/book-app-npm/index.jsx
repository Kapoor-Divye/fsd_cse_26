import ReactDOM from 'react-dom/client'
import bookImg from './images/image.png'
import React from 'react'

function Book() {
    return (
        <div className="book">
            <img src={new URL('./images/image.png', import.meta.url)} width="100" height="100" alt="Book img" />
            <h3>Title: ReactJS</h3>
            <h3>Price: Rs. 465</h3>
            <button>Add to Cart</button>
        </div>
    )
}

function App() {
    return (
        <div>
            <h1>
                <center>My Book Store</center>
            </h1>
            <div className="bookstore">
                <Book />
                <Book />
                <Book />
            </div>
        </div>
    )
}

const parent = document.getElementById('root')
const root = ReactDOM.createRoot(parent)
root.render(<App />)