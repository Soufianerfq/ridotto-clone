"use client"
import { createContext, useState, useContext } from "react"

const gamesContext = createContext()

export function GamesProvider({ children }) {

    const [userInput, setInput] = useState({
        face: null,
        betNumber: 1,
        wager: null,
        side: "heads",
        total: 0
    });

    const [results, setResults] = useState({
        total: 0,
        multiplier: []
    });

    // const useRNG = function (a, b) {
    //     return (Math.floor(Math.random() * a) + b)
    // }

    // const useSleep = function (time) {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(resolve, time)
    //     })
    // }


    return (
        <gamesContext.Provider value={{
            userInput,
            setInput,
            results,
            setResults,
        }} >
            {children}
        </gamesContext.Provider>
    )
}

export function useGamesProvider() {
    return useContext(gamesContext)
}