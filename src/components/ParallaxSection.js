import React from "react"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import backTrees from "../images/back trees.png"
import clouds from "../images/clouds.png"
import frontTrees from "../images/front trees.png"
import mountains from "../images/mountains.png"
import land from "../images/land.png"
import sun from "../images/sun.png"
import background from "../images/parallax-background.png"
import skills from "../images/skills.png"


function ParallaxSection() {

    const ref = React.useRef()

    return (
        <>
            <Parallax pages={2} style={{ backgroundColor: "#1E1E1E", msOverflowStyle: 'none' }} ref={ref}>
                <ParallaxLayer offset={1} speed={1} >
                    <img src={background}></img>
                </ParallaxLayer>
                <ParallaxLayer >
                    <img src={skills}></img>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={-1} onClick={() => ref.current.scrollTo(2)}>
                    <img className="sun" src={sun} alt="Sun"></img>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={1.5} >
                    <img src={clouds} alt="Clouds"></img>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={1.25} >
                    <img src={mountains} alt="Background Trees"></img>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={1} >
                    <img src={backTrees} alt="Background Trees"></img>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0.75} >
                    <img src={land} ></img>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={3}>
                <ul class="fireflies"> 
                    <li></li> 
                    <li></li> 
                    <li></li> 
                    <li></li> 
                    <li></li> 
                    <li></li> 
                    <li></li> 
                    <li></li> 
                    <li></li> 
                    <li></li> 
                    <li></li> 
                    <li></li>  
                    <li></li> 
                    <li></li> 
                    <li></li> 
                    <li></li> 
                    <li></li> 
                    <li></li> 
                    <li></li> 
                    <li></li> 
                </ul> 
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0.5} onClick={() => ref.current.scrollTo(0)}>
                    <img src={frontTrees} ></img>
                </ParallaxLayer>
                
            </Parallax>
        </>
        
    )
}

export default ParallaxSection