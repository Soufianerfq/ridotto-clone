import { useIOStore } from "./store"


export const useCoinFlip = () => {
    const FlipCoin = async function (cardComponent, announcement) {

        const userInput = useIOStore.getState().userInput


        // const gameOutput = useIOStore.getState().gameOutput
        // const setGameOutput = useIOStore.getState().setGameOutput()

        console.log(userInput)

        if (userInput.face === null || userInput.wager === null) {
            console.log("please select stuff")
            return
        }
        for (let i = 1; i <= userInput.betNumber; i++) {
            const RNG = Math.floor(Math.random() * 2) + 1; //the odds for the game 50/50
            console.log(RNG)
            if (userInput.face === 'heads' && RNG == 1) {
                cardComponent.style.animationName = "heads"
                console.log(`you won ${userInput.wager * 2}`)
                wins = wins + (userInput.wager * 2)
                setSide("heads")
                useIOStore.setState({ userInput: { ...userInput, side: 'heads' } })
            }

            else if (userInput.face === 'tails' && RNG == 2) {
                cardComponent.style.animationName = "tails"
                console.log(`you won ${userInput.wager * 2}`)
                wins = wins + (userInput.wager * 2)
                useIOStore.setState({ userInput: { ...userInput, side: 'tails' } })


            }

            else if (userInput.face === 'heads' && RNG == 2) {
                cardComponent.style.animationName = "tails"
                console.log('you lost to tails')
                useIOStore.setState({ userInput: { ...userInput, side: 'tails' } })
            }

            else if (userInput.face === 'tails' && RNG == 1) {
                cardComponent.style.animationName = "heads"
                console.log('you lost to heads')
                useIOStore.setState({ userInput: { ...userInput, side: 'heads' } })
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
    return {
        FlipCoin
    }
}




let wins = 0

const sleep = function (time) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time)
    })
}
