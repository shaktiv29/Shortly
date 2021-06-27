import IllustrationImage from "../assets/illustration-working.svg";
import '../styles/Illustration.css'

function Illustration(){
    return (
        <div id="Illustration">
            <div id="Illustration-text">
                <div id="Illustration-heading">
                    More than just
                    shorter links
                </div>
                <div id="Illustration-description">
                    Build your brand recognition and get detailed <br/>
                    insigth on how your links are performing.
                </div>
                <button className="boost-button" id="Illustration-button">Get Started</button>
            </div>
                <img id="Illustration-image"src={IllustrationImage} alt="Illustration"></img>
        </div>
    )
}

export default Illustration;