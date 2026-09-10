import { Header, Footer, Navbar, Home } from "../components/index"


const UserLayout = () => {
  return (
    <div>
        <Header />
        <Navbar />
        <main>
            <Home />
        </main>
        <Footer />
    </div>
  )
}

export default UserLayout