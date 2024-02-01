import React from "react"

import ProgressBar from "./ProgressBar"
import sqlLogo from "../images/SQL.png"
import jsLogo from "../images/JS.png"
import pythonLogo from "../images/Python.png"
import cLogo from "../images/C.png"
import RandomText from "./RandomText"

function Language(props) {

    const [mastery, setMastery] = React.useState(0)
    const [isShowingMastery, setIsShowingMastery] = React.useState(false)
    const [text, setText] = React.useState("")
    const [currentMastery, setCurrentMastery] = React.useState(0)

    function cHover () {
        setMastery(60)
        setCurrentMastery(60)
        setText("C")
        setIsShowingMastery(true)        
    }

    function pythonHover() {
        setMastery(75)
        setCurrentMastery(75) 
        setText("Python")
        setIsShowingMastery(true)             
    }

    function sqlHover() {
        setMastery(75)
        setCurrentMastery(75)
        setText("SQL")
        setIsShowingMastery(true)
    }

    function jsHover () {
        setMastery(85)
        setCurrentMastery(85)
        setText("JavaScript")
        setIsShowingMastery(true)
    }

    function cUnhover () {
        setMastery(0)
        setText("")
        setIsShowingMastery(false)
    }

    function pythonUnhover() {
        setMastery(0)
        setText("")
        setIsShowingMastery(false)
    }

    function sqlUnhover() {
        setMastery(0)
        setText("")
        setIsShowingMastery(false)
    }

    function jsUnhover () {
        setMastery(0)
        setText("")
        setIsShowingMastery(false)
    }
    return (
        <>
            <div className={`skillsRowTitle title1 ${props.isLightMode ? "skillsRowTitleLight" : ""}`}>
                LANGUAGE
            </div>
            <div className="logos">
                <img onMouseEnter={cHover} onMouseLeave={cUnhover} src={cLogo}></img>
                <img onMouseEnter={pythonHover} onMouseLeave={pythonUnhover}src={pythonLogo}></img>
                <img onMouseEnter={sqlHover} onMouseLeave={sqlUnhover}src={sqlLogo}></img>
                <img onMouseEnter={jsHover} onMouseLeave={jsUnhover}src={jsLogo}></img>
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

export default Language