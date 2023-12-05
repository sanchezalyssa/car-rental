import "../styles/Footer.css"

export default function Footer() {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <footer>
            <p>Car Rental &copy; {year} All Rights Reserved. </p>
        </footer>
    )
}
