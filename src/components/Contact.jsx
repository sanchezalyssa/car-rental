import "../styles/Contact.css"
import { BsTelephone } from "react-icons/bs"
import { HiOutlineMail } from "react-icons/hi"
import { MdOutlineLocationOn } from "react-icons/md"

export default function Contact() {
    return (
        <div className="contact">
            <div className="contact-left">
                <h1>Need additional information?</h1>
                <p className="contact-text">
                    A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of
                    experience.
                </p>
                <p className="contact-info">
                    <BsTelephone className="contact-icon" />
                    <span className="send">(123) 456-7789</span>
                </p>
                <p className="contact-info">
                    <HiOutlineMail className="contact-icon" />
                    <span className="send">carrental@gmail.com</span>
                </p>
                <p className="contact-info">
                    <MdOutlineLocationOn className="contact-icon" />
                    <span className="send">Manila, Philippines</span>
                </p>
            </div>
            <div className="contact-right">
                <form className="contact-form">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" placeholder="E.g: John Doe" />
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" placeholder="youremail@example.com" />
                    <label htmlFor="comment">Tell us about it</label>
                    <textarea id="comment" placeholder="Write here"></textarea>
                    <button className="orange">Send message</button>
                </form>
            </div>
        </div>
    )
}
