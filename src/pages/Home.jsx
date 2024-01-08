import Header from "../component/Header"
import Footer from "../component/Footer"
import textBackground from "../assets/innovate-text-gradient.png";
import heroImg from "../assets/hero-img.png";
import lipimg from "../assets/lips.png";
import arrow from "../assets/arrow.svg";
import smilingFace from "../assets/bestbuy-face.png";
import desktop from "../assets/gaming-desktop.png";
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
            <section id="two">
                <div className="left">
                    <img src={smilingFace} alt="smiling-face" />
                    <Link to="/shop">MEET THE NEW AGE</Link>
                </div>
                <div className="right">
                    <h2>Tech is the <b>new age.</b></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nisl nec dictum vehicula, sapien metus convallis nisi, in tristique velit nulla tempor tortor. Ut vitae orci id purus efficitur viverra quis ut purus. Ut posuere vel augue a aliquet. Integer at erat lobortis, bibendum ex vitae, volutpat eros. Suspendisse euismod placerat nisi quis maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris volutpat pharetra malesuada. Cras non nisl imperdiet, posuere nunc quis, lobortis dui. Fusce mollis bibendum libero in ultrices. Nulla vulputate ullamcorper diam eget eleifend. Nulla id vehicula quam. Suspendisse dui justo, aliquam finibus lacinia eu, porta eget turpis.</p>
                    <br />
                    <p>Quisque condimentum tempor cursus. Nulla nunc massa, porta a venenatis in, ornare at arcu. Nam pharetra, dolor id suscipit semper, nisl tellus lacinia ligula, et sollicitudin nibh lorem eget metus. Donec in aliquam tellus.</p>
                </div>
            </section>
            <section id="three">
                <div className="text-container">
                    <span>Unleash their power. Unleash yours.</span>
                    <h2>BEST GAMING <b>DESKTOPS.</b></h2>
                </div>
                <Link to="/shop">
                    <img src={desktop} alt="desktop" />
                </Link>
            </section>
            <Footer />
        </>
    )
}