import confetti from 'canvas-confetti';
import React from "react";
import screenshotImg from "../images/screenshot.png"
import portraitImg from "../images/portrait.png"
import redThumbtack from "../images/thumbtack-red.png"

import walkclub from "../images/walkclub.png"
import winwin from "../images/winwin.png"
import mines from "../images/mines.png"
import gbetWinner from "../images/gbet winner.png"
import onlineCasino from "../images/onlinecasino.png"
import blissBites from "../images/bliss bites.png"
import movies from "../images/movies.png"
import budgetTracker from "../images/budget-tracker.png"
import quizzical from "../images/quizzical.png"
import vietSite from "../images/viet site.png"
import notes from "../images/notes.png"
import blackjack from "../images/blackjack.png"
import vietPortPage1 from "../images/blue violet.png"
import vietLandingPage from "../images/viet landing page.png"
import vietPortPage2 from "../images/white.png"
import ProjectDescription from './ProjectDescription';

function FrontendProjects (props) {

  const [isClicked, setIsClicked] = React.useState(false)
  const [hoveredNumber, setHoveredNumber] = React.useState(0)
  const [allScreenshots, setAllScreenshots] = React.useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
  const [isShowingProject1, setIsShowingProject1] = React.useState(false)
  const [isShowingProject2, setIsShowingProject2] = React.useState(false)
  const [isShowingProject3, setIsShowingProject3] = React.useState(false)
  const [isShowingProject4, setIsShowingProject4] = React.useState(false)
  const [isShowingProject5, setIsShowingProject5] = React.useState(false)
  const [isShowingProject6, setIsShowingProject6] = React.useState(false)
  const [isShowingProject7, setIsShowingProject7] = React.useState(false)
  const [isShowingProject8, setIsShowingProject8] = React.useState(false)
  const [isShowingProject9, setIsShowingProject9] = React.useState(false)
  const [isShowingProject10, setIsShowingProject10] = React.useState(false)
  const [isShowingProject11, setIsShowingProject11] = React.useState(false)
  const [isShowingProject12, setIsShowingProject12] = React.useState(false)
  const [isShowingProject13, setIsShowingProject13] = React.useState(false)
  const [isShowingProject14, setIsShowingProject14] = React.useState(false)
  const [isShowingProject15, setIsShowingProject15] = React.useState(false)

  React.useEffect(() => {
    if (props.isHoveringBackend) {
      for (let i = 0; i < allScreenshots.length; i++) {
        unhoverScreenshot(allScreenshots[i])
       }
    }
  }, [props.isHoveringBackend])

  React.useEffect(() => {
   let filtered = allScreenshots.filter(number => number !== hoveredNumber)
    
   for (let i = 0; i < filtered.length; i++) {
    unhoverScreenshot(filtered[i])
   }
  }, [hoveredNumber])

  function hoverScreenshot(no) {
    props.setIsHoveringFrontend(true)
    setHoveredNumber(no)
    let screenshot = document.getElementById(`screenshot${no}`)

    if (no !== 10  && no !== 12 && no !== 13 && no !== 14 && no !== 15) {
      let leftThumbtack = document.getElementById(`leftThumbtack${no}`)
      let rightThumbtack = document.getElementById(`rightThumbtack${no}`)
      
      leftThumbtack.classList.add("removeThumbtack")
      rightThumbtack.classList.add("removeThumbtack")
      setTimeout(() => {
        screenshot.classList.add("screenshotHover")
        leftThumbtack.classList.add("opacityZero")
        rightThumbtack.classList.add("opacityZero")
      }, 200) 
    } else {
      let middleThumbtack = document.getElementById(`middleThumbtack${no}`)

      middleThumbtack.classList.add("removeThumbtack") 

      setTimeout(() => {
        screenshot.classList.add("screenshotHover")
        middleThumbtack.classList.add("opacityZero")
      }, 200) 
    }                                      
  }

  function unhoverScreenshot(no) {
    // setHoveredNumber(0)
    let screenshot = document.getElementById(`screenshot${no}`)
    screenshot.classList.remove("screenshotHover")

    if (no !== 10 && no !== 12 && no !== 13 && no !== 14 && no !== 15) {
      let leftThumbtack = document.getElementById(`leftThumbtack${no}`)
      let rightThumbtack = document.getElementById(`rightThumbtack${no}`)
      
      setTimeout(() => {
        leftThumbtack.classList.remove("opacityZero")
        rightThumbtack.classList.remove("opacityZero")
      }, 100)
      setTimeout(() => {
        leftThumbtack.classList.remove("removeThumbtack")
        rightThumbtack.classList.remove("removeThumbtack")
      }, 150)
    } else {
      let middleThumbtack = document.getElementById(`middleThumbtack${no}`)

      setTimeout(() => {
        middleThumbtack.classList.remove("opacityZero")
      }, 100)
      setTimeout(() => {
        middleThumbtack.classList.remove("removeThumbtack")
      }, 150)
    }
  }

  function triggerConfetti() {
    var count = 200;
    var defaults = {
      origin: { y: 0.7 },
      colors: ['#FFC428', '#282828'],
    };
        
    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }
        
    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  function frontendClickHandler() {
    setIsClicked(true)
    triggerConfetti()
    const screenshot1 = document.getElementById('screenshot1');
    screenshot1.classList.remove("screenshotCenter")
    setTimeout(() => {
      const screenshot2 = document.getElementById('screenshot2');
      screenshot2.classList.remove("screenshotCenter")
    }, 100)
    setTimeout(() => {
      const screenshot3 = document.getElementById('screenshot3');
      screenshot3.classList.remove("screenshotCenter")
    }, 200)
    setTimeout(() => {
      const screenshot4 = document.getElementById('screenshot4');
      screenshot4.classList.remove("screenshotCenter")
    }, 300)
    setTimeout(() => {
      const screenshot5 = document.getElementById('screenshot5');
      screenshot5.classList.remove("screenshotCenter")
    }, 400)
    setTimeout(() => {
      const screenshot6 = document.getElementById('screenshot6');
      screenshot6.classList.remove("screenshotCenter")
    }, 600)
    setTimeout(() => {
      const screenshot6 = document.getElementById('screenshot7');
      screenshot6.classList.remove("screenshotCenter")
    }, 700)
    setTimeout(() => {
      const screenshot6 = document.getElementById('screenshot8');
      screenshot6.classList.remove("screenshotCenter")
    }, 800)
    setTimeout(() => {
      const screenshot6 = document.getElementById('screenshot9');
      screenshot6.classList.remove("screenshotCenter")
    }, 900)
    setTimeout(() => {
      const screenshot6 = document.getElementById('screenshot10');
      screenshot6.classList.remove("screenshotCenter")
    }, 1000)
    setTimeout(() => {
      const screenshot6 = document.getElementById('screenshot11');
      screenshot6.classList.remove("screenshotCenter")
    }, 1100)
    setTimeout(() => {
      const screenshot6 = document.getElementById('screenshot12');
      screenshot6.classList.remove("screenshotCenter")
    }, 1200)
    setTimeout(() => {
      const screenshot6 = document.getElementById('screenshot13');
      screenshot6.classList.remove("screenshotCenter")
    }, 1300)
    setTimeout(() => {
      const screenshot6 = document.getElementById('screenshot14');
      screenshot6.classList.remove("screenshotCenter")
    }, 1400)
    setTimeout(() => {
      const screenshot6 = document.getElementById('screenshot15');
      screenshot6.classList.remove("screenshotCenter")
    }, 1500)
  }

  return (
    <div className={`frontEndProjects ${props.isLightMode ? "frontEndProjectsLight" : ""}`}>
        {
          isShowingProject1 && 
          <ProjectDescription 
            title="Walkclub"
            language="CSS, HTML, JavaScript, Google analytics"
            isShowingProject={isShowingProject1}
            setIsShowingProject={setIsShowingProject1}
            img={walkclub}
            description="Walkclub is a user-friendly app designed to turn daily walks into a source of income. Developed as my first project with Itechno, the app features a banner swiper section highlighting current offers. Additionally, it incorporates interactive elements such as a straightforward how to start guide, a benefits section, and a shoe display with swipe navigation for exploring various footwear options and details."
            url="https://engradrian.github.io/walkclub/"
            isLightMode={props.isLightMode}
          />
        }
        {
          isShowingProject2 && 
          <ProjectDescription 
            title="Winwin"
            language="CSS, HTML, JavaScript, Google Analytics, Adjust SDK"
            isShowingProject={isShowingProject2}
            setIsShowingProject={setIsShowingProject2}
            img={winwin}
            description="JavaScript played a key role in integrating third-party scripts like Google Analytics and the Adjust SDK, enabling interactive features such as button clicks and event tracking. SEO optimization was implemented through meta tags, and image optimization, including the use of the webp format, was employed for faster loading. The site also features third-party integrations for live chat functionality (LiveChat). Social media icons were linked to respective profiles, and security measures were taken to ensure the secure loading of external scripts using HTTPS. The implementation of a favicon enhances brand recognition in the browser tab."
            url="https://engradrian.github.io/winwin/"
            isLightMode={props.isLightMode}
          />
        }
        {
          isShowingProject3 && 
          <ProjectDescription 
            title="Mines"
            language="React"
            isShowingProject={isShowingProject3}
            setIsShowingProject={setIsShowingProject3}
            img={mines}
            description="This React JS project features a grid-based game where players uncover hidden gems while avoiding mines. Earn diamonds to increase the price, with the current multiplier displayed in the upper right. Set your bet and track your balance in the upper left. Reset your balance to 1,000 if needed. The project utilizes local storage to save game settings and balance for a seamless user experience."
            url="https://engradrian.github.io/mines/" 
            isLightMode={props.isLightMode}
          />
        }
        {
          isShowingProject4 && 
          <ProjectDescription 
            title="Winner Picker"
            language="CSS, HTML, JavaScript"
            isShowingProject={isShowingProject4}
            setIsShowingProject={setIsShowingProject4}
            img={gbetWinner}
            description="
            This project selects a winner from the users every day at 8 pm. It features a dynamic moving background implemented with JavaScript, creating an engaging visual experience. Additionally, a confetti effect is triggered when the winner is announced at 8 pm, adding a festive and celebratory element to the draw."
            url="https://engradrian.github.io/draw/" 
            isLightMode={props.isLightMode}
          />
        }
        {
          isShowingProject5 && 
          <ProjectDescription 
            title="Online Casino Website"
            language="React"
            isShowingProject={isShowingProject5}
            setIsShowingProject={setIsShowingProject5}
            img={onlineCasino}
            description="This is just a simple front-end interface of an online gaming casino built using React"
            url="https://engradrian.github.io/onlinecasino/" 
            isLightMode={props.isLightMode}
          />
        }
        {
          isShowingProject6 && 
          <ProjectDescription 
            title="Blissful Bites"
            language="React"
            isShowingProject={isShowingProject6}
            setIsShowingProject={setIsShowingProject6}
            img={blissBites}
            description="This is just a simple front-end interface of a restaurant website built using React"
            url="https://engradrian.github.io/blissfulbites/" 
            isLightMode={props.isLightMode}
          />
        }
        {
          isShowingProject7 && 
          <ProjectDescription 
            title="Movies"
            language="React"
            isShowingProject={isShowingProject7}
            setIsShowingProject={setIsShowingProject7}
            img={movies}
            description="This is just a simple front-end interface of a movie website built using React"
            url="https://engradrian.github.io/movies/" 
            isLightMode={props.isLightMode}
          />
        }
        {
          isShowingProject8 && 
          <ProjectDescription 
            title="Budget Tracker"
            language="React, Local Storage"
            isShowingProject={isShowingProject8}
            setIsShowingProject={setIsShowingProject8}
            img={budgetTracker}
            description="This app, built with React.js, is a handy budget tracker. It keeps tabs on your current expenses and smartly uses local storage to remember your data. So, even the page is reloaded, the budget details stay right where there. Simple, practical, and user-friendly."
            url="https://engradrian.github.io/budget-tracker/" 
            isLightMode={props.isLightMode}
          />
        }
        {
          isShowingProject9 && 
          <ProjectDescription 
            title="Quizzical"
            language="React"
            isShowingProject={isShowingProject9}
            setIsShowingProject={setIsShowingProject9}
            img={quizzical}
            description="This Scrimba Frontend Career Path final solo challenge involved creating a quiz app from a provided Figma design. Implemented using React, React Hooks, HTML, and CSS, the project fetched quiz data from the Open Trivia Database API. Notable problem-solving included ensuring correct display of special characters and randomizing answer orders."
            url="https://engradrian.github.io/quizzical/" 
            isLightMode={props.isLightMode}
          />
        }
        {
          isShowingProject10 && 
          <ProjectDescription 
            title="Viet Website"
            language="CSS, HTML, JavaScript"
            isShowingProject={isShowingProject10}
            setIsShowingProject={setIsShowingProject10}
            img={vietSite}
            description="A simple Vietnamese landing page website."
            url="https://engradrian.github.io/newsite/" 
            isLightMode={props.isLightMode}
          />
        }
        {
          isShowingProject11 && 
          <ProjectDescription 
            title="Notes"
            language="React, Local storage"
            isShowingProject={isShowingProject11}
            setIsShowingProject={setIsShowingProject11}
            img={notes}
            description="This is a basic note-taking app created with React that uses local storage. It provides a simple and fuss-free interface for jotting down, managing, and persisting your notes. The app allows easy creation, editing, and deletion of notes, offering a straightforward solution for efficient note management"
            url="https://engradrian.github.io/notes/" 
            isLightMode={props.isLightMode}
          />
        }
        {
          isShowingProject12 && 
          <ProjectDescription 
            title="Blackjack"
            language="React, Local storage"
            isShowingProject={isShowingProject12}
            setIsShowingProject={setIsShowingProject12}
            img={blackjack}
            description="
            Introducing a React-based Blackjack game app with local storage integration, this web application offers a straightforward and enjoyable experience. The goal is to provide users with a classic card game, where players aim to reach a card value of 21 without exceeding it. With local storage, the game ensures that progress is saved, allowing for easy resumption of play."
            url="https://engradrian.github.io/blackjack/" 
            isLightMode={props.isLightMode}
          />
        }
        {
          isShowingProject13 && 
          <ProjectDescription 
            title="Vietnam Site 2"
            language="CSS, HTML, JavaScript, Google analytics"
            isShowingProject={isShowingProject13}
            setIsShowingProject={setIsShowingProject13}
            img={vietPortPage1}
            description="A straightforward Vietnamese landing page website tailored specifically for mobile devices, as per the client's request."
            url="https://engradrian.github.io/sky_messenger/" 
            isLightMode={props.isLightMode}
          />
        }
        {
          isShowingProject14 && 
          <ProjectDescription 
            title="Vietnam Site 3"
            language="CSS, HTML, JavaScript"
            isShowingProject={isShowingProject14}
            setIsShowingProject={setIsShowingProject14}
            img={vietLandingPage}
            description="Developed a straightforward landing page to check if users are using the app and are part of our Telegram group. Once confirmed, users receive a reward directly in the app. Simplifying the process for a smooth and rewarding user experience."          
            url="https://engradrian.github.io/r2rlandingpage/" 
            isLightMode={props.isLightMode}
          />
        }
        {
          isShowingProject15 && 
          <ProjectDescription 
            title="Vietnam Site 4"
            language="CSS, HTML, JavaScript, Google analytics"
            isShowingProject={isShowingProject15}
            setIsShowingProject={setIsShowingProject15}
            img={vietPortPage2}
            description="A straightforward Vietnamese landing page website tailored specifically for mobile devices, as per the client's request."
            url="https://engradrian.github.io/tuenhi_messenger/" 
            isLightMode={props.isLightMode}
          />
        }
        <div className={`frontEndProjectsText ${isClicked ? `visibilityHidden` : ""} ${props.isLightMode ? "frontEndProjectsTextLight" : ""}`} onClick={frontendClickHandler}>FRONTEND FOCUSED PROJECTS</div>
        <div className="screenshotsContainer">
          <div onClick={() => setIsShowingProject1(true)} onMouseEnter={() => hoverScreenshot(1)} onMouseLeave={() => unhoverScreenshot(1)} className={`screenshot screenshot1 screenshotCenter`} id="screenshot1">
            <img src={walkclub}></img>
            <div className="pinsContainer">
              <div id="leftThumbtack1" className="leftThumbtack"><img src={redThumbtack}></img></div>
              <div id="rightThumbtack1" className="rightThumbtack"><img src={redThumbtack}></img></div>
            </div>
          </div>
          <div onClick={() => setIsShowingProject2(true)} onMouseEnter={() => hoverScreenshot(2)} onMouseLeave={() => unhoverScreenshot(2)} className={`screenshot screenshot2 screenshotCenter`} id="screenshot2">
            <img src={winwin}></img>
            <div className="pinsContainer">
              <div id="leftThumbtack2" className="leftThumbtack"><img src={redThumbtack}></img></div>
              <div id="rightThumbtack2" className="rightThumbtack"><img src={redThumbtack}></img></div>
            </div>
          </div>
          <div onClick={() => setIsShowingProject3(true)} onMouseEnter={() => hoverScreenshot(3)} onMouseLeave={() => unhoverScreenshot(3)} className={`screenshot screenshot3 screenshotCenter`} id="screenshot3">
            <img src={mines}></img>
            <div className="pinsContainer">
              <div id="leftThumbtack3" className="leftThumbtack"><img src={redThumbtack}></img></div>
              <div id="rightThumbtack3" className="rightThumbtack"><img src={redThumbtack}></img></div>
            </div>
          </div>
          <div onClick={() => setIsShowingProject4(true)} onMouseEnter={() => hoverScreenshot(4)} onMouseLeave={() => unhoverScreenshot(4)} className={`screenshot screenshot4 screenshotCenter`} id="screenshot4">
            <img src={gbetWinner}></img>
            <div className="pinsContainer">
              <div id="leftThumbtack4" className="leftThumbtack"><img src={redThumbtack}></img></div>
              <div id="rightThumbtack4" className="rightThumbtack"><img src={redThumbtack}></img></div>
            </div>
          </div>
          <div onClick={() => setIsShowingProject5(true)} onMouseEnter={() => hoverScreenshot(5)} onMouseLeave={() => unhoverScreenshot(5)} className={`screenshot screenshot5 screenshotCenter`} id="screenshot5">
            <img src={onlineCasino}></img>
            <div className="pinsContainer">
              <div id="leftThumbtack5" className="leftThumbtack"><img src={redThumbtack}></img></div>
              <div id="rightThumbtack5" className="rightThumbtack"><img src={redThumbtack}></img></div>
            </div>
          </div>
          <div onClick={() => setIsShowingProject6(true)} onMouseEnter={() => hoverScreenshot(6)} onMouseLeave={() => unhoverScreenshot(6)} className={`screenshot screenshot6 screenshotCenter`} id="screenshot6">
            <img src={blissBites}></img>
            <div className="pinsContainer">
              <div id="leftThumbtack6" className="leftThumbtack"><img src={redThumbtack}></img></div>
              <div id="rightThumbtack6" className="rightThumbtack"><img src={redThumbtack}></img></div>
            </div>
          </div>
          <div onClick={() => setIsShowingProject7(true)} onMouseEnter={() => hoverScreenshot(7)} onMouseLeave={() => unhoverScreenshot(7)} className={`screenshot screenshot7 screenshotCenter`} id="screenshot7">
            <img src={movies}></img>
            <div className="pinsContainer">
              <div id="leftThumbtack7" className="leftThumbtack"><img src={redThumbtack}></img></div>
              <div id="rightThumbtack7" className="rightThumbtack"><img src={redThumbtack}></img></div>
            </div>
          </div>
          <div onClick={() => setIsShowingProject8(true)} onMouseEnter={() => hoverScreenshot(8)} onMouseLeave={() => unhoverScreenshot(8)} className={`screenshot screenshot8 screenshotCenter`} id="screenshot8">
            <img src={budgetTracker}></img>
            <div className="pinsContainer">
              <div id="leftThumbtack8" className="leftThumbtack"><img src={redThumbtack}></img></div>
              <div id="rightThumbtack8" className="rightThumbtack"><img src={redThumbtack}></img></div>
            </div>
          </div>
          <div onClick={() => setIsShowingProject9(true)} onMouseEnter={() => hoverScreenshot(9)} onMouseLeave={() => unhoverScreenshot(9)} className={`screenshot screenshot9 screenshotCenter`} id="screenshot9">
            <img src={quizzical}></img>
            <div className="pinsContainer">
              <div id="leftThumbtack9" className="leftThumbtack"><img src={redThumbtack}></img></div>
              <div id="rightThumbtack9" className="rightThumbtack"><img src={redThumbtack}></img></div>
            </div>
          </div>
          <div onClick={() => setIsShowingProject10(true)} onMouseEnter={() => hoverScreenshot(10)} onMouseLeave={() => unhoverScreenshot(10)} className={`screenshot screenshot10 screenshotCenter`} id="screenshot10">
            <img src={vietSite}></img>
            <div className="pinsContainer">
              <div id="middleThumbtack10" className="middleThumbtack"><img src={redThumbtack}></img></div>
            </div>
          </div>
          <div onClick={() => setIsShowingProject11(true)} onMouseEnter={() => hoverScreenshot(11)} onMouseLeave={() => unhoverScreenshot(11)} className={`screenshot screenshot11 screenshotCenter`} id="screenshot11">
            <img src={notes}></img>
            <div className="pinsContainer">
              <div id="leftThumbtack11" className="leftThumbtack"><img src={redThumbtack}></img></div>
              <div id="rightThumbtack11" className="rightThumbtack"><img src={redThumbtack}></img></div>
            </div>
          </div>
          <div onClick={() => setIsShowingProject12(true)} onMouseEnter={() => hoverScreenshot(12)} onMouseLeave={() => unhoverScreenshot(12)} className={`screenshot screenshot12 screenshotCenter`} id="screenshot12">
            <img src={blackjack}></img>
            <div className="pinsContainer">
              <div id="middleThumbtack12" className="middleThumbtack"><img src={redThumbtack}></img></div>
            </div>
          </div>
          <div onClick={() => setIsShowingProject13(true)} onMouseEnter={() => hoverScreenshot(13)} onMouseLeave={() => unhoverScreenshot(13)} className={`screenshot screenshot13 screenshotCenter`} id="screenshot13">
            <img src={vietPortPage1}></img>
            <div className="pinsContainer">
              <div id="middleThumbtack13" className="middleThumbtack"><img src={redThumbtack}></img></div>
            </div>
          </div>
          <div onClick={() => setIsShowingProject14(true)} onMouseEnter={() => hoverScreenshot(14)} onMouseLeave={() => unhoverScreenshot(14)} className={`screenshot screenshot14 screenshotCenter`} id="screenshot14">
            <img src={vietLandingPage}></img>
            <div className="pinsContainer">
              <div id="middleThumbtack14" className="middleThumbtack"><img src={redThumbtack}></img></div>
            </div>
          </div>
          <div onClick={() => setIsShowingProject15(true)} onMouseEnter={() => hoverScreenshot(15)} onMouseLeave={() => unhoverScreenshot(15)} className={`screenshot screenshot15 screenshotCenter`} id="screenshot15">
            <img src={vietPortPage2}></img>
            <div className="pinsContainer">
              <div id="middleThumbtack15" className="middleThumbtack"><img src={redThumbtack}></img></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default FrontendProjects