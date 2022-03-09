import React from "react"
import Die from "./Die"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

import './style.css'

export default function App() {

    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
    const [time, setTime] = React.useState({m : 0, s : 0})
    const [interv, setInterv] = React.useState()
    
    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
            stopTime()
        }
    }, [dice])

    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }
    
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie())
        }
        return newDice
    }
    
    function rollDice() {
        setDice(oldDice => oldDice.map(die => {
            return die.isHeld ? 
                die :
                generateNewDie()
        }))
    }
    
    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? 
                {...die, isHeld: !die.isHeld} :
                die
        }))
    }

    //stopWatch
    var updatedS = 0
    var updatedM = 0
    
    function run(){
            if(updatedS === 59){
            updatedM++
            updatedS = 0}
            updatedS ++
    return setTime({m: updatedM, s: updatedS})}
    
    function startTime(){
        run()
        setInterv(setInterval(run, 1000))
    }
    function stopTime(){
        clearInterval(interv)
    }
    function rollDiceFunction(){
        if (tenzies===true )
            {setDice(allNewDice())
            setTenzies(false)
            setTimeout(startTime(), 1000)}
        else
            {rollDice() 
            (time.s ? 0 : startTime())}
    }
    
    const diceElements = dice.map(die => (
        <Die 
            key={die.id} 
            value={die.value} 
            isHeld={die.isHeld} 
            holdDice={() => holdDice(die.id)}
        />
    ))
    return (
        <main>
            {tenzies && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. 
            Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button 
                className="roll-dice" 
                onClick={rollDiceFunction}
                
            >
                {tenzies ? "New Game" : "Roll"}
            </button>
            <div className="timer"> {time.m > 9 ? time.m : `0${time.m}`}:{time.s > 9 ? time.s : `0${time.s}`}</div>
        </main>
    )
}