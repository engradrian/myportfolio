import confetti from 'canvas-confetti';
import React from "react";
import screenshotImg from "../images/screenshot.png"
import ProjectDescription from './ProjectDescription';
import searchImg from "../images/search.jpg"
import wikiImg from "../images/wiki.jpg"
import commerceImg from "../images/commerce.jpg"
import networkImg from "../images/network.jpg"
import mailImg from "../images/mail.jpg"
import workoutImg from "../images/workout.jpg"
import yellowThumbtack from "../images/thumbtack-yellow.png"


function BackendProjects(props) {

    const [isClicked, setIsClicked] = React.useState(false)
    const [hoveredNumber, setHoveredNumber] = React.useState(0)
    const [allScreenshots, setAllScreenshots] = React.useState([1, 2, 3, 4, 5, 6])
    const [isShowingProject1, setIsShowingProject1] = React.useState(false)
    const [isShowingProject2, setIsShowingProject2] = React.useState(false)
    const [isShowingProject3, setIsShowingProject3] = React.useState(false)
    const [isShowingProject4, setIsShowingProject4] = React.useState(false)
    const [isShowingProject5, setIsShowingProject5] = React.useState(false)
    const [isShowingProject6, setIsShowingProject6] = React.useState(false)
    
    React.useEffect(() => {
      if (props.isHoveringFrontend) {
        for (let i = 0; i < allScreenshots.length; i++) {
          unhoverScreenshot(allScreenshots[i])
         }
      }
    }, [props.isHoveringFrontend])

    React.useEffect(() => {
      let filtered = allScreenshots.filter(number => number !== hoveredNumber)
       
      for (let i = 0; i < filtered.length; i++) {
       unhoverScreenshot(filtered[i])
      }
    }, [hoveredNumber])

    function hoverScreenshot(no) {
      setHoveredNumber(no)
      props.setIsHoveringBackend(true)
      let screenshot = document.getElementById(`backscreenshot${no}`)
  
      if (no !== 10  && no !== 12 && no !== 13) {
        let leftThumbtack = document.getElementById(`backLeftThumbtack${no}`)
        let rightThumbtack = document.getElementById(`backRightThumbtack${no}`)
        
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
      let screenshot = document.getElementById(`backscreenshot${no}`)
      screenshot.classList.remove("screenshotHover")
  
      if (no !== 10 && no !== 12 && no !== 13) {
        let leftThumbtack = document.getElementById(`backLeftThumbtack${no}`)
        let rightThumbtack = document.getElementById(`backRightThumbtack${no}`)
        
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
      const screenshot1 = document.getElementById('backscreenshot1');
      screenshot1.classList.remove("screenshotCenter")
      setTimeout(() => {
        const screenshot2 = document.getElementById('backscreenshot2');
        screenshot2.classList.remove("screenshotCenter")
      }, 200)
      setTimeout(() => {
        const screenshot3 = document.getElementById('backscreenshot3');
        screenshot3.classList.remove("screenshotCenter")
      }, 400)
      setTimeout(() => {
        const screenshot4 = document.getElementById('backscreenshot4');
        screenshot4.classList.remove("screenshotCenter")
      }, 600)
      setTimeout(() => {
        const screenshot5 = document.getElementById('backscreenshot5');
        screenshot5.classList.remove("screenshotCenter")
      }, 800)
      setTimeout(() => {
        const screenshot6 = document.getElementById('backscreenshot6');
        screenshot6.classList.remove("screenshotCenter")
      }, 1000)
    }

    return (
        <div className={`backEndProjects ${props.isLightMode ? "backEndProjectsLight" : ""}`}>
            {isShowingProject1 && 
              <ProjectDescription 
                title="Search"
                language="CSS, HTML, JavaScript, Bootstrap"
                isShowingProject={isShowingProject1}
                setIsShowingProject={setIsShowingProject1}
                img={searchImg}
                description="I recreated the Google search results page using HTML and CSS. This project taught me how to design and implement a complex user interface using modern web technologies, and helped me improve my attention to detail and problem-solving skills."
                url="https://searchpage.github.io/"
                isLightMode={props.isLightMode}
            />}
            {isShowingProject2 && 
              <ProjectDescription 
                title="Wiki"
                language="CSS, HTML, Bootstrap, Python, Django"
                isShowingProject={isShowingProject2}
                setIsShowingProject={setIsShowingProject2}
                img={wikiImg}
                description="I created a simple wiki using Django, a Python-based web framework. This project allowed me to understand how to build a dynamic web application from scratch, where users can create new pages, edit existing ones, and search for pages. Through this project, I learned how to use Django to manage user authentication, create dynamic templates, and interact with a database."
                url="https://adrian0129.pythonanywhere.com/"
                isLightMode={props.isLightMode}
            />}
            {isShowingProject3 && 
              <ProjectDescription 
                title="Commerce"
                language="CSS, HTML, JavaScript, Bootstrap, Python, Django, SQL"
                isShowingProject={isShowingProject3}
                setIsShowingProject={setIsShowingProject3}
                img={commerceImg}
                description="I built an e-commerce site using Django, where users can browse products, add them to their cart, and complete a purchase. This project helped me understand the complexities of building a real-world web application, including managing user data, integrating with third-party APIs, and handling payments."
                url="https://commerce29.pythonanywhere.com/"
                isLightMode={props.isLightMode}
            />}
            {isShowingProject4 && 
              <ProjectDescription 
                title="Network"
                language="CSS, HTML, JavaScript, Bootstrap, Python, Django, SQL"
                isShowingProject={isShowingProject4}
                setIsShowingProject={setIsShowingProject4}
                img={networkImg}
                description="I created a social network using Django, where users can make posts, follow other users, and like posts. This project helped me understand the intricacies of building a large-scale web application, including managing user-generated content, building a scalable data model, and implementing user-to-user interactions."
                url="https://network29.pythonanywhere.com"
                isLightMode={props.isLightMode}
            />}
            {isShowingProject5 && 
              <ProjectDescription 
                title="Mail"
                language="CSS, HTML, JavaScript, Bootstrap, Python, Django, SQL"
                isShowingProject={isShowingProject5}
                setIsShowingProject={setIsShowingProject5}
                img={mailImg}
                description="Mail involved building a simple email client using Django, where users can send and receive emails, reply to them, and archive them. Through this project, I gained valuable experience in building interactive web applications with real-time functionality, including working with websockets and implementing email functionality using simple mail transfer protocol."
                url="https://mail01.pythonanywhere.com/"
                isLightMode={props.isLightMode}
            />}
            {isShowingProject6 && 
              <ProjectDescription 
                title="Workout"
                language="CSS, HTML, JavaScript, Bootstrap, Python, Django, SQL"
                isShowingProject={isShowingProject6}
                setIsShowingProject={setIsShowingProject6}
                img={workoutImg}
                description="I developed a website app that tracks exercise routines and uses the Django framework and SQL database. Before using the website, users must register and log in. You can add routines on the home page, and when you go to a particular routine, it will prompt you for the name of the exercise, the number of sets, the number of repetitions per set, the time per set, and the time to rest. The first exercise in the program will begin automatically when you click the play button below the description div, and it will continue until all of the exercises in the routine have finished."
                url="https://engrdrei.pythonanywhere.com/"
                isLightMode={props.isLightMode}
            />}
            <div className={`frontEndProjectsText ${isClicked ? `visibilityHidden` : ""} ${props.isLightMode ? "frontEndProjectsTextLight" : ""}`} onClick={frontendClickHandler}>BACKEND FOCUSED PROJECTS</div>
            <div className="screenshotsContainer2">
              <div onMouseEnter={() => hoverScreenshot(1)} onMouseLeave={() => unhoverScreenshot(1)} onClick={() => setIsShowingProject1(true)} className={`screenshot screenshot1 screenshotCenter`} id="backscreenshot1">
                <img src={searchImg}></img>
                <div className="pinsContainer">
                  <div id="backLeftThumbtack1" className="leftThumbtack"><img src={yellowThumbtack}></img></div>
                  <div id="backRightThumbtack1" className="rightThumbtack"><img src={yellowThumbtack}></img></div>
                </div>
              </div>
              <div onMouseEnter={() => hoverScreenshot(2)} onMouseLeave={() => unhoverScreenshot(2)} onClick={() => setIsShowingProject2(true)} className={`screenshot screenshot2 screenshotCenter`} id="backscreenshot2">
                <img src={wikiImg}></img>
                <div className="pinsContainer">
                  <div id="backLeftThumbtack2" className="leftThumbtack"><img src={yellowThumbtack}></img></div>
                  <div id="backRightThumbtack2" className="rightThumbtack"><img src={yellowThumbtack}></img></div>
                </div>
                </div>
              <div onMouseEnter={() => hoverScreenshot(3)} onMouseLeave={() => unhoverScreenshot(3)} onClick={() => setIsShowingProject3(true)} className={`screenshot screenshot3 screenshotCenter`} id="backscreenshot3">
                <img src={commerceImg}></img>
                <div className="pinsContainer">
                  <div id="backLeftThumbtack3" className="leftThumbtack"><img src={yellowThumbtack}></img></div>
                  <div id="backRightThumbtack3" className="rightThumbtack"><img src={yellowThumbtack}></img></div>
                </div>
              </div>
              <div onMouseEnter={() => hoverScreenshot(4)} onMouseLeave={() => unhoverScreenshot(4)} onClick={() => setIsShowingProject4(true)} className={`screenshot screenshot4 screenshotCenter`} id="backscreenshot4">
                <img src={networkImg}></img>
                <div className="pinsContainer">
                  <div id="backLeftThumbtack4" className="leftThumbtack"><img src={yellowThumbtack}></img></div>
                  <div id="backRightThumbtack4" className="rightThumbtack"><img src={yellowThumbtack}></img></div>
                </div>
              </div>
              <div onMouseEnter={() => hoverScreenshot(5)} onMouseLeave={() => unhoverScreenshot(5)} onClick={() => setIsShowingProject5(true)} className={`screenshot screenshot5 screenshotCenter`} id="backscreenshot5">
                <img src={mailImg}></img>
                <div className="pinsContainer">
                  <div id="backLeftThumbtack5" className="leftThumbtack"><img src={yellowThumbtack}></img></div>
                  <div id="backRightThumbtack5" className="rightThumbtack"><img src={yellowThumbtack}></img></div>
                </div>
              </div>
              <div onMouseEnter={() => hoverScreenshot(6)} onMouseLeave={() => unhoverScreenshot(6)} onClick={() => setIsShowingProject6(true)} className={`screenshot screenshot6 screenshotCenter`} id="backscreenshot6">
                <img src={workoutImg}></img>
                <div className="pinsContainer">
                  <div id="backLeftThumbtack6" className="leftThumbtack"><img src={yellowThumbtack}></img></div>
                  <div id="backRightThumbtack6" className="rightThumbtack"><img src={yellowThumbtack}></img></div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default BackendProjects