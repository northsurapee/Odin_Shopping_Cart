/* eslint-disable react/prop-types */
import "../styles/Marquee.css"

export default function Marquee({content}) {
    return (
        <div className="marquee-container">
            <h1>{content}</h1>
            <h1>{content}</h1>
            <h1>{content}</h1>
            <h1>{content}</h1>
        </div>
    );
}