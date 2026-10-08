import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Input } from "./index"
import "./Login.css"

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleLogin = (e) => {
    e.preventDefault()
    if(email === "admin@admin.com" && password === "password") {
      navigate("/")
    } else {
      setMessage("Invalid Credentials")
    }
  }

  const handleReset = () => {
    setEmail("")
    setPassword("")
    setMessage("")
  }

  return (
    <div className="container">
      <form onSubmit={handleLogin}>
          <Input label="Email" type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
          <Input label="Password" type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />

          <button type="submit">Login</button>
          <button onClick={handleReset}>Reset</button>
      </form>
      <h2 style={{ color: "red" }}>{message}</h2>
    </div> 
  )
}

export default Login