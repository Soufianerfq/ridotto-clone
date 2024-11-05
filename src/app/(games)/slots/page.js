"use client"

import Image from "next/image"
import "./styles.css"
import slot1 from "/src/images/slots/1.png"
import slot2 from "/src/images/slots/2.png"
import slot3 from "/src/images/slots/3.png"
import slot4 from "/src/images/slots/4.png"
import slot5 from "/src/images/slots/5.png"
import slot6 from "/src/images/slots/6.png"
import slot7 from "/src/images/slots/7.png"
import slot8 from "/src/images/slots/8.png"
import slot9 from "/src/images/slots/9.png"
import frame from "/src/images/slots/frame.png"
import { useState } from "react"

export default function slots() {
    // const slots1 = document.querySelectorAll("#box1 > div");
    // const slots2 = document.querySelectorAll("#box2 > div");
    // const slots3 = document.querySelectorAll("#box3 > div");

    const [userInput, setInput] = useState({
        wager: null,
        betNumber: 1
    })

    function sleep(time) {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, time)
        })
    }

    // Animation reset function
    const reset = function () {
        const slots1 = document.querySelectorAll("#box1 > div");
        const slots2 = document.querySelectorAll("#box2 > div");
        const slots3 = document.querySelectorAll("#box3 > div");

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

    // odds generator function
    const odds = function () {
        const randomNum = Math.floor(Math.random() * 100)
        let multiplier = 0;
        if (randomNum <= 2) {
            // console.log(`x100 ${randomNum}`)
            return multiplier = 100
        } else if (randomNum >= 6 && randomNum <= 12) {
            // console.log(`x45 ${randomNum}`)
            return multiplier = 45
        } else if (randomNum >= 16 && randomNum <= 28) {
            // console.log(`x20 ${randomNum}`)
            return multiplier = 20
        } else if (randomNum >= 31 && randomNum <= 45) {
            // console.log(`x10 ${randomNum}`)
            return multiplier = 10
        } else if (randomNum >= 51 && randomNum <= 75) {
            // console.log(`x2 ${randomNum}`)
            return multiplier = 2
        } else {
            // console.log('you lost')
            return multiplier = 0
        }
    }

    // Results diplay function
    const result = async function (a, b, c, x) {
        const slots1 = document.querySelectorAll("#box1 > div");
        const slots2 = document.querySelectorAll("#box2 > div");
        const slots3 = document.querySelectorAll("#box3 > div");
        for (let i = 0; i < slots1.length; i++) {
            slots1[i].style.setProperty("--slot", a)
            slots1[i].style.animation = "scroll 2s 1s forwards "
        }

        await sleep(500)
        for (let i = 0; i < slots2.length; i++) {
            slots2[i].style.setProperty("--slot", b)
            slots2[i].style.animation = "scroll 2s 1.5s forwards "
        }

        await sleep(500)
        for (let i = 0; i < slots3.length; i++) {
            slots3[i].style.setProperty("--slot", c)
            slots3[i].style.animation = "scroll 2s 2s forwards "
        }
    }


    // the game
    const slotSpin = async function (betN, wagerAm) {
        const slots1 = document.querySelectorAll("#box1 > div");
        const slots2 = document.querySelectorAll("#box2 > div");
        const slots3 = document.querySelectorAll("#box3 > div");
        let wins = 0;

        for (let x = 0; x < betN; x++) {
            let multiplier = odds();
            console.log(multiplier)
            reset()
            for (let i = 0; i < slots3.length; i++) {
                slots1[i].style.animation = "scroll 1s linear forwards infinite"
                slots2[i].style.animation = "scroll 1.25s linear forwards infinite"
                slots3[i].style.animation = "scroll 1.5s linear forwards infinite"
            }

            await sleep(5000)
            if (multiplier == 100) {
                result("-9", "-9", "-9", x)
                wins = wins + (wagerAm * multiplier)

            } else if (multiplier == 45) {
                result("-1", "-1", "-6", x)
                wins = wins + (wagerAm * multiplier)

            } else if (multiplier == 20) {
                result("-3", "-3", "-7", x)
                wins = wins + (wagerAm * multiplier)

            } else if (multiplier == 10) {
                result("-4", "-3", "-8", x)
                wins = wins + (wagerAm * multiplier)

            } else if (multiplier == 2) {
                result("-5", "-6", "-4", x)
                wins = wins + (wagerAm * multiplier)

            } else if (multiplier == 0) {
                result("-7", "-5", "-9", x)
                wins = wins + (wagerAm * multiplier)
            }
            await sleep(2000)
            if (x == betN) {
                !reset()
            }
        }
        console.log(`you won $${wins}`)
    };


    return (
        // Game animation and display section
        <div id="gameContainer" className="flex  max-lg:flex-col p-3 gap-3">
            <div id="theGame" className="  rounded-lg flex-1 max-md:w-[100%] bg-cover border-[1px] border-gray-700 w-full">
                <div id="slots" className=" flex items-start justify-center sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] w-[300px] h-[300px] mx-auto">
                    <div className=" relative">
                        <div id="slots" className="absolute top-[38%] left-[12%] h-[140px] w-[380px] bg-transparent grid grid-cols-3 divide-x-0">
                            <div id="box1" className="overflow-hidden">
                                <div className="w-[126px] h-[140px]">
                                    <Image className="w-full h-full" src={slot1} />
                                </div>
                                <div className="w-[126px] h-[140px]">
                                    <Image className="w-full h-full" src={slot2} />
                                </div>
                                <div className="w-[126px] h-[140px]">
                                    <Image className="w-full h-full" src={slot3} />
                                </div>
                                <div className="w-[126px] h-[140px]">
                                    <Image className="w-full h-full" src={slot4} />
                                </div>
                                <div className="w-[126px] h-[140px]">
                                    <Image className="w-full h-full" src={slot5} />
                                </div>
                                <div className="w-[126px] h-[140px]">
                                    <Image className="w-full h-full" src={slot6} />
                                </div>
                                <div className="w-[126px] h-[140px]">
                                    <Image className="w-full h-full" src={slot7} />
                                </div>
                                <div className="w-[126px] h-[140px]">
                                    <Image className="w-full h-full" src={slot8} />
                                </div>
                                <div className="w-[126px] h-[140px]">
                                    <Image className="w-full h-full" src={slot9} />
                                </div>
                                <div className="w-[126px] h-[140px]">
                                    <Image className="w-full h-full" src={slot1} />
                                </div>
                            </div>
                            <div id="box2" className="overflow-hidden">
                                <div className="w-[126px] h-[140px]">
                                    <Image className="w-full h-full" src={slot1} />
                                </div>
                                <div className="w-[126px] h-[140px]">
                                    <Image className="w-full h-full" src={slot2} />
                                </div>
                                <div className="w-[126px] h-[140px]">
                                    <Image className="w-full h-full" src={slot3} />
                                </div>
                                <div className="w-[126px] h-[140px]">
                                    <Image className="w-full h-full" src={slot4} />
                                </div>
                                <div className="w-[126px] h-[140px]">
                                    <Image className="w-full h-full" src={slot5} />
                                </div>
                                <div className="w-[126px] h-[140px]">
                                    <Image className="w-full h-full" src={slot6} />
                                </div>
                                <div className="w-[126px] h-[140px]">
                                    <Image className="w-full h-full" src={slot7} />
                                </div>
                                <div className="w-[126px] h-[140px]">
                                    <Image className="w-full h-full" src={slot8} />
                                </div>
                                <div className="w-[126px] h-[140px]">
                                    <Image className="w-full h-full" src={slot9} />
                                </div>
                                <div className="w-[126px] h-[140px]">
                                    <Image className="w-full h-full" src={slot1} />
                                </div>
                            </div>
                            <div id="box3" className="overflow-hidden">
                                <div className="w-[126px] h-[140px] slot30 ">
                                    <Image className="w-full h-full " src={slot1} />
                                </div>
                                <div className="w-[126px] h-[140px] slot30 ">
                                    <Image className="w-full h-full " src={slot2} />
                                </div>
                                <div className="w-[126px] h-[140px] slot30 ">
                                    <Image className="w-full h-full " src={slot3} />
                                </div>
                                <div className="w-[126px] h-[140px] slot30 ">
                                    <Image className="w-full h-full " src={slot4} />
                                </div>
                                <div className="w-[126px] h-[140px] slot30 ">
                                    <Image className="w-full h-full " src={slot5} />
                                </div>
                                <div className="w-[126px] h-[140px] slot30 ">
                                    <Image className="w-full h-full " src={slot6} />
                                </div>
                                <div className="w-[126px] h-[140px] slot30 ">
                                    <Image className="w-full h-full " src={slot7} />
                                </div>
                                <div className="w-[126px] h-[140px] slot30 ">
                                    <Image className="w-full h-full " src={slot8} />
                                </div>
                                <div className="w-[126px] h-[140px] slot30 ">
                                    <Image className="w-full h-full " src={slot9} />
                                </div>
                                <div className="w-[126px] h-[140px] slot30 ">
                                    <Image className="w-full h-full " src={slot1} />
                                </div>
                            </div>
                        </div>
                        <Image src={frame} />

                    </div>
                </div>
                <h3 className=" text-center text-white font-semibold bg-[#5c506b] rounded-lg m-3 p-1" id="announcement"> TRY YOUR LUCK</h3>
            </div>

            {/* User input section */}
            <div id="userInput" className="flex flex-col justify-around  rounded-lg flex-none lg:w-[360px]  border-[1px] border-gray-700 p-5">

                <div id="wager ">
                    <h3 id="wager" className=" text-white font-bold">Bet Amount </h3>
                    <input type="number" min={1} className=" bg-[#171120] block wd-auto border-solid border-2 rounded-lg w-full border-[#6600ff] text-white p-2 focus:outline-none  focus:border-[#6600ff]" onChange={(e) => setInput(({ ...userInput, wager: e.target.value }))}
                    />
                </div>
                <div id="betNumber">
                    <h3 id="betNumber" className=" text-white font-bold">Multiple Bets:<span>{userInput.betNumber}</span></h3>
                    <input className="w-full accent-[#6600ff]" type="range" id="volume" name="volume" defaultValue='1' min="1" max="100" onChange={(e) => setInput(({ ...userInput, betNumber: e.target.value }))}
                    />
                </div>
                <div className="bg-[#1f1a24] p-2 rounded-lg" >
                    <h3 className="w-full text-center text-white font-bold ">pick a side</h3>

                    <div className="flex justify-around mt-4">
                        <div className="max-[650px]:w-[30%]"></div>
                    </div>
                </div>
                <div id="flip">
                    <button className="block rounded-lg p-4 text-white font-bold bg-[#6600ff] w-[100%] mt-5" onClick={() => slotSpin(userInput.betNumber, userInput.wager)} >Flip Your Money Goodbye</button>
                </div>
            </div>
        </div>
    )
}