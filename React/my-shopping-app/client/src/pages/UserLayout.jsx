import { Header, Footer, Navbar } from "../components/index"
import { Outlet } from "react-router-dom"


const UserLayout = () => {
  return (
    <div>
        <Header />
        <Navbar />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default UserLayout