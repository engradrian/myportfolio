import React from "react"

import certsImg from "../images/certs.png"
import certsActiveImg from "../images/certs_active.png"
import collegeImg from "../images/college.png"
import collegeActiveImg from "../images/college_active.png"
import highschoolImg from "../images/highschool.png"
import highschoolActiveImg from "../images/highschool_active.png"
import postgradImg from "../images/postgrad.png"
import postgradActiveImg from "../images/postgrad_active.png"

function Education(props) {

    const [highschool, setHighschool] = React.useState(false)
    const [college, setCollege] = React.useState(true)
    const [postgrad, setPostgrad] = React.useState(false)
    const [certs, setCerts] = React.useState(false)
    const [hsContents, setHsContents] = React.useState(false)
    const [collegeContents, setCollegeContents] = React.useState(true)
    const [postgradContents, setPostgradContents] = React.useState(false)
    const [certContents, setcertContents] = React.useState(false)

    function highschoolClickHandler() {
        setHighschool(true)
        setCollege(false)
        setPostgrad(false)
        setCerts(false)
        setTimeout(() => {
            setHsContents(true)
        }, 10)
        setCollegeContents(false)
        setPostgradContents(false)
        setcertContents(false)
    }

    function collegeClickHandler() {
        setHighschool(false)
        setCollege(true)
        setPostgrad(false)
        setCerts(false)
        setHsContents(false)
        setTimeout(() => {
            setCollegeContents(true)
        }, 10)
        setPostgradContents(false)
        setcertContents(false)
    }

    function postgradClickHandler() {
        setHighschool(false)
        setCollege(false)
        setPostgrad(true)
        setCerts(false)
        setHsContents(false)
        setCollegeContents(false)
        setTimeout(() => {
            setPostgradContents(true)
        }, 10)
        setcertContents(false)
    }

    function certsClickHandler() {
        setHighschool(false)
        setCollege(false)
        setPostgrad(false)
        setCerts(true)
        setHsContents(false)
        setCollegeContents(false)
        setPostgradContents(false)
        setTimeout(() => {
            setcertContents(true)
        }, 10)
    }

    return (
        <div className={`education ${props.education ? `educationShow` : ""}`}>
            <div className={`educationSidebar ${props.isLightMode ? "educationSidebarLight" : ""}`}>
                <div onClick={collegeClickHandler} className={`educationButtons ${college ? props.isLightMode ? "educationButtonActiveLight" : `educationButtonActive` : ""} `}>
                    <img src={college ? collegeActiveImg : collegeImg}></img>College
                </div>
                <div onClick={highschoolClickHandler} className={`educationButtons ${highschool ? props.isLightMode ? "educationButtonActiveLight" : `educationButtonActive` : ""}`}>
                    <img src={highschool ? highschoolActiveImg : highschoolImg}></img>Highschool
                </div>
                <div onClick={postgradClickHandler} className={`educationButtons ${postgrad ? props.isLightMode ? "educationButtonActiveLight" : `educationButtonActive` : ""}`}>
                    <img src={postgrad ? postgradActiveImg : postgradImg}></img>Post-grad
                </div>
                <div onClick={certsClickHandler} className={`educationButtons ${certs ? props.isLightMode ? "educationButtonActiveLight" : `educationButtonActive` : ""}`}>
                    <img src={certs ? certsActiveImg : certsImg}></img>Certificates
                </div>
            </div>
            <div className={`educationContents ${props.isLightMode ? "educationContentsLight" : ""}`}>
                { college && 
                    <div className={`educationContent ${collegeContents ? "showEducationContent" : ""}`}>
                        <div className="collegeProgram"><strong>Bachelor of Science in Construction Engineering (BSConE)</strong></div>
                        <div className="educationSchool">Antipolo Institute of Technology</div>
                        <div className="schoolLocation">Sitio Cabading Brgy. San Jose, Antipolo City</div>
                        <div className="schoolYear">2015 to 2020</div>
                    </div>
                }
                { highschool && 
                    <div className={`educationContent ${hsContents ? "showEducationContent" : ""}`}>
                        <div className="educationSchool"><strong>Don Antonio De Zuzuarregui Sr. Memorial Academy </strong>(DAZSMA)</div>
                        <div className="schoolYear">2010 to 2011</div>
                    </div>
                }
                { postgrad && 
                    <div className={`educationContent ${postgradContents ? "showEducationContent" : ""}`}>
                        <div><strong>CS50's Introduction to Computer Science</strong> - edx</div>
                        <div><strong>HarvardX: CS50's Web Programming with Python and JavaScript</strong> - edx</div>
                        <div><strong>Learn React with Bob Ziroll</strong> - scrimba</div>
                    </div>
                }
                { certs && 
                    <div className={`educationContent ${certContents ? "showEducationContent" : ""} `}>
                        <div className="educationCertList">
                            <div className="certCategory">Tech Industry</div>
                            <ul>
                                <li>CS50's Introduction to Computer Science</li>
                                <li>Hardware Servicing Business Software Application Adobe Photoshop ICT Web Page Design</li>
                            </ul>
                        </div>
                        <div className="educationCertList">
                            <div className="certCategory">Construction Industry</div>
                            <ul>
                                <li>Masonry (2017)</li>
                                <li>Tile Setting (2019)</li>
                                <li>Shielded Metal Arc Welding (2019)</li>
                                <li>Electrical Installation and Management (2019)</li>
                                <li>Plumbing (2019)</li>
                            </ul>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Education;