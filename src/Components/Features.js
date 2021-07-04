import BrandRecognition from '../assets/icon-brand-recognition.svg'
import DetailedRecords from '../assets/icon-detailed-records.svg'
import FullyCustomizable from '../assets/icon-fully-customizable.svg'
import {Featuress, FeatureHeading, FeatureDescription, FeatureCards, FeatureCard1, FeatureCard2, FeatureCard3, CardBox, CardBox2, SquareImage, CardTitle, CardDescription} from '../styled/FeatureStyle'

function Features(){
    return (
        <Featuress>
        <FeatureHeading>
            Advanced Statistics
          </FeatureHeading>
          <FeatureDescription>
            Track how your links are performing across the web with<br/>
            our advanced statistics dashboard.
          </FeatureDescription>
          <FeatureCards>
                <FeatureCard1><SquareImage>
                    <img src={BrandRecognition} alt="BR"></img>
                    </SquareImage>
                    <CardTitle>
                        Brand Recognition
                    </CardTitle>
                    <CardDescription>
                        Boost your brand recognition with <br/>
                        each click. Generic links don't mean a <br/>
                        thing. Branded links help instil <br/>
                        confidence in your content.
                    </CardDescription>
                </FeatureCard1>
                <li><CardBox></CardBox></li>
                <FeatureCard2><SquareImage>
                    <img src={DetailedRecords} alt="DR"></img>
                    </SquareImage>
                    <CardTitle>
                        Detailed Records
                    </CardTitle>
                    <CardDescription>
                        Gain insights into who is clicking your <br/>
                        links. Knowing when and where<br/>
                        people engage with your content <br/>
                        helps inform better decisions.
                    </CardDescription>
                </FeatureCard2>
                <li><CardBox2></CardBox2></li>
                <FeatureCard3><SquareImage>
                    <img src={FullyCustomizable} alt="FC"></img>
                    </SquareImage>
                    <CardTitle>
                        Fully Customizable
                    </CardTitle>
                    <CardDescription>
                        Improve brand awareness and <br/>
                        content discoverability through <br/>
                        customizable links, supercharging <br/>
                        audience engagement.
                    </CardDescription>
                </FeatureCard3>
          </FeatureCards>
          </Featuress>
    )
}

export default Features;