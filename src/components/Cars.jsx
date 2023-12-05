import { useState } from "react"
import "../styles/Car.css"
import Audi from "/images/audi.jpg"
import Golf from "/images/golf.jpg"
import Toyota from "/images/toyota.jpg"
import BMW from "/images/bmw.jpg"
import Passat from "/images/passat.jpg"
import Mercedes from "/images/mercedes.jpg"

export default function Cars() {
    const [selectedCar, setSelectedCar] = useState("Audi")

    const showImage = (car) => {
        setSelectedCar(car)
    }
    const image = {
        Audi,
        Golf,
        Toyota,
        BMW,
        Passat,
        Mercedes,
    }
    return (
        <div className="vehicle-model">
            <div className="vehicle-top">
                <h3>Vehicle Models</h3>
                <h1>Our rental fleet</h1>
                <p>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
            </div>

            <div className="vehicle-div">
                <div className="vehicle-btns">
                    {Object.keys(image).map((img) => (
                        <button className="vehicle-btn" onClick={() => showImage(img)} key={img}>
                            {img}
                        </button>
                    ))}
                </div>
                {/* Images */}
                {selectedCar && <img src={image[selectedCar]} alt={`${selectedCar} image`} className="car-type" />}

                <div className="vehicle-rate">
                    <h3>
                        $<span className="rate">45</span> rent
                        <br />
                        per day
                    </h3>
                </div>
            </div>
        </div>
    )
}
