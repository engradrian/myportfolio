import React from "react"
import commerceImg from "../images/commerce.png"
import linkIcon from "../images/link.png"

function ProjectDescription(props) {

    const [isHoveringButton, setIsHoveringButton] = React.useState(false)
    const [isShowingProjectDescription, setIsShowingProjectDescription] = React.useState(false)
    const [isShowingBackground, setIsShowingBackground] = React.useState(false)
    const [isShowingTop, setIsShowingTop] = React.useState(false)
    const [isShowingRight, setIsShowingRight] = React.useState(false)
    const [isShowingLeft, setIsShowingLeft] = React.useState(false)
    const [isShowingBottom, setIsShowingBottom] = React.useState(false)
    const [isShowingBack, setIsShowingBack] = React.useState(false)

    React.useEffect(() => {
        if(props.isShowingProject) {
            setIsShowingProjectDescription(true)
            setTimeout(() => {
                setIsShowingBackground(true)
            }, 5)
            setTimeout(() => {
                setIsShowingTop(true)
            },100)
            setTimeout(() => {
                setIsShowingLeft(true)
                setIsShowingRight(true)
            }, 250)
            setTimeout(() => {
                setIsShowingBottom(true)
            }, 500)
            setTimeout(() => {
                setIsShowingBack(true)
            }, 750)
        }
    }, [props.isShowingProject])

    function closeProject() {
        setIsShowingBack(false)
        setIsShowingBottom(false)
        setIsShowingRight(false)
        setIsShowingLeft(false)
        setIsShowingTop(false)
        setTimeout(() => {
            setIsShowingBackground(false)
        }, 500)
        setTimeout(() => {
            setIsShowingProjectDescription(false)
            props.setIsShowingProject(false)
        }, 1005)
    }

    return (
        <div className={`projectDescription ${isShowingProjectDescription ? "showProjectDescription" : ""} ${isShowingBackground ? "projectDescriptionAppear" : ""}`}>
            <div className={`projectDescriptionTop ${isShowingTop ? "projectDescriptionTopAppear" : ""}`}>
                {props.title}
                <div onClick={closeProject} className={`backButton ${isShowingBack ? "backButtonAppear" : ""} ${props.isLightMode ? "backButtonLight" : ""}`}>
                ×
                </div>
            </div>
            <div className="projectDescriptionMiddle">
                <div className={`projectDescriptionLeft ${isShowingLeft ? "projectDescriptionLeftAppear" : ""}`}>
                    <div className="languagesList">Tech Stack: <span>{props.language}</span></div>
                    <div className="description">{props.description}</div>
                </div>
                <div className={`projectDescriptionRight ${isShowingRight ? "projectDescriptionRightAppear" : ""}`}>
                    <img src={props.img}></img>
                </div>
            </div>
            <div className={`projectDescriptionBottom ${isShowingBottom ? "projectDescriptionBottomAppear" : ""}`}>
                <a target="_blank" href={props.url}>
                    <div 
                        onMouseEnter={() => {setIsHoveringButton(true)}} 
                        onMouseLeave={() => {setIsHoveringButton(false)}}
                        className={`projectLinkButton ${props.isLightMode ? "projectLinkButtonLight" : ""}`}
                    >
                        <img src={linkIcon}></img>
                        <div className={`buttonText ${isHoveringButton ? "buttonTextAppear" : ""}`}>Try Project</div>
                    </div>
                </a>
            </div>
        </div>
    )
} 

export default ProjectDescription;