import React from "react"
import CV from "../Merano_CV.pdf"
import moonIcon from "../images/moon.png"
import sunIcon from "../images/sunIcon.png"

function Header(props) {

    const [isNavbarVisible, setIsNavbarVisible] = React.useState(true)
    

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function handleScroll() {
        const top = window.scrollY;
        if (top > 50) {
            setIsNavbarVisible(false);
        } else {
            setIsNavbarVisible(true);
        }
    }


    return (
        <div className={`header-all ${isNavbarVisible ? "opacityQuarter" : ""} ${props.isLightMode ? "header-allLight" : ""}`}>
            <h2 className="logo">JA<span>M</span></h2>
            <div className="navbar-header">
                <div><a href='#home'>Home</a></div>
                <div><a href="#about">About Me</a></div>
                <div><a href="#skills">Skills</a></div>
                <div><a href="#projects">My Works</a></div>
                <div><a href="#contact">Contact</a></div>
            </div>
            <div className="main-navbar">
                <div onClick={() => props.setIsLightMode(prevState => !prevState)} className={`nightModeButton ${props.isLightMode ? "nightModeButtonLight" : ""}`}>
                    <div className={`middleCircle ${props.isLightMode ? "lightMode" : ""}`}></div>
                    <img style={props.isLightMode ? {opacity: 0} : {}} className="moonIcon" src={moonIcon}></img>
                    <img style={props.isLightMode ? {} : {opacity: 0}} className="sunIcon" src={sunIcon}></img>
                </div>
                <a href={CV} download="Merano_CV.pdf" className="btn3">Resume</a>
            </div>
        </div>
    )
}

export default Header;