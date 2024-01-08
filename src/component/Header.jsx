import "../styles/Header.css"
import logoImage from "../assets/logo.svg"
import { Link } from "react-router-dom";

export default function Header({isBlack}) {
    return (
            <nav className={`header ${isBlack ? "black-text" : "white-text"}`}>
                <div className="logo-container">
                    <img className="logo" src={logoImage} alt="logo" />
                </div>
                <div className="link-container">
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <svg
                        className="cart"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        >
                        <path d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                </div>
            </nav>
    )
}