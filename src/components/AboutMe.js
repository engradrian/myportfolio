import AboutMeContainer from "./AboutMeContainer";

import User from "../images/R (1).png"

function AboutMe(props) {
    return (
        <div className={`aboutMe ${props.isLightMode ? "aboutMeLight" : ""}`} id="about">
            <div className="userImageContainer">
                <div class={`myImage ${props.isLightMode ? "myImageLight" : ""}`}></div>
            </div>
            <AboutMeContainer 
                isLightMode={props.isLightMode}
            />
        </div>
    )
}

export default AboutMe;