"use client";
import "./styles.css"
import Image from "next/image"
import { useEffect, useRef } from "react"
import pic1 from "/src/images/coinFlip/tails.png"
import pic2 from "/src/images/coinFlip/heads.png"
import pic3 from "/src/images/coinFlip/coinflip.png"
import { useIOStore } from "@/app/store/store";
import { useCoinFlip } from "@/app/store/coinFlip";


export default function CoinFlip() {

    const userInput = useIOStore((state) => state.userInput);
    const setBetNumber = useIOStore((state) => state.setBetNumber)
    const setWager = useIOStore((state) => state.setWager)
    const setSide = useIOStore((state) => state.setSide)
    const setFace = useIOStore((state) => state.setFace)

    const { FlipCoin } = useCoinFlip()

    const cardComponent = useRef(null)
    const announcement = useRef(null)


    useEffect(() => {
        const cardComponent = document.querySelector('.card__content');
        if (userInput.side == 'heads') {
            cardComponent.style.transform = "rotateX(1turn)";
            cardComponent.style.transitionDuration = "1s"

        } else {
            cardComponent.style.transform = "rotateX(.5turn)";
            cardComponent.style.transitionDuration = "1s"

        }
    }, [userInput.side])


    return (
        <div id="game-comtainer" className="flex flex-col w-full" >
            <div id="theGame" className="flex max-lg:flex-col p-3 gap-3  transition-all ">

                <div id="game" className=" transition-all relative  rounded-lg flex-1  max-md:w-[100%]  border-[1px] border-gray-700 w-full " >
                    <div className=" transition-all card sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] w-[300px] h-[300px] mx-auto ">
                        <div ref={cardComponent} className="card__content h-full">

                            <div className="tails absolute top-0 bottom-0 right-0 left-0 p-8 flex items-center justify-center">
                                <Image src={pic1} width={500} height={500} />
                            </div>
                            <div className="heads absolute top-0 bottom-0 right-0 left-0 p-8  flex items-center justify-center">
                                <Image src={pic2} width={500} height={500} />
                            </div>
                        </div>
                    </div>
                    <div className=" ">
                        <h3 ref={announcement} className=" text-center text-white font-semibold bg-[#2c2634] rounded-lg m-3 p-1" id="announcement"> TRY YOUR LUCK</h3>
                    </div>
                </div>

                <div id="userInput" className="flex flex-col justify-around  rounded-lg flex-none lg:w-[360px]  border-[1px] border-gray-700 p-5">
                    <div> <Image className="max-[650px]:hidden" src={pic3} width={500} height={500} /></div>
                    <div id="wager ">
                        <h3 id="wager" className=" text-white font-bold">Bet Amount</h3>
                        <input type="number" className=" bg-[#171120] block wd-auto border-solid border-2 rounded-lg w-full border-[#6600ff] text-white p-2 focus:outline-none  focus:border-[#6600ff]"
                            onChange={(e) => {
                                setWager(e.target.value)
                                console.log(userInput)
                            }}
                        />
                    </div>
                    <div id="betNumber">
                        <h3 id="betNumber" className=" text-white font-bold">Multiple Bets: <span>{userInput.betNumber}</span></h3>
                        <input className="w-full accent-[#6600ff]" type="range" id="volume" name="volume" defaultValue='1' min="1" max="100"
                            onChange={(e) => {
                                setBetNumber(e.target.value)
                                console.log(userInput.betNumber)
                            }}

                        />
                    </div>
                    <div className="bg-[#1f1a24] p-2 rounded-lg" >
                        <h3 className="w-full text-center text-white font-bold ">pick a side</h3>

                        <div className="flex justify-around mt-4">
                            <input
                                className="userInput"
                                type="radio"
                                name="face"
                                id="heads"
                                value="heads"
                                onChange={(e) => {
                                    setSide(e.target.value)
                                    setFace(e.target.value)
                                    console.log(userInput.side)

                                }} />
                            <label for="heads" className="max-[650px]:w-[30%]"><Image id='img' src={pic2} /></label>
                            <input
                                className="userInput"
                                type="radio"
                                name="face"
                                id="tails"
                                value="tails"
                                onChange={(e) => {
                                    setSide(e.target.value)
                                    setFace(e.target.value)
                                    console.log(userInput.side)
                                }} />
                            <label for="tails" className="max-[650px]:w-[30%]"><Image id='img' src={pic1} /></label>
                        </div>
                    </div>
                    <div id="flip">
                        <button className="block rounded-lg p-4 text-white font-bold bg-[#6600ff] w-[100%] mt-5" onClick={() => FlipCoin(cardComponent.current, announcement.current, setSide)}>Flip Your Money Goodbye</button>
                    </div>
                </div>
            </div>
        </div>
    )
}