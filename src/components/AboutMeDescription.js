function AboutMeDescription(props) {
    return (
        <div className={`aboutMeDescription ${props.aboutMe ? `aboutMeDescriptionShow`: ""} ${props.isLightMode ? "aboutMeDescriptionLight" : ""}`}>
            <div className="aboutMeTitle">Construction Engineer and <span>Web Developer</span></div>
            <div className="aboutMeContents">
                I have been working as a web developer since 2022, where I have gained proficiency in various frameworks and technologies including React. As a Construction Engineer with a strong interest in technology and software development, my experience includes overseeing the design and construction of various infrastructure projects. My technical skills encompass CSS, C, JavaScript, Python, SQL, Django, Bootstrap, HTML, React, and Flask. I find satisfaction in tackling the complexities of creating scalable and efficient software solutions. While leveraging my expertise in construction engineering, I am now actively pursuing a career transition to further enhance my skills and excel in the field of software development.
            </div>
        </div>
    )
}

export default AboutMeDescription;