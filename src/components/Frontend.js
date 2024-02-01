import React from "react"
import ProgressBar from "./ProgressBar"
import RandomText from "./RandomText"
import photoshopLogo from "../images/photoshop.png"
import figmaLogo from "../images/figma.png"
import reactLogo from "../images/react.png"
import bootstrapLogo from "../images/bootstrap.png"
import htmlLogo from "../images/html.png"
import cssLogo from "../images/css.png"

function Frontend(props) {
    const [text, setText] = React.useState("")
    const [mastery, setMastery] = React.useState(0)
    const [isShowingMastery, setIsShowingMastery] = React.useState(false)
    const [currentMastery, setCurrentMastery] = React.useState(0)

    function photoshopHover () {
        setMastery(95)
        setCurrentMastery(95)
        setText("Photoshop")
        setIsShowingMastery(true)        
    }

    function photoshopUnhover () {
        setMastery(0)
        setText("")
        setIsShowingMastery(false)
    }

    function figmaHover () {
        setMastery(90)
        setCurrentMastery(90)
        setText("Figma")
        setIsShowingMastery(true)        
    }

    function figmaUnhover () {
        setMastery(0)
        setText("")
        setIsShowingMastery(false)
    }

    function reactHover () {
        setMastery(85)
        setCurrentMastery(85)
        setText("React")
        setIsShowingMastery(true)        
    }

    function reactUnhover () {
        setMastery(0)
        setText("")
        setIsShowingMastery(false)
    }

    function bootstrapHover () {
        setMastery(90)
        setCurrentMastery(90)
        setText("Bootstrap")
        setIsShowingMastery(true)        
    }

    function bootstrapUnhover () {
        setMastery(0)
        setText("")
        setIsShowingMastery(false)
    }

    function htmlHover () {
        setMastery(95)
        setCurrentMastery(95)
        setText("HTML")
        setIsShowingMastery(true)        
    }

    function htmlUnhover () {
        setMastery(0)
        setText("")
        setIsShowingMastery(false)
    }

    function cssHover () {
        setMastery(90)
        setCurrentMastery(90)
        setText("CSS")
        setIsShowingMastery(true)        
    }

    function cssUnhover () {
        setMastery(0)
        setText("")
        setIsShowingMastery(false)
    }
    return (
        <>
            <div className={`skillsRowTitle title2 ${props.isLightMode ? "skillsRowTitleLight" : ""}`}>
                FRONTEND FRAMEWORKS
            </div>
            <div className="logos">
                <img onMouseEnter={photoshopHover} onMouseLeave={photoshopUnhover} src={photoshopLogo}></img>
                <img onMouseEnter={figmaHover} onMouseLeave={figmaUnhover} src={figmaLogo}></img>
                <img onMouseEnter={reactHover} onMouseLeave={reactUnhover} src={reactLogo}></img>
                <img onMouseEnter={bootstrapHover} onMouseLeave={bootstrapUnhover} src={bootstrapLogo}></img>
                <img onMouseEnter={htmlHover} onMouseLeave={htmlUnhover} src={htmlLogo}></img>
                <img onMouseEnter={cssHover} onMouseLeave={cssUnhover} src={cssLogo}></img>
            </div>
            <RandomText 
                text={text} 
                isLightMode={props.isLightMode}
            />
            <div className="spacer">
                <div className={`masteryContainer ${isShowingMastery ? "showMastery" : ""}`}>
                    <div className={`mastery `}>Mastery: <div className="masteryText">{currentMastery}</div></div>
                </div>
                <ProgressBar 
                    mastery={mastery} 
                    isLightMode={props.isLightMode}
                />
            </div>
        </>
    )
}

export default Frontend