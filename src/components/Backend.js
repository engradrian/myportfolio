import React from "react"

import ProgressBar from "./ProgressBar"
import RandomText from "./RandomText"

import djangoLogo  from "../images/django.png"
import flaskLogo from "../images/flask.png"
import phpLogo from "../images/php.png"
import nodeLogo from "../images/node.png"

function Backend(props) {

    const [mastery, setMastery] = React.useState(0)
    const [isShowingMastery, setIsShowingMastery] = React.useState(false)
    const [text, setText] = React.useState("")
    const [currentMastery, setCurrentMastery] = React.useState(0)

    function djangoHover () {
        setMastery(60)
        setCurrentMastery(60)
        setText("Django")
        setIsShowingMastery(true)        
    }
    function djangoUnhover () {
        setMastery(0)
        setText("")
        setIsShowingMastery(false)
    }
    function flaskHover () {
        setMastery(65)
        setCurrentMastery(65)
        setText("Flask")
        setIsShowingMastery(true)        
    }
    function flaskUnhover () {
        setMastery(0)
        setText("")
        setIsShowingMastery(false)
    }
    function phpHover () {
        setMastery(40)
        setCurrentMastery(40)
        setText("PHP")
        setIsShowingMastery(true)        
    }
    function phpUnhover () {
        setMastery(0)
        setText("")
        setIsShowingMastery(false)
    }
    function nodeHover () {
        setMastery(30)
        setCurrentMastery(30)
        setText("Node JS")
        setIsShowingMastery(true)        
    }
    function nodeUnhover () {
        setMastery(0)
        setText("")
        setIsShowingMastery(false)
    }

    return (
        <>
            <div className={`skillsRowTitle title3 ${props.isLightMode ? "skillsRowTitleLight" : ""}`}>
                BACKEND FRAMEWORKS
            </div>
            <div className="logos">
                <img onMouseEnter={djangoHover} onMouseLeave={djangoUnhover} src={djangoLogo}></img>
                <img onMouseEnter={flaskHover} onMouseLeave={flaskUnhover} src={flaskLogo}></img>
                <img onMouseEnter={phpHover} onMouseLeave={phpUnhover} src={phpLogo}></img>
                <img onMouseEnter={nodeHover} onMouseLeave={nodeUnhover} src={nodeLogo}></img>
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

export default Backend