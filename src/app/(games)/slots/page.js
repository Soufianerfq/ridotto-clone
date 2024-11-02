"use client"

import Image from "next/image"
import "./styles.css"
import background from "/src/images/slots/background.png"
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
import { useRef } from "react"
export default function slots() {

    function sleep(time) {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, time)
        })
    }

    const slotSpin = async function () {
        const box1 = document.querySelectorAll("#box1");
        const box2 = document.querySelector("#box2");
        const box3 = document.querySelector("#box3");

    }

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
                            </div>
                            <div id="box3" className="overflow-hidden">
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
                    <h3 id="wager" className=" text-white font-bold">Bet Amount</h3>
                    <input type="number" className=" bg-[#171120] block wd-auto border-solid border-2 rounded-lg w-full border-[#6600ff] text-white p-2 focus:outline-none  focus:border-[#6600ff]"
                    />
                </div>
                <div id="betNumber">
                    <h3 id="betNumber" className=" text-white font-bold">Multiple Bets: <span></span></h3>
                    <input className="w-full accent-[#6600ff]" type="range" id="volume" name="volume" defaultValue='1' min="1" max="100"
                    />
                </div>
                <div className="bg-[#1f1a24] p-2 rounded-lg" >
                    <h3 className="w-full text-center text-white font-bold ">pick a side</h3>

                    <div className="flex justify-around mt-4">
                        <div className="max-[650px]:w-[30%]"></div>
                    </div>
                </div>
                <div id="flip">
                    <button className="block rounded-lg p-4 text-white font-bold bg-[#6600ff] w-[100%] mt-5" onClick={() => slotSpin()} >Flip Your Money Goodbye</button>
                </div>
            </div>
        </div>
    )
}