import aboutMain from "/images/about-main.jpg"
import "../styles/About.css"
import Plan from "./Plan"

export default function About() {
    return (
        <div className="about">
            <div className="about-top">
                <img src={aboutMain} alt="" />
                <div className="about-detail">
                    <h3>About Company</h3>
                    <h1>You start the engine and your adventure begins</h1>
                    <p>
                        Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially
                        the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal
                        strongly attended.
                    </p>
                </div>
            </div>
            <Plan />
        </div>
    )
}
