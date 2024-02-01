import React from "react"

function ProgressBar(props) {

    const [numberOfBars, setNumberOfBars] = React.useState(0)

    React.useEffect(() => {
        let bar = props.mastery / 2
        setNumberOfBars(bar)
    }, [props.mastery])

    let transition = 0.1

    return (
        <div className="progressBar">
            <div className={`innerBar ${props.isLightMode ? "innerBarLight" : ""}`}>
                <div className={`bar ${numberOfBars >= 1 ? "showBar" : ""}`} style={numberOfBars >= 1 ? {transitionDelay: `${(transition / numberOfBars) * 1}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 50}s`}}></div>
                <div className={`bar ${numberOfBars >= 2 ? "showBar" : ""}`} style={numberOfBars >= 2 ? {transitionDelay: `${(transition / numberOfBars) * 2}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 49}s`}}></div>
                <div className={`bar ${numberOfBars >= 3 ? "showBar" : ""}`} style={numberOfBars >= 3 ? {transitionDelay: `${(transition / numberOfBars) * 3}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 48}s`}}></div>
                <div className={`bar ${numberOfBars >= 4 ? "showBar" : ""}`} style={numberOfBars >= 4 ? {transitionDelay: `${(transition / numberOfBars) * 4}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 47}s`}}></div>
                <div className={`bar ${numberOfBars >= 5 ? "showBar" : ""}`} style={numberOfBars >= 5 ? {transitionDelay: `${(transition / numberOfBars) * 5}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 46}s`}}></div>
                <div className={`bar ${numberOfBars >= 6 ? "showBar" : ""}`} style={numberOfBars >= 6 ? {transitionDelay: `${(transition / numberOfBars) * 6}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 45}s`}}></div>
                <div className={`bar ${numberOfBars >= 7 ? "showBar" : ""}`} style={numberOfBars >= 7 ? {transitionDelay: `${(transition / numberOfBars) * 7}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 44}s`}}></div>
                <div className={`bar ${numberOfBars >= 8 ? "showBar" : ""}`} style={numberOfBars >= 8 ? {transitionDelay: `${(transition / numberOfBars) * 8}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 43}s`}}></div>
                <div className={`bar ${numberOfBars >= 9 ? "showBar" : ""}`} style={numberOfBars >= 9 ? {transitionDelay: `${(transition / numberOfBars) * 9}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 42}s`}}></div>
                <div className={`bar ${numberOfBars >= 10 ? "showBar" : ""}`} style={numberOfBars >= 10 ? {transitionDelay: `${(transition / numberOfBars) * 10}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 41}s`}}></div>

                <div className={`bar ${numberOfBars >= 11 ? "showBar" : ""}`} style={numberOfBars >= 11 ? {transitionDelay: `${(transition / numberOfBars) * 11}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 40}s`}}></div>
                <div className={`bar ${numberOfBars >= 12 ? "showBar" : ""}`} style={numberOfBars >= 12 ? {transitionDelay: `${(transition / numberOfBars) * 12}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 39}s`}}></div>
                <div className={`bar ${numberOfBars >= 13 ? "showBar" : ""}`} style={numberOfBars >= 13 ? {transitionDelay: `${(transition / numberOfBars) * 13}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 38}s`}}></div>
                <div className={`bar ${numberOfBars >= 14 ? "showBar" : ""}`} style={numberOfBars >= 14 ? {transitionDelay: `${(transition / numberOfBars) * 14}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 37}s`}}></div>
                <div className={`bar ${numberOfBars >= 15 ? "showBar" : ""}`} style={numberOfBars >= 15 ? {transitionDelay: `${(transition / numberOfBars) * 15}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 36}s`}}></div>
                <div className={`bar ${numberOfBars >= 16 ? "showBar" : ""}`} style={numberOfBars >= 16 ? {transitionDelay: `${(transition / numberOfBars) * 16}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 35}s`}}></div>
                <div className={`bar ${numberOfBars >= 17 ? "showBar" : ""}`} style={numberOfBars >= 17 ? {transitionDelay: `${(transition / numberOfBars) * 17}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 34}s`}}></div>
                <div className={`bar ${numberOfBars >= 18 ? "showBar" : ""}`} style={numberOfBars >= 18 ? {transitionDelay: `${(transition / numberOfBars) * 18}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 33}s`}}></div>
                <div className={`bar ${numberOfBars >= 19 ? "showBar" : ""}`} style={numberOfBars >= 19 ? {transitionDelay: `${(transition / numberOfBars) * 19}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 32}s`}}></div>
                <div className={`bar ${numberOfBars >= 20 ? "showBar" : ""}`} style={numberOfBars >= 20 ? {transitionDelay: `${(transition / numberOfBars) * 20}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 31}s`}}></div>
            
                <div className={`bar ${numberOfBars >= 21 ? "showBar" : ""}`} style={numberOfBars >= 21 ? {transitionDelay: `${(transition / numberOfBars) * 21}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 30}s`}}></div>
                <div className={`bar ${numberOfBars >= 22 ? "showBar" : ""}`} style={numberOfBars >= 22 ? {transitionDelay: `${(transition / numberOfBars) * 22}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 29}s`}}></div>
                <div className={`bar ${numberOfBars >= 23 ? "showBar" : ""}`} style={numberOfBars >= 23 ? {transitionDelay: `${(transition / numberOfBars) * 23}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 28}s`}}></div>
                <div className={`bar ${numberOfBars >= 24 ? "showBar" : ""}`} style={numberOfBars >= 24 ? {transitionDelay: `${(transition / numberOfBars) * 24}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 27}s`}}></div>
                <div className={`bar ${numberOfBars >= 25 ? "showBar" : ""}`} style={numberOfBars >= 25 ? {transitionDelay: `${(transition / numberOfBars) * 25}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 26}s`}}></div>
                <div className={`bar ${numberOfBars >= 26 ? "showBar" : ""}`} style={numberOfBars >= 26 ? {transitionDelay: `${(transition / numberOfBars) * 26}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 25}s`}}></div>
                <div className={`bar ${numberOfBars >= 27 ? "showBar" : ""}`} style={numberOfBars >= 27 ? {transitionDelay: `${(transition / numberOfBars) * 27}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 24}s`}}></div>
                <div className={`bar ${numberOfBars >= 28 ? "showBar" : ""}`} style={numberOfBars >= 28 ? {transitionDelay: `${(transition / numberOfBars) * 28}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 23}s`}}></div>
                <div className={`bar ${numberOfBars >= 29 ? "showBar" : ""}`} style={numberOfBars >= 29 ? {transitionDelay: `${(transition / numberOfBars) * 29}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 22}s`}}></div>
                <div className={`bar ${numberOfBars >= 30 ? "showBar" : ""}`} style={numberOfBars >= 30 ? {transitionDelay: `${(transition / numberOfBars) * 30}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 21}s`}}></div>

                <div className={`bar ${numberOfBars >= 31 ? "showBar" : ""}`} style={numberOfBars >= 31 ? {transitionDelay: `${(transition / numberOfBars) * 31}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 20}s`}}></div>
                <div className={`bar ${numberOfBars >= 32 ? "showBar" : ""}`} style={numberOfBars >= 32 ? {transitionDelay: `${(transition / numberOfBars) * 32}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 19}s`}}></div>
                <div className={`bar ${numberOfBars >= 33 ? "showBar" : ""}`} style={numberOfBars >= 33 ? {transitionDelay: `${(transition / numberOfBars) * 33}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 18}s`}}></div>
                <div className={`bar ${numberOfBars >= 34 ? "showBar" : ""}`} style={numberOfBars >= 34 ? {transitionDelay: `${(transition / numberOfBars) * 34}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 17}s`}}></div>
                <div className={`bar ${numberOfBars >= 35 ? "showBar" : ""}`} style={numberOfBars >= 35 ? {transitionDelay: `${(transition / numberOfBars) * 35}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 16}s`}}></div>
                <div className={`bar ${numberOfBars >= 36 ? "showBar" : ""}`} style={numberOfBars >= 36 ? {transitionDelay: `${(transition / numberOfBars) * 36}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 15}s`}}></div>
                <div className={`bar ${numberOfBars >= 37 ? "showBar" : ""}`} style={numberOfBars >= 37 ? {transitionDelay: `${(transition / numberOfBars) * 37}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 14}s`}}></div>
                <div className={`bar ${numberOfBars >= 38 ? "showBar" : ""}`} style={numberOfBars >= 38 ? {transitionDelay: `${(transition / numberOfBars) * 38}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 13}s`}}></div>
                <div className={`bar ${numberOfBars >= 39 ? "showBar" : ""}`} style={numberOfBars >= 39 ? {transitionDelay: `${(transition / numberOfBars) * 39}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 12}s`}}></div>
                <div className={`bar ${numberOfBars >= 40 ? "showBar" : ""}`} style={numberOfBars >= 40 ? {transitionDelay: `${(transition / numberOfBars) * 40}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 11}s`}}></div>
            
                <div className={`bar ${numberOfBars >= 41 ? "showBar" : ""}`} style={numberOfBars >= 41 ? {transitionDelay: `${(transition / numberOfBars) * 41}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 10}s`}}></div>
                <div className={`bar ${numberOfBars >= 42 ? "showBar" : ""}`} style={numberOfBars >= 42 ? {transitionDelay: `${(transition / numberOfBars) * 42}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 9}s`}}></div>
                <div className={`bar ${numberOfBars >= 43 ? "showBar" : ""}`} style={numberOfBars >= 43 ? {transitionDelay: `${(transition / numberOfBars) * 43}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 8}s`}}></div>
                <div className={`bar ${numberOfBars >= 44 ? "showBar" : ""}`} style={numberOfBars >= 44 ? {transitionDelay: `${(transition / numberOfBars) * 44}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 7}s`}}></div>
                <div className={`bar ${numberOfBars >= 45 ? "showBar" : ""}`} style={numberOfBars >= 45 ? {transitionDelay: `${(transition / numberOfBars) * 45}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 6}s`}}></div>
                <div className={`bar ${numberOfBars >= 46 ? "showBar" : ""}`} style={numberOfBars >= 46 ? {transitionDelay: `${(transition / numberOfBars) * 46}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 5}s`}}></div>
                <div className={`bar ${numberOfBars >= 47 ? "showBar" : ""}`} style={numberOfBars >= 47 ? {transitionDelay: `${(transition / numberOfBars) * 47}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 4}s`}}></div>
                <div className={`bar ${numberOfBars >= 48 ? "showBar" : ""}`} style={numberOfBars >= 48 ? {transitionDelay: `${(transition / numberOfBars) * 48}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 3}s`}}></div>
                <div className={`bar ${numberOfBars >= 49 ? "showBar" : ""}`} style={numberOfBars >= 49 ? {transitionDelay: `${(transition / numberOfBars) * 49}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 2}s`}}></div>
                <div className={`bar ${numberOfBars >= 50 ? "showBar" : ""}`} style={numberOfBars >= 50 ? {transitionDelay: `${(transition / numberOfBars) * 50}s`} : {transitionDelay: `${(transition / (50 - numberOfBars)) * 1}s`}}></div>
            </div>
        </div>
    )
}

export default ProgressBar