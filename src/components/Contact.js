import React, { useEffect } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
    

function Contact(props) {

    React.useEffect(() => {

        gsap.fromTo('.messenger', 
        {    
            y: -1000,
        },
        {
            duration: 1.5,
            y: 0,
            ease: 'bounce', 
            scrollTrigger : {
                trigger: ".contactSocialContainer",
                start: "center bottom",
            }
        })

        gsap.fromTo('.linkedIn', 
        {   
            y: -1000,
        },
        {
            delay: 0.75,
            duration: 1.5,
            y: 0,
            ease: 'bounce',
            scrollTrigger : {
                trigger: ".contactSocialContainer",
                start: "center bottom"
            } 
        })

        gsap.fromTo('.viber', 
        {   
            y: -1000,
        },
        {
            delay: 1.5,
            duration: 1.5,
            y: 0,
            ease: 'bounce',
            scrollTrigger : {
                trigger: ".contactSocialContainer",
                start: "center bottom"
            } 
        })

        gsap.fromTo('.telegram', 
        {   
            y: -1000,
        },
        {
            delay: 2.5,
            duration: 1.5,
            y: 0,
            ease: 'bounce',
            scrollTrigger : {
                trigger: ".contactSocialContainer",
                start: "center bottom"
            } 
        })

        gsap.fromTo('.facebook', 
        {   
            y: -1000,
        },
        {
            delay: 2.5,
            duration: 1.5,
            y: 0,
            ease: 'bounce',
            scrollTrigger : {
                trigger: ".contactSocialContainer",
                start: "center bottom"
            } 
        })       
    }, [])
    
    return (
        <div className={`contact ${props.isLightMode ? "contactLight" : ""}`} id="contact">
            <div className="contactText">Get in touch.</div>
            <div className="contactSocialContainer">
                <a href="https://m.me/jamesadrian.merano" target="_blank"><div className="messenger">Messenger</div></a>   
                <a href="https://telegram.me/eytrigan" target="_blank"><div className="linkedIn">Telegram</div></a>
                <a href="viber://chat?number=+639239052827" target="_blank"><div className="viber">Viber</div></a>
                <a href="https://www.facebook.com/jamesadrian.merano" target="_blank"><div className="telegram">Facebook</div></a>
                {/* <a href="https://www.facebook.com/jamesadrian.merano" target="_blank"><div className="facebook">Facebook</div></a> */}
            </div>
        </div>
    )
}

export default Contact