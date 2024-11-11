"use client"
import { createContext, useCallback, useContext } from "react"
import { useGamesProvider } from "./gamesProvider";

const AppContext = createContext()


export function Slots({ children }) {
    const { userInput, setInput, useSleep, useRNG } = useGamesProvider()
    const sleepshort = useSleep(500)
    const sleeplong = useSleep(5000)
    const sleepmed = useSleep(2000)
    const RNG = useRNG(100, 0)



    let wins = 0;


    const result = async function (a, b, c, slots1, slots2, slots3) {
        for (let i = 0; i < slots1.length; i++) {
            slots1[i].style.setProperty("--slot", a)
            slots1[i].style.animation = "scroll 2s 1s forwards "
        }

        await sleepshort
        for (let i = 0; i < slots2.length; i++) {
            slots2[i].style.setProperty("--slot", b)
            slots2[i].style.animation = "scroll 2s 1.5s forwards "
        }

        await sleepshort
        for (let i = 0; i < slots3.length; i++) {
            slots3[i].style.setProperty("--slot", c)
            slots3[i].style.animation = "scroll 2s 2s forwards "
        }
    }

    const Odds = function () {
        RNG
        let multiplier = 0;
        if (RNG <= 2) {
            console.log(`x100 ${RNG}`)
            return multiplier = 100
        } else if (RNG >= 6 && RNG <= 12) {
            console.log(`x45 ${RNG}`)
            return multiplier = 45
        } else if (RNG >= 16 && RNG <= 28) {
            console.log(`x20 ${RNG}`)
            return multiplier = 20
        } else if (RNG >= 31 && RNG <= 45) {
            console.log(`x10 ${RNG}`)
            return multiplier = 10
        } else if (RNG >= 51 && RNG <= 75) {
            console.log(`x2 ${RNG}`)
            return multiplier = 2
        } else {
            console.log('you lost')
            return multiplier = 0
        }
    }

    const Reset = function (slots1, slots2, slots3) {
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

    const SlotSpin = useCallback(async function (betN, wager, slots1, slots2, slots3) {

        for (let x = 0; x < betN; x++) {
            let multiplier = Odds();
            console.log(multiplier)
            Reset(slots1, slots2, slots3)
            for (let i = 0; i < slots3.length; i++) {
                slots1[i].style.animation = "scroll 1s linear forwards infinite"
                slots2[i].style.animation = "scroll 1.25s linear forwards infinite"
                slots3[i].style.animation = "scroll 1.5s linear forwards infinite"
            }

            await sleeplong
            if (multiplier == 100) {
                result("-9", "-9", "-9")
                wins = wins + (wager * multiplier)
            } else if (multiplier == 45) {
                result("-1", "-1", "-6")
                wins = wins + (wager * multiplier)
            } else if (multiplier == 20) {
                result("-3", "-3", "-7")
                wins = wins + (wager * multiplier)
            } else if (multiplier == 10) {
                result("-4", "-3", "-8")
                wins = wins + (wager * multiplier)
            } else if (multiplier == 2) {
                result("-5", "-6", "-4")
                wins = wins + (wager * multiplier)
            } else if (multiplier == 0) {
                result("-7", "-5", "-9")
                wins = wins + (wager * multiplier)
            }
            await sleepmed
            if (x == betN) {
                !Reset(slots1, slots2, slots3)
            }
        }
        if (wins != 0) {
            console.log(`congrats, you won ${wins}`);
            announcement.innerHTML = `congrats, you won $${wins}`;

        } else {
            console.log('better luck next time');
            announcement.innerHTML = `you lost, better luck next time`;
        }
    }, [Reset, userInput])



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