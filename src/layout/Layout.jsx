import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"
import "../App.css"
import Footer from "../components/Footer"

export default function Layout() {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
