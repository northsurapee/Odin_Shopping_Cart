/* eslint-disable react/prop-types */
import "../styles/Slidebar.css"

export default function Slidebar({ title, isOpen, children, onClose }) {
    return (
        <>
            <div className={`overlay ${isOpen ? "open" : ""}`}></div>
            <div className={`slidebar-container ${isOpen ? "open" : ""}`}>
                <div className="top">
                    <h2 className="slide-bar-title">{title} ✨</h2>
                    <svg
                        viewBox="0 0 24 24"
                        stroke="#000000"
                        strokeWidth={1.7}
                        width="2rem"
                        className="w-8 h-8 md:w-9 md:h-9"
                        onClick={onClose}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </div>
                <div className="children">
                    {children}
                </div>
            </div>
        </>
        
    );
}