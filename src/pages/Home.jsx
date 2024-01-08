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
            <section id="four">
                <h2>World-class <b>composable businesses.</b></h2>
                <div className="para">
                    <div className="left">
                        <p>Quisque imperdiet nisl malesuada orci sodales cursus. Nunc laoreet vestibulum risus, quis rhoncus risus efficitur semper. Proin dapibus massa quam, a gravida urna lobortis a. Integer faucibus diam eget urna pharetra aliquet. Duis cursus dui sit amet massa dapibus, sagittis iaculis libero semper. Vivamus ac accumsan sapien, nec condimentum erat. Praesent placerat vitae nulla in pellentesque. Proin et urna vel libero sodales pulvinar a nec metus. Praesent eget odio non eros fringilla tempor quis at diam. Quisque vestibulum hendrerit elit, quis sagittis leo tempor pellentesque. Nulla mauris ligula, malesuada ac lobortis non, finibus eget quam. Nam enim mauris, commodo vitae iaculis et, ultricies ac urna. Pellentesque eget quam in urna consectetur sollicitudin et blandit urna. Suspendisse malesuada dignissim consequat.</p>
                        <br />
                        <p>In semper libero vel rhoncus maximus. Cras diam arcu, ultricies et cursus at, imperdiet nec leo. Praesent tempor magna ante. Integer elementum pretium enim, ornare tempor nisi ullamcorper eu. Praesent convallis porta felis at egestas. Fusce at sodales nibh. Fusce dignissim, risus a laoreet sodales, orci justo rhoncus sapien, quis sollicitudin nibh eros sed purus. Integer lobortis feugiat sem.</p>
                        <br />
                        <p>Aenean vitae lobortis dolor, sed molestie elit. Proin ac elit neque. Suspendisse ac dui sed diam feugiat sagittis. Phasellus maximus porttitor nunc sed hendrerit. Vestibulum convallis, magna at egestas condimentum, dui ex dignissim leo, non lobortis libero elit mattis ante. Cras semper ut mi non pellentesque. Sed dignissim laoreet orci ut laoreet.</p>
                    </div>
                    <div className="right">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum ullamcorper libero, eu laoreet ligula iaculis sit amet. Proin euismod malesuada nisi, et convallis mauris faucibus et. Cras laoreet risus velit, eu sollicitudin est pharetra dapibus. Proin justo odio, finibus id quam eu, rutrum sagittis massa. Donec eu turpis massa. Proin in est eu enim semper cursus in eget dui. Aliquam tempor, dolor venenatis facilisis feugiat, justo ante dapibus nunc, a hendrerit urna mi in ex. Etiam eget molestie diam, eu auctor leo. Suspendisse id odio quis est tincidunt vulputate et ac ligula. Fusce non est malesuada, egestas mi id, tristique erat. Ut pulvinar condimentum dui a congue. In hac habitasse platea dictumst. Ut ac varius ex. Integer efficitur eu ligula sit amet pretium. Nam eget sem convallis, eleifend erat vel, dapibus diam. Sed ullamcorper ac elit consequat pretium. Sed placerat suscipit nunc in sodales. Etiam interdum dapibus dui eu tincidunt. Phasellus enim mauris, pellentesque et diam non, maximus auctor eros. In risus tellus, consectetur eu porta quis, elementum sed justo.</p>
                    </div>
                </div>
                
            </section>
            <Footer />
        </>
    )
}