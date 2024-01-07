import "../styles/Footer.css"
import logoImage from "../assets/logo.svg"
import { Link } from "react-router-dom";

export default function Footer() {
    return (
            <div className="footer">
                <div className="logo-container">
                    <img className="logo" src={logoImage} alt="logo" />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis magni ut
                        sit, veniam magnam nesciunt corporis neque aliquam earum facere repudiandae
                        itaque exercitationem accusamus provident nemo quasi! Modi, amet iste.
                    </p>
                </div>
                <div className="link-container">
                    <h3>USEFUL LINKS</h3>
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <a href="https://github.com/northsurapee/Odin_Shopping_Cart" target="_blank" rel="noreferrer">Repository</a>
                    <a href="https://github.com/northsurapee" target="_blank" rel="noreferrer">northsurapee GitHub</a>
                </div>
            </div>
    )
}