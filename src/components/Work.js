import React from "react"

import engineer from "../images/engineer.png"
import engineerActive from "../images/engineer_active.png"
import programmer from "../images/programmer.png"
import programmerActive from "../images/programmer_active.png"

function Work(props) {
    
    const [work1, setWork1] = React.useState(false)
    const [work2, setWork2] = React.useState(false)
    const [work3, setWork3] = React.useState(false)
    const [work4, setWork4] = React.useState(false)
    const [work5, setWork5] = React.useState(false)
    const [work6, setWork6] = React.useState(true)
    const [work1Content, setWork1Content] = React.useState(false)
    const [work2Content, setWork2Content] = React.useState(false)
    const [work3Content, setWork3Content] = React.useState(false)
    const [work4Content, setWork4Content] = React.useState(false)
    const [work5Content, setWork5Content] = React.useState(false)
    const [work6Content, setWork6Content] = React.useState(true)

    function work1ClickHandler() {
        setWork1(true)
        setWork2(false)
        setWork3(false)
        setWork4(false)
        setWork5(false)
        setTimeout(() => {
            setWork1Content(true)
        }, 10)
        setWork6(false)
        setWork2Content(false)
        setWork3Content(false)
        setWork4Content(false)
        setWork5Content(false)
        setWork6Content(false)
    }

    function work2ClickHandler() {
        setWork1(false)
        setWork2(true)
        setWork3(false)
        setWork4(false)
        setWork5(false)
        setWork6(false)
        setWork1Content(false)
        setTimeout(() => {
            setWork2Content(true)
        }, 10)
        setWork3Content(false)
        setWork4Content(false)
        setWork5Content(false)
        setWork6Content(false)
    }

    function work3ClickHandler() {
        setWork1(false)
        setWork2(false)
        setWork3(true)
        setWork4(false)
        setWork5(false)
        setWork6(false)
        setWork1Content(false)
        setWork2Content(false)
        setTimeout(() => {
            setWork3Content(true)
        }, 10)
        setWork4Content(false)
        setWork5Content(false)
        setWork6Content(false)
    }

    function work4ClickHandler() {
        setWork1(false)
        setWork2(false)
        setWork3(false)
        setWork4(true)
        setWork5(false)
        setWork6(false)
        setWork1Content(false)
        setWork2Content(false)
        setWork3Content(false)
        setTimeout(() => {
            setWork4Content(true)
        }, 10)
        setWork5Content(false)
        setWork6Content(false)
    }

    function work5ClickHandler() {
        setWork1(false)
        setWork2(false)
        setWork3(false)
        setWork4(false)
        setWork5(true)
        setWork6(false)
        setWork1Content(false)
        setWork2Content(false)
        setWork3Content(false)
        setWork4Content(false)
        setTimeout(() => {
            setWork5Content(true)
        }, 10)
        setWork6Content(false)
    }
    function work6ClickHandler() {
        setWork1(false)
        setWork2(false)
        setWork3(false)
        setWork4(false)
        setWork5(false)
        setWork6(true)
        setWork1Content(false)
        setWork2Content(false)
        setWork3Content(false)
        setWork4Content(false)
        setWork5Content(false)
        setTimeout(() => {
            setWork6Content(true)
        }, 10);
    }

    return (
        <div className={`work ${props.work ? `workShow` : ""}`}>
            <div className="workContents">
                {work6 && 
                    <div className={`workContent ${work6Content ? "showWorkContent" : ""}`}>
                        <div className="workTitle">Web Developer</div>
                        <div className="workLocation"><strong>Itechno Specialist Inc.</strong> – RCBC Plaza, Ayala Avenue, Makati City</div>
                        <div className="workDate">May 2022 to January 2024</div>
                        <div className="workDetails">
                        <ul>
                            <li>Design and implement user interfaces for websites and web applications.</li>
                            <li>Develop responsive, cross-browser compatible layouts using HTML, CSS, and JavaScript.</li>
                            <li>Translate design wireframes and mockups into functional code in collaboration with UX/UI designers.</li>
                            <li>Integrate user-facing elements with server-side logic in collaboration with back-end developers.</li>
                            <li>Optimize web applications for performance, considering loading times and user experience.</li>
                            <li>Create dynamic and responsive user interfaces using React, leveraging a component-based architecture for scalability.</li>
                            <li>Developed a Telegram chatbot showcasing proficiency in bot development, natural language processing, and integration with external APIs.</li>
                            <li>Integrated a Facebook chatbot using ChatGPT for intelligent and context-aware responses, enhancing customer engagement and support.</li>
                        </ul>
                        </div>
                    </div>
                }
                {/* {work5 && 
                    <div className={`workContent ${work5Content ? "showWorkContent" : ""}`}>
                        <div className="workTitle">Site Inspector</div>
                        <div className="workLocation"><strong>Future Home of Alterations Plus, RowyVilla Construction Co. (RVCC)</strong> – 33 Polaris, Bel-Air Village, Makati City</div>
                        <div className="workDate">July 2022 to February 2023</div>
                        <div className="workDetails">
                            <ul>
                                <li>Monitored general contractor’s and subcontractors’ daily manpower count and daily activities.</li>
                                <li>Prepared and submitted daily accomplishment reports.</li>
                                <li>Coordinated on-site activities, and relays problems from the contractors to the owner side and vice versa.</li>
                                <li>Prepared and conducted meetings with the owner, general contractor, and subcontractors to discuss construction activities and resolve various problems.</li>
                                <li>Ensures manpower is enough to meet activity schedules.</li>
                                <li>Met up with neighbor’s representatives to solve issues caused by former contractors and project management.</li>
                                <li>Seek materials and equipment’s’ suppliers for the project.</li>
                            </ul>
                        </div>
                    </div>
                } */}
                {work4 && 
                    <div className={`workContent ${work4Content ? "showWorkContent" : ""}`}>
                        <div className="workTitle">Site Inspector</div>
                        <div className="workLocation"><strong>Navotas Hospital Extension, RowyVilla Construction Co. (RVCC)</strong> – San Jose, Navotas City</div>
                        <div className="workDate">December 2020 to May 2022</div>
                        <div className="workDetails">
                            <ul>
                                <li>Monitored general contractor’s daily manpower count.</li>
                                <li>Monitored general contractor’s daily activities.</li>
                                <li>Prepared and submitted daily accomplishment reports.</li>
                                <li>Coordinated on-site activities, and relays problems from the general contractor to the owner side and vice versa.</li>
                                <li>Attended meetings together with the owner, hospital admin, and general contractor to discuss construction activities and resolve various problems.</li>
                                <li>Ensures manpower is enough to meet activity schedules.</li>
                            </ul>
                        </div>
                    </div>
                }
                {work3 && 
                    <div className={`workContent ${work3Content ? "showWorkContent" : ""}`}>
                        <div className="workTitle">Site Inspector</div>
                        <div className="workLocation"><strong>Renovation of Residential House at Dasmariñas Village, RowyVilla Construction Co. (RVCC)</strong> – Makati, Metro Manila</div>
                        <div className="workDate">May 2022 to December 2022</div>
                        <div className="workDetails">
                            <ul>
                                <li>Facilitates roof repair and waterproofing.</li>
                                <li>Facilitates repair of tile flooring.</li>
                            </ul>
                        </div>
                    </div>
                }
                {work2 && 
                    <div className={`workContent ${work2Content ? "showWorkContent" : ""}`}>
                        <div className="workTitle">Site Inspector</div>
                        <div className="workLocation"><strong>Water Tank Project at MWSS Compound, RowyVilla Construction Co. (RVCC)</strong> – San Juan, Metro Manila</div>
                        <div className="workDate">March 2021 to June 2021</div>
                        <div className="workDetails">
                            <ul>
                                <li>Facilitates formworks erection.</li>
                                <li>Inspect rebars before concrete pouring.</li>
                                <li>Facilitates and instructs during concrete pouring.</li>
                            </ul>
                        </div>
                    </div>
                }
                {work1 && 
                    <div className={`workContent ${work1Content ? "showWorkContent" : ""}`}>
                        <div className="workTitle">Project-in-Charge</div>
                        <div className="workLocation"><strong>SMDC PARK RESIDENCES, AAMB Construction</strong> – Sta. Rosa Laguna</div>
                        <div className="workDate">July 2020 to November 2020</div>
                        <div className="workDetails">
                            <ul>
                                <li>In charge of the implementation of daily activities on site.</li>
                                <li>In charge of daily toolbox meetings.</li>
                                <li>Prepared and submitted project accomplishment reports.</li>
                                <li>Prepared progress billings and its supporting documents.</li>
                                <li>Prepared weekly payroll for manpower.</li>
                                <li>Estimated concrete pouring.</li>
                                <li>Ensured rebar and formwork is according to plan and meets standards before inspection of consultant.</li>
                                <li>Determined and monitored materials on site.</li>
                            </ul>
                        </div>
                    </div>
                }
            </div>
            <div className={`workSidebar ${props.isLightMode ? "workSidebarLight" : ""}`}>
                <div onClick={work6ClickHandler} className={`workButtons ${work6 ? props.isLightMode ? "workButtonActiveLight" : "workButtonActive" : ""}`}>
                    <img src={work6 ? programmerActive : programmer}></img>Web Developer
                </div>
                {/* <div onClick={work5ClickHandler} className={`workButtons ${work5 ? props.isLightMode ? "workButtonActiveLight" : "workButtonActive" : ""}`}>
                    <img src={work5 ? engineerActive : engineer}></img>Project Manager
                </div> */}
                <div onClick={work4ClickHandler} className={`workButtons ${work4 ? props.isLightMode ? "workButtonActiveLight" : "workButtonActive" : ""}`}>
                    <img src={work4 ? engineerActive : engineer}></img>Site Inspector
                </div>
                {/* <div onClick={work3ClickHandler} className={`workButtons ${work3 ? props.isLightMode ? "workButtonActiveLight" : "workButtonActive" : ""}`}>
                    <img src={work3 ? engineerActive : engineer}></img>Project Manager
                </div> */}
                <div onClick={work2ClickHandler} className={`workButtons ${work2 ? props.isLightMode ? "workButtonActiveLight" : "workButtonActive" : ""}`}>
                    <img src={work2 ? engineerActive : engineer}></img>Site Inspector
                </div>
                <div onClick={work1ClickHandler} className={`workButtons ${work1 ? props.isLightMode ? "workButtonActiveLight" : "workButtonActive" : ""}`}>
                    <img src={work1 ? engineerActive : engineer}></img>Project-In-Charge
                </div>
            </div>
        </div>
    )
}

export default Work;