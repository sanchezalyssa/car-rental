import icon from "/images/car-rental-icon.png"
import "../styles/Nav.css"
import { NavLink } from "react-router-dom"
import { IoIosMenu } from "react-icons/io"
import { IoClose } from "react-icons/io5"
import { useState } from "react"

export default function Navbar() {
    const [open, setOpen] = useState(false)

    function handleMenu() {
        setOpen((prevOpen) => !prevOpen)
    }
    const menuToggle = open ? "appear" : null
    return (
        <nav>
            <NavLink to="/">
                <img className="icon-car" src={icon} alt="rent icon" />
            </NavLink>
            <IoIosMenu onClick={handleMenu} className="burger-icon" />

            <div className={`links ${menuToggle}`}>
                <IoClose onClick={handleMenu} className="close-icon" />
                <NavLink end className={({ isActive }) => (isActive ? "nav-active" : null)} onClick={() => setOpen(false)} to="/">
                    Home
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? "nav-active" : null)} onClick={() => setOpen(false)} to="about">
                    About
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? "nav-active" : null)} onClick={() => setOpen(false)} to="testimonial">
                    Testimonials
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? "nav-active" : null)} onClick={() => setOpen(false)} to="contact">
                    Contact
                </NavLink>
            </div>

            <div className="sign-in">
                <NavLink>Sign in</NavLink>
                <NavLink className="register">Register</NavLink>
            </div>
        </nav>
    )
}
