import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/stopwatch">Stopwatch</Link>  
        <Link to="/store">Store</Link>
        <Link to="/login">Login</Link>
    </div>
  )
}

export default Navbar