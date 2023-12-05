/* eslint-disable react/no-unescaped-entities */
import "../styles/Home.css"
import main from "/images/main.png"
import drive from "/images/drive.png"
import money from "/images/money.png"
import dollar from "/images/dollar.png"

import Cars from "./Cars"
import Plan from "./Plan"

export default function Home() {
    return (
        <>
            <div className="home">
                <div className="home-top">
                    <div className="home-top-detail">
                        <p className="home-plan">Plan your trip now</p>
                        <h1 className="home-save">
                            Save <span className="big">big</span> with our car rental
                        </h1>
                        <p className="home-rent">
                            Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.
                        </p>
                        <div className="home-btns">
                            <button className="home-btn black">Learn More</button>
                            <button className="home-btn orange">Book Ride</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* form */}
            <form className="form">
                <h2>Book a car</h2>
                <div className="select-inputs">
                    <div className="select-car select">
                        <label htmlFor="car-type"> Select Your Car Type</label>

                        <select className="s-car" name="select" id="car-type">
                            <option value="">Select Your Car Type</option>
                            <option value="Audi">Audi</option>
                            <option value="Audi">Golf</option>
                            <option value="Toyota">Toyota</option>
                            <option value="BMW">BMW</option>
                            <option value="BMW">Passat</option>
                            <option value="BMW">Mercedes</option>
                        </select>
                    </div>
                    <div className="pick-up-location select">
                        <label htmlFor="pick-location">Select pick up location</label>

                        <select className="s-car" name="date" id="pick-location">
                            <option value="">Select pick up location</option>
                            <option value="Manila">Manila</option>
                            <option value="Quezon City">Quezon City</option>
                            <option value="Makati">Makati</option>
                        </select>
                    </div>
                    <div className="drop-of select">
                        <label htmlFor="drop-location">Select pick up location</label>

                        <select className="s-car" name="" id="drop-location">
                            <option value="">Select pick drop of location</option>
                            <option value="Manila">Manila</option>
                            <option value="Quezon City">Quezon City</option>
                            <option value="Makati">Makati</option>
                        </select>
                    </div>
                    <div className="pick-date select">
                        <label htmlFor="pick-up-date">Pick-up</label>

                        <input className="s-car" type="date" id="pick-up-date" />
                    </div>
                    <div className="drop-date select">
                        <label htmlFor="drop-of-date">Drop-of</label>

                        <input className="s-car" id="drop-of-date" type="date" />
                    </div>
                    <button className="search-btn orange">Search</button>
                </div>
            </form>

            <Plan />

            <Cars />

            <div className="save">
                <h1>Save big with our cheap car rental!</h1>
                <p>Top Airports. Local Suppliers. 24/7 Support.</p>
            </div>

            <div className="three-cars">
                <img className="main-three" src={main} alt="main img" />
            </div>

            <div className="choose">
                <div className="choose-div">
                    <h2>Why Choose Us</h2>
                    <h1>Best valued deals you will ever find</h1>
                    <p>
                        Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for
                        your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you
                        the ultimate renting experience, so don't miss out on your chance to save big.
                    </p>
                    <button className="orange">Find Details</button>
                </div>
                <div className="choose-three">
                    <div className="cross">
                        <img src={drive} alt="driving img" />
                        <div className="cross-detail">
                            <h2>Cross Country Drive</h2>
                            <p>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
                        </div>
                    </div>
                    <div className="inclusive">
                        <img src={money} alt="money img" />
                        <div className="inclusive-detail">
                            <h2>All Inclusive Pricing</h2>
                            <p>Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</p>
                        </div>
                    </div>
                    <div className="hidden">
                        <img src={dollar} alt="dollar img" />
                        <div className="hidden-detail">
                            <h2>No Hidden Charges</h2>
                            <p>Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
