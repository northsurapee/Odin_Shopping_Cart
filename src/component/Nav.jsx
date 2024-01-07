import "../styles/Nav.css"
import logoImage from "../assets/logo.svg"
import cartIcon from "../assets/cart.svg"
import { Link } from "react-router-dom";

export default function Nav() {
    return (
            <nav>
                <div className="logo-container">
                    <img className="logo" src={logoImage} alt="logo" />
                </div>
                <div className="link-container">
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <img className="cart" src={cartIcon} alt="cart" />
                </div>
            </nav>
    )
}