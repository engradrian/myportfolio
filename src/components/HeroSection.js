import React from "react"

import heroImg from "../images/heropicture.png"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"

function HeroSection() {
    const [isColorChange, setIsColorChange] = React.useState(false)

    React.useEffect(() => {
        const intervalID = setInterval(() => {
            setIsColorChange(prevState => !prevState)
        }, 2000)

        return () => clearInterval(intervalID)
    }, [])

    return (
        <ParallaxProvider>
            <div className="heroSection" id="home">
                <Parallax speed={-3}>
                    <div className="heroPictureContainer">
                        <img src={heroImg}></img>
                    </div>
                </Parallax>
                <Parallax speed={3}>
                    <div className="heroTextContainer">
                        <div className={`heroName ${isColorChange ? "heroNameBg" : ""}`}>James Adrian Merano</div>
                        <div className="heroWork">Frontend Web Developer</div>
                    </div>
                </Parallax>
            </div>
        </ParallaxProvider>
    )
}

export default HeroSection