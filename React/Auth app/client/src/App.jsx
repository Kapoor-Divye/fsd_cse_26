import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home, Counter, Stopwatch } from "./components/index"


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>          
            <Route path="/counter" element={<Counter />} />
            <Route path="/stopwatch" element={<Stopwatch />} />
            <Route path="/store" element={<h1>Store</h1>} />
            <Route path="*" element={<h1>Error 404: Page Not Found</h1>} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App