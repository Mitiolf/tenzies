import React from "react"

export default function Die(props) {
    
    function setLabel(value){
        if(value === 1){
            return <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4" cy="4" r="4" fill="#2B283A"/></svg>
        }
        else if(value === 2){
            return <svg width="23" height="7" viewBox="0 0 23 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="3.5" cy="3.5" r="3.5" fill="#2B283A"/>
            <circle cx="19.5" cy="3.5" r="3.5" fill="#2B283A"/>
            </svg>
        }
        else if(value === 3){
            return <svg width="27" height="26" viewBox="0 0 27 26" fill="none"              xmlns="http://www.w3.org/2000/svg">
            <circle cx="3.5" cy="22.5" r="3.5" fill="#2B283A"/>
            <circle cx="23.5" cy="3.5" r="3.5" fill="#2B283A"/>
            <circle cx="13.5" cy="12.5" r="3.5" fill="#2B283A"/>
            </svg>
        }
        else if(value === 4){
            return <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="3.5" cy="18.5" r="3.5" fill="#2B283A"/>
            <circle cx="18.5" cy="18.5" r="3.5" fill="#2B283A"/>
            <circle cx="18.5" cy="3.5" r="3.5" fill="#2B283A"/>
            <circle cx="3.5" cy="3.5" r="3.5" fill="#2B283A"/>
            </svg>
        }
        else if(value === 5){
            return <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="3.5" cy="3.5" r="3.5" fill="#2B283A"/>
            <circle cx="3.5" cy="22.5" r="3.5" fill="#2B283A"/>
            <circle cx="23.5" cy="3.5" r="3.5" fill="#2B283A"/>
            <circle cx="13.5" cy="13" r="3.5" fill="#2B283A"/>
            <circle cx="23.5" cy="22.5" r="3.5" fill="#2B283A"/>
            </svg>
        }
        else if(value === 6){
            return <svg width="22" height="29" viewBox="0 0 22 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="3.5" cy="25.5" r="3.5" fill="#2B283A"/>
            <circle cx="18.5" cy="25.5" r="3.5" fill="#2B283A"/>
            <circle cx="3.5" cy="3.5" r="3.5" fill="#2B283A"/>
            <circle cx="18.5" cy="3.5" r="3.5" fill="#2B283A"/>
            <circle cx="18.5" cy="14.5" r="3.5" fill="#2B283A"/>
            <circle cx="3.5" cy="14.5" r="3.5" fill="#2B283A"/>
            </svg>
        }
    }
    
    
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return (
        <div 
            className="die-face" 
            style={styles}
            onClick={props.holdDice}
        >
            {setLabel(props.value)}
        </div>
    )
}