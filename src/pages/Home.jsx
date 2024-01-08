import Header from "../component/Header"
import Footer from "../component/Footer"
import textBackground from "../assets/innovate-text-gradient.png";
import heroImg from "../assets/hero-img.png";
import lipimg from "../assets/lips.png";
import arrow from "../assets/arrow.svg";
// import smilingFace from "../assets/bestbuy-face.png";
import { Link } from "react-router-dom";
import "../styles/Home.css"
import Marquee from "../component/Marquee";


export default function Home() {
    return (
        <>
            <Header />
            <section id="one">
                <div className="text-background">
                    <img src={textBackground} alt="text-background"/>
                </div>
                <div className="first-content">
                    <div className="left">
                        <div className="arrow-container">
                            <img src={arrow}/>
                            <img src={arrow}/>
                            <img src={arrow}/>
                            <img src={arrow}/>
                        </div>
                        <h1 className="main-text">
                            <span id="one">See with</span>
                            <br />
                            <span id="two">the future,</span>
                            <br />
                            <span id="three">not the past.</span>
                        </h1>
                        <p className="leading-5 max-w-prose">
                            Step into the future with the revolutionary <b>Apple VR headset</b>.
                            <br />
                            Experience immersive technology like never before. Embrace the next level of
                            digital reality.
                        </p>
                        <Link to="/shop">START SHOPPING</Link>
                    </div>

                    <div className="right">
                        <img className="lips" src={lipimg} alt="lip" />
                        <img className="hero" src={heroImg} alt="hero" />
                    </div>
                </div>
            </section>
            <Marquee content={"THE JOURNEY STARTS HERE"} />
            <Footer />
        </>
    )
}