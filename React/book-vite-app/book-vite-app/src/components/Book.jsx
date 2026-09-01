import '../Book.css'
import img from '../images/bookImg.png'

const Book = () => {
  return (
        <div className="book">
            <img src={img} width="100" height="100" alt="Book img" />
            <h3>Title: ReactJS</h3>
            <h3>Price: Rs. 465</h3>
            <button>Add to Cart</button>
        </div>
    )
}

export default Book