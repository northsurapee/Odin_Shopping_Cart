import Header from "../component/Header"
import Footer from "../component/Footer"
import shopBackground from "../assets/mw2-hd.jpg"
import "../styles/Shop.css"

export default function Shop() {
    return (
        <>
            <Header isBlack={false} />
            <div className="shop-background">
                <img src={shopBackground} alt="shop-background"/>
                <h1>GAMING STORE</h1>
            </div>
            <Footer />
        </>
        
    )
}