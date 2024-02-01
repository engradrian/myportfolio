import Backend from "./Backend"
import Frontend from "./Frontend"
import Language from "./Language"

import ParallaxSection from './ParallaxSection'

function Skills(props) {
    return (
        <div id="skills" className="skills">
            <div className="leftSkills">
                <div className="upperParallax"></div>
                <div className="parallaxContainer">
                    <ParallaxSection />
                </div>
                <div className="lowerParallax"></div>
            </div>
            <div className={`rightSkills ${props.isLightMode ? "rightSkillsLight" : ""}`}>
                <div className="spacer"></div>
                <Language 
                    isLightMode={props.isLightMode}
                />
                <Frontend 
                    isLightMode={props.isLightMode}
                />
                <Backend 
                    isLightMode={props.isLightMode}
                />
            </div>
        </div>
    )
}

export default Skills 