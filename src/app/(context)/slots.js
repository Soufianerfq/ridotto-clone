"use client"
import { createContext, useCallback, useContext } from "react"
import { useGamesProvider } from "./gamesProvider";

const AppContext = createContext()

export function Slots({ children }) {
    const { userInput, setInput } = useGamesProvider()

    const slots1 = document.querySelectorAll("#box1 > div");
    const slots2 = document.querySelectorAll("#box2 > div");
    const slots3 = document.querySelectorAll("#box3 > div");

    let wins = 0;

    const RNG = function (a, b) {
        const randomNum = Math.floor(Math.random() * a) + b
        return randomNum
    }

    const Sleep = function (time) {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, time)
        })
    }

    const Result = async function (a, b, c) {
        for (let i = 0; i < slots1.length; i++) {
            slots1[i].style.setProperty("--slot", a)
            slots1[i].style.animation = "scroll 2s 1s forwards "
        }

        await Sleep(500)
        for (let i = 0; i < slots2.length; i++) {
            slots2[i].style.setProperty("--slot", b)
            slots2[i].style.animation = "scroll 2s 1.5s forwards "
        }

        await Sleep(500)
        for (let i = 0; i < slots3.length; i++) {
            slots3[i].style.setProperty("--slot", c)
            slots3[i].style.animation = "scroll 2s 2s forwards "
        }
    }

    const Odds = function () {
        const randomNum = RNG(100, 0)
        let multiplier = 0;
        if (randomNum <= 2) {
            console.log(`x100 ${randomNum}`)
            return multiplier = 100
        } else if (randomNum >= 6 && randomNum <= 12) {
            console.log(`x45 ${randomNum}`)
            return multiplier = 45
        } else if (randomNum >= 16 && randomNum <= 28) {
            console.log(`x20 ${randomNum}`)
            return multiplier = 20
        } else if (randomNum >= 31 && randomNum <= 45) {
            console.log(`x10 ${randomNum}`)
            return multiplier = 10
        } else if (randomNum >= 51 && randomNum <= 75) {
            console.log(`x2 ${randomNum}`)
            return multiplier = 2
        } else {
            console.log('you lost')
            return multiplier = 0
        }
    }

    const Reset = function () {
        for (let i = 0; i < slots1.length; i++) {
            slots1[i].style.setProperty("--slot", "-9")
        }
        for (let i = 0; i < slots2.length; i++) {
            slots2[i].style.setProperty("--slot", "-9")
        }

        for (let i = 0; i < slots3.length; i++) {
            slots3[i].style.setProperty("--slot", "-9")
        }

    };

    const SlotSpin = async function (betN, wager) {

        for (let x = 0; x < betN; x++) {
            let multiplier = Odds();
            console.log(multiplier)
            Reset(slots1, slots2, slots3)
            for (let i = 0; i < slots3.length; i++) {
                slots1[i].style.animation = "scroll 1s linear forwards infinite"
                slots2[i].style.animation = "scroll 1.25s linear forwards infinite"
                slots3[i].style.animation = "scroll 1.5s linear forwards infinite"
            }

            await Sleep(5000)
            if (multiplier == 100) {
                Result("-9", "-9", "-9")
                wins = wins + (wager * multiplier)
            } else if (multiplier == 45) {
                Result("-1", "-1", "-6")
                wins = wins + (wager * multiplier)
            } else if (multiplier == 20) {
                Result("-3", "-3", "-7")
                wins = wins + (wager * multiplier)
            } else if (multiplier == 10) {
                Result("-4", "-3", "-8")
                wins = wins + (wager * multiplier)
            } else if (multiplier == 2) {
                Result("-5", "-6", "-4")
                wins = wins + (wager * multiplier)
            } else if (multiplier == 0) {
                Result("-7", "-5", "-9")
                wins = wins + (wager * multiplier)
            }
            await Sleep(2000)
            if (x == betN) {
                !Reset()
            }
        }
        if (wins != 0) {
            console.log(`congrats, you won ${wins}`);
            announcement.innerHTML = `congrats, you won $${wins}`;

        } else {
            console.log('better luck next time');
            announcement.innerHTML = `you lost, better luck next time`;
        }
    };


    return (
        <AppContext.Provider value={{
            userInput,
            setInput,
            SlotSpin
        }} >
            {children}
        </AppContext.Provider>
    )
}

export function useSlots() {
    return useContext(AppContext)
}