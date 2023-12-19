/* eslint-disable react/no-unescaped-entities */
import "../styles/Testimonial.css"
import harry from "/images/harry.jpg"
import ron from "/images/ron.jpg"

export default function Testimonial() {
    return (
        <div className="testimonial">
            <div className="test-top">
                <h2>Reviewed by People</h2>
                <h1>Client's Testimonials</h1>
                <p>
                    Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our
                    service and results, and they're eager to share their positive experiences with you.
                </p>
            </div>
            <div className="test-cards">
                <div className="harry">
                    <p className="comments">
                        "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very
                        affordable. "
                    </p>
                    <div className="harry-detail">
                        <img src={harry} alt="harry img" loading="eager" />
                        <div className="harry-name">
                            <p className="name">Sandy Potter</p>
                            <p>Makati</p>
                        </div>
                    </div>
                </div>
                <div className="harry">
                    <p className="comments">
                        "The car was in great condition and made our trip even better. Highly recommend for this car rental website!"
                    </p>
                    <div className="ron-detail">
                        <img src={ron} alt="ron img" loading="eager" />
                        <div className="ron-name">
                            <p className="name">Ron Witzy</p>
                            <p>Manila</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
