/* eslint-disable react/no-unescaped-entities */
import selectCar from "/images/select-car.png"
import operator from "/images/operator.png"
import driving from "/images/driving.png"
import "../styles/Plan.css"

export default function Plan() {
    return (
        <>
            {/* plan */}
            <div className="plan-box">
                <div className="plan-top">
                    <p>Plan your trip now</p>
                    <h1>Quick & easy car rental</h1>
                </div>
                <div className="plan-detail">
                    <div className="plan-select-car plan-div">
                        <img src={selectCar} alt="select car" />
                        <h3>Select Car</h3>
                        <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
                    </div>
                    <div className="plan-contact-operator plan-div">
                        <img src={operator} alt="operator" />
                        <h3>Contact Operator</h3>
                        <p>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
                    </div>
                    <div className="plan-drive plan-div">
                        <img src={driving} alt="driving" />
                        <h3>Let's Drive</h3>
                        <p>Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
                    </div>
                </div>
            </div>
        </>
    )
}
