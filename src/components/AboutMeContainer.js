import React from "react"
import Education from "./Education"
import Work from "./Work"
import AboutMeDescription from "./AboutMeDescription"

function AboutMeContainer(props) { 
    const [aboutMe, setAboutMe] = React.useState(true)
    const [work, setWork] = React.useState(false)
    const [education, setEducation] = React.useState(false)

    function experienceClickHandler() {
        setAboutMe(false)
        setWork(true)
        setEducation(false)
    }

    function academeClickHandler() {
        setAboutMe(false)
        setWork(false)
        setEducation(true)
    }

    function aboutMeClickHandler() {
        setAboutMe(true)
        setWork(false)
        setEducation(false)
    }

    return (
        <div className={`aboutMeContainer ${props.isLightMode ? "aboutMeContainerLight" : ""}`}>
            <div className={`aboutMeButtonsContainer ${props.isLightMode ? "aboutMeButtonsContainerLight" : ""}`}>
                <div onClick={academeClickHandler} className={`${props.isLightMode ? "aboutMeButtonLight" : ""} aboutMeButton ${education ? props.isLightMode ? "activeAboutMeButtonLight" : `activeAboutMeButton` : ""}`}>EDUCATION</div>
                <div onClick={aboutMeClickHandler} className={`${props.isLightMode ? "aboutMeButtonLight" : ""} aboutMeButton ${aboutMe ? props.isLightMode ? "activeAboutMeButtonLight" : `activeAboutMeButton` : ""}`}>ABOUT ME</div>
                <div onClick={experienceClickHandler} className={`${props.isLightMode ? "aboutMeButtonLight" : ""} aboutMeButton ${work ? props.isLightMode ? "activeAboutMeButtonLight" : `activeAboutMeButton` : ""}`}>WORK EXPERIENCE</div>
            </div>
            <Education 
                isLightMode={props.isLightMode}
                education={education}
            />
            <AboutMeDescription 
                isLightMode={props.isLightMode}
                aboutMe={aboutMe}
            /> 
            <Work 
                isLightMode={props.isLightMode}
                work={work}
            />
        </div>
    )
}

export default AboutMeContainer