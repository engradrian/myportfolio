import React from "react";

import FrontendProjects from "./FrontendProjects";
import BackendProjects from "./BackendProjects";

function Projects(props) {

    const [isHoveringBackend, setIsHoveringBackend] = React.useState(false)
    const [isHoveringFrontend, setIsHoveringFrontend] = React.useState(false)

    React.useEffect(() => {
        if (isHoveringBackend) {
            setIsHoveringFrontend(false)
        }
        if (isHoveringFrontend) {
            setIsHoveringBackend(false)
        }
    }, [isHoveringBackend, isHoveringFrontend])


    return (
        <div className="projects" id="projects">
            <BackendProjects 
                setIsHoveringBackend={setIsHoveringBackend}
                isHoveringFrontend={isHoveringFrontend}
                isLightMode={props.isLightMode}
            />
            <FrontendProjects 
                isHoveringBackend={isHoveringBackend}
                setIsHoveringFrontend={setIsHoveringFrontend}
                isLightMode={props.isLightMode}
            />
        </div>
    )
}

export default Projects;