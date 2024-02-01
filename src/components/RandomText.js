import React from "react"

function RandomText(props) {

    const [originalText, setOriginalText] = React.useState("")
    const [nextText, setNextText] = React.useState("")
    const [showingText, setShowingText] = React.useState("")

    React.useEffect(() => {
        setOriginalText(props.text)
    }, [props.text])

    React.useEffect(() => {
        let interval

        if (originalText === showingText) {
            clearInterval(interval)
        } 

        interval = setInterval(animateText, 200/(originalText.length + 1))

        return () => clearInterval(interval);
    }, [originalText, nextText, showingText])

    function animateText() {
        if (originalText !== nextText) {
            if (showingText.length > 0) {
                setShowingText(showingText.slice(0, showingText.length - 1))
            } else if (showingText.length === 0) {
                setNextText(originalText)
            }
        } else {
            setShowingText(nextText.slice(0, showingText.length + 1))
        }
    }

    return (
        <div className="textContainer">
            <div className="randomText">{showingText}</div>
            <div className={`randomTextBehind ${props.isLightMode ? "randomTextBehindLight" : ""}`}>{showingText}</div>
        </div>
    )
}

export default RandomText