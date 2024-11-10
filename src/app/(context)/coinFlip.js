"use client"
import { createContext, useContext, useCallback } from "react"
import { useGamesProvider } from "./gamesProvider"

const coinFlipContext = createContext()

export function CoinFLip({ children }) {
    const { userInput, setInput, useRNG, useSleep, results } = useGamesProvider()

    const cardComponent = document.querySelector('.card__content');
    const announcement = document.querySelector('#announcement')
    let wins = 0

    //Coin flip Mechanism and animation control
    const CF = useCallback(async function (betN, wager) {
        for (let i = 1; i <= betN; i++) {
            const randomNum = useRNG(2, 1); //the odds for the game 50/50 
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

            await useSleep(4000)
            cardComponent.style.animationName = "static" //resets the animation
            await useSleep(50)
        }
        if (wins != 0) {
            console.log(`congrats, you won ${wins}`);
            announcement.innerHTML = `congrats, you won $${wins}`;
        } else {
            console.log('better luck next time');
            announcement.innerHTML = `you lost, better luck next time`;
        }
    }, [userInput])

    const FlipCoin = function (betN, wager) {
        if (userInput.face === null || userInput.wager === null) {
            console.log("please select stuff")
        } else {
            CF(betN, wager)
        }
    }

    return (
        <coinFlipContext.Provider value={{
            userInput,
            setInput,
            FlipCoin
        }} >
            {children}
        </coinFlipContext.Provider>
    )
}

export function useCoinFlip() {
    return useContext(coinFlipContext)
}