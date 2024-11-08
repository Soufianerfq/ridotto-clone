"use client"
import { createContext, useState, useContext } from "react"

const AppContext = createContext()

export function AppWrapper({ children }) {

    const [userInput, setInput] = useState({
        face: null,
        betNumber: 1,
        wager: null,
        side: "heads"
    });

    const [gameOutput, setOutput] = useState({
        multipliers: [],
        wins: 0
    }
    )

    const RNG = function (a, b) {
        const randomNum = Math.floor(Math.random() * a) + b
        return randomNum
    }

    const sleep = function (time) {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, time)
        })
    }

    return (
        <AppContext.Provider value={{
            userInput,
            setInput,
            gameOutput,
            setOutput,
            RNG,
            sleep,
        }} >
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}