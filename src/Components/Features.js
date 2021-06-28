import '../styles/Features.css'
import BrandRecognition from '../assets/icon-brand-recognition.svg'
import DetailedRecords from '../assets/icon-detailed-records.svg'
import FullyCustomizable from '../assets/icon-fully-customizable.svg'

function Features(){
    return (
        <section id="features">
        <div id="feature-heading">
            Advanced Statistics
          </div>
          <div id="feature-description">
            Track how your links are performing across the web with<br/>
            our advanced statistics dashboard.
          </div>
          <ul id="feature-cards">
                <li className="feature-card" id="feature-card-1"><div className="square-image">
                    <img src={BrandRecognition} alt="BR"></img>
                    </div>
                    <div className="card-title">
                        Brand Recognition
                    </div>
                    <div className="card-description">
                        Boost your brand recognition with <br/>
                        each click. Generic links don't mean a <br/>
                        thing. Branded links help instil <br/>
                        confidence in your content.
                    </div>
                </li>
                <li><div className="card-box" id="card-box-2"></div></li>
                <li className="feature-card" id="feature-card-2"><div className="square-image">
                    <img src={DetailedRecords} alt="DR"></img>
                    </div>
                    <div className="card-title">
                        Detailed Records
                    </div>
                    <div className="card-description">
                        Gain insights into who is clicking your <br/>
                        links. Knowing when and where<br/>
                        people engage with your content <br/>
                        helps inform better decisions.
                    </div>
                </li>
                <li><div className="card-box"></div></li>
                <li className="feature-card" id="feature-card-3"><div className="square-image">
                    <img src={FullyCustomizable} alt="FC"></img>
                    </div>
                    <div className="card-title">
                        Fully Customizable
                    </div>
                    <div className="card-description">
                        Improve brand awareness and <br/>
                        content discoverability through <br/>
                        customizable links, supercharging <br/>
                        audience engagement.
                    </div>
                </li>
          </ul>
          </section>
    )
}

export default Features;