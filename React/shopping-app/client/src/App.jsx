import UserLayout from "./pages/UserLayout"
import "./App.css"
import { BrowserRoutes, Route } from "react-router-dom"

export default function App() {
  return (
    <div className="App">
      <BrowserRoutes>
        <Routes>
          <Route path="/" element={<UserLayout />} />
          <Route  path="/mycart" element={<MyCart />} />
          <Route path="/myorder" element={<MyOrder />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRoutes>
    </div>
  )
}