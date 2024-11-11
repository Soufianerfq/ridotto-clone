"use client"
import { createContext, useContext, useCallback, useEffect } from "react"
import { useGamesProvider } from "./gamesProvider"

const coinFlipContext = createContext()



export function CoinFLip({ children }) {

    const { userInput, setInput, useRNG, useSleep, results } = useGamesProvider()
    // let sleep = useSleep(6000)
    // let sleep2 = useSleep(70)
    // const RNG = useRNG(2, 1)

    let wins = 0
    const sleep = function (time) {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, time)
        })
    }

    //Coin flip Mechanism and animation control
    const CF = async function (betN, wager, cardComponent, announcement) {
        for (let i = 1; i <= betN; i++) {
            const RNG = Math.floor(Math.random() * 2) + 1; //the odds for the game 50/50 
            console.log(RNG)
            if (userInput.face === 'heads' && RNG == 1) {
                cardComponent.style.animationName = "heads"
                console.log(`you won ${wager * 2}`)
                wins = wins + (wager * 2)
                setInput(({ ...userInput, side: "heads" }))
                console.log(results)
            }

            else if (userInput.face === 'tails' && RNG == 2) {
                cardComponent.style.animationName = "tails"
                console.log(`you won ${wager * 2}`)
                wins = wins + (wager * 2)
                setInput(({ ...userInput, side: "tail" }))

            }

            else if (userInput.face === 'heads' && RNG == 2) {
                cardComponent.style.animationName = "tails"
                console.log('you lost to tails')
                setInput(({ ...userInput, side: "tails" }))
                console.log(results)
            }

            else if (userInput.face === 'tails' && RNG == 1) {
                cardComponent.style.animationName = "heads"
                console.log('you lost to heads')
                setInput(({ ...userInput, side: "heads" }))
            }

            await sleep(4000)
            cardComponent.style.animationName = "static" //resets the animation
            await sleep(50)
        }
        if (wins != 0) {
            console.log(`congrats, you won ${wins}`);
            announcement.innerHTML = `congrats, you won $${wins}`;
        } else {
            console.log('better luck next time');
            announcement.innerHTML = `you lost, better luck next time`;
        }
    }

    const FlipCoin = useCallback(function (betN, wager, cardComponent, announcement) {
        if (userInput.face === null || userInput.wager === null) {
            console.log("please select stuff")
        } else {
            CF(betN, wager, cardComponent, announcement)
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
