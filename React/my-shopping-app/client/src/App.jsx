import { UserLayout, MyCart, MyOrder, Settings, Profile, Logout } from "./pages/index";
import { Home } from "./components/index";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="mycart" element={<MyCart />} />
            <Route path="myorder" element={<MyOrder />} />
            <Route path="settings" element={<Settings />} />
            <Route path="profile" element={<Profile />} />
            <Route path="logout" element={<Logout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
