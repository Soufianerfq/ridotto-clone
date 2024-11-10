"use client"
import { createContext, useContext, useCallback } from "react"
import { useGamesProvider } from "./gamesProvider"

const coinFlipContext = createContext()

export function CoinFLip({ children }) {
    const { userInput, setInput, useRNG, useSleep, results } = useGamesProvider()

    const cardComponent = document.querySelector('.card__content');
    const announcement = document.querySelector('#announcement')
    let wins = 0

    const RNG = function (a, b) {
        const randomNum = Math.floor(Math.random() * a) + b
        return randomNum
    }

    const Sleep = function (time) {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, time)
        })
    }

    //Coin flip Mechanism and animation control
    const CF = useCallback(async function (betN, wager) {
        for (let i = 1; i <= betN; i++) {
            const randomNum = RNG(2, 1); //the odds for the game 50/50 
            if (userInput.face === 'heads' && randomNum == 1) {
                cardComponent.style.animationName = "heads"
                console.log(`you won ${wager * 2}`)
                wins = wins + (wager * 2)
                setInput(({ ...userInput, side: "heads" }))
                Count()
                console.log(results)
            }

            else if (userInput.face === 'tails' && randomNum == 2) {
                cardComponent.style.animationName = "tails"
                console.log(`you won ${wager * 2}`)
                wins = wins + (wager * 2)
                setInput(({ ...userInput, side: "tail" }))

            }

            else if (userInput.face === 'heads' && randomNum == 2) {
                cardComponent.style.animationName = "tails"
                console.log('you lost to tails')
                setInput(({ ...userInput, side: "tails" }))
                Count()
                console.log(results)
            }

            else if (userInput.face === 'tails' && randomNum == 1) {
                cardComponent.style.animationName = "heads"
                console.log('you lost to heads')
                setInput(({ ...userInput, side: "heads" }))
            }

            await Sleep(4000)
            cardComponent.style.animationName = "static" //resets the animation
            await Sleep(50)
        }
        if (wins != 0) {
            console.log(`congrats, you won ${wins}`);
            announcement.innerHTML = `congrats, you won $${wins}`;
        } else {
            console.log('better luck next time');
            announcement.innerHTML = `you lost, better luck next time`;
        }
    }, [userInput])

    const flipCoin = function (betN, wager) {
        if (userInput.face === null || userInput.wager === null) {
            console.log("please select stuff")
        } else {
            CF(betN, wager)
        }
    }

    const Count = function () {
        setResults(({ ...results, total: 5 }))
    }

    return (
        <coinFlipContext.Provider value={{
            userInput,
            setInput,
            flipCoin
        }} >
            {children}
        </coinFlipContext.Provider>
    )
}

export function useCoinFlip() {
    return useContext(coinFlipContext)
}