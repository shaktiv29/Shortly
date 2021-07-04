import IllustrationImage from "../assets/illustration-working.svg";
import { Illustrationn, IllustrationText, IllustrationHeading ,IllustrationDescription, IllustrationButton, IllustrationImagee } from "../styled/IllustrationStyle";

function Illustration(){
    return (
        <Illustrationn>
            <IllustrationText>
                <IllustrationHeading>
                    More than just
                    shorter links
                </IllustrationHeading>
                <IllustrationDescription>
                    Build your brand recognition and get detailed <br/>
                    insigth on how your links are performing.
                </IllustrationDescription>
                <IllustrationButton>Get Started</IllustrationButton>
            </IllustrationText>
                <IllustrationImagee src={IllustrationImage} alt="Illustration"></IllustrationImagee>
        </Illustrationn>
    )
}

export default Illustration;