"use client";
import "./styles.css"
import Image from "next/image"
import { useEffect } from "react"
import pic1 from "/src/images/coinFlip/tails.png"
import pic2 from "/src/images/coinFlip/heads.png"
import pic3 from "/src/images/coinFlip/coinflip.png"
import { useAppContext } from "@/app/(context)/context";


export default function CoinFlip() {
    const { userInput, setInput, gameOutput, setOutput, RNG, sleep } = useAppContext()
    let wins = 0

    useEffect(() => {
        const cardComponent = document.querySelector('.card__content');
        if (userInput.side == 'heads') {
            const cardComponent = document.querySelector('.card__content');
            cardComponent.style.transform = "rotateX(1turn)";
            cardComponent.style.transitionDuration = "1s"

        } else {
            const cardComponent = document.querySelector('.card__content');
            cardComponent.style.transform = "rotateX(.5turn)";
            cardComponent.style.transitionDuration = "1s"

        }
    }, [userInput.side])
    //useEffect is used to manage animation for when user switches between heads and tails



    const flipCoin = function (betN, wager) {
        const announcement = document.querySelector('#announcement')
        let wins = 0;
        if (userInput.face === null || userInput.wager === null) {
            console.log("please select stuff")
        } else {
            odds(betN, wager)
        }
    }



    const odds = async function (betN, wager) {
        for (let i = 1; i <= betN; i++) {
            const randomNum = RNG(2, 1); //the ods for the game 50/50 odds
            const cardComponent = document.querySelector('.card__content');
            if (userInput.face === 'heads' && randomNum == 1) {
                cardComponent.style.animationName = "heads"
                console.log(`you won ${wager * 2}`)
                wins = wins + (wager * 2)
                setInput(({ ...userInput, side: "heads" }))
            } else if (userInput.face === 'tails' && randomNum == 2) {
                cardComponent.style.animationName = "tails"
                console.log(`you won ${wager * 2}`)
                wins = wins + (wager * 2)
                setInput(({ ...userInput, side: "tail" }))
            } else if (userInput.face === 'heads' && randomNum == 2) {
                cardComponent.style.animationName = "tails"
                console.log('you lost to tails')
                setInput(({ ...userInput, side: "tails" }))
            } else if (userInput.face === 'tails' && randomNum == 1) {
                cardComponent.style.animationName = "heads"
                console.log('you lost to heads')
                setInput(({ ...userInput, side: "heads" }))
            }
            await sleep(4000)
            cardComponent.style.animationName = "static" //resets the animation
            // reset()
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



    return (
        <div id="game-comtainer" className="flex flex-col w-full" >
            <div id="theGame" className="flex max-lg:flex-col p-3 gap-3 ">

                <div id="game" className=" relative  rounded-lg flex-1  max-md:w-[100%]  border-[1px] border-gray-700 w-full " >
                    <div className="card sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] w-[300px] h-[300px] mx-auto ">
                        <div className="card__content h-full">

                            <div className="tails absolute top-0 bottom-0 right-0 left-0 p-8 flex items-center justify-center">
                                <Image src={pic1} width={500} height={500} />
                            </div>
                            <div className="heads absolute top-0 bottom-0 right-0 left-0 p-8  flex items-center justify-center">
                                <Image src={pic2} width={500} height={500} />
                            </div>
                        </div>
                    </div>
                    <div className=" ">
                        <h3 className=" text-center text-white font-semibold bg-[#2c2634] rounded-lg m-3 p-1" id="announcement"> TRY YOUR LUCK</h3>
                    </div>
                </div>

                <div id="userInput" className="flex flex-col justify-around  rounded-lg flex-none lg:w-[360px]  border-[1px] border-gray-700 p-5">
                    <div> <Image className="max-[650px]:hidden" src={pic3} width={500} height={500} /></div>
                    <div id="wager ">
                        <h3 id="wager" className=" text-white font-bold">Bet Amount</h3>
                        <input type="number" className=" bg-[#171120] block wd-auto border-solid border-2 rounded-lg w-full border-[#6600ff] text-white p-2 focus:outline-none  focus:border-[#6600ff]"
                            onChange={(e) => setInput(({ ...userInput, wager: e.target.value }))}
                        />
                    </div>
                    <div id="betNumber">
                        <h3 id="betNumber" className=" text-white font-bold">Multiple Bets: <span>{userInput.betNumber}</span></h3>
                        <input className="w-full accent-[#6600ff]" type="range" id="volume" name="volume" defaultValue='1' min="1" max="100"
                            onChange={(e) => {
                                setInput(({ ...userInput, betNumber: e.target.value }))
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
                                    setInput(({ ...userInput, face: e.target.value, side: e.target.value }))
                                }} />
                            <label for="heads" className="max-[650px]:w-[30%]"><Image id='img' src={pic2} /></label>
                            <input
                                className="userInput"
                                type="radio"
                                name="face"
                                id="tails"
                                value="tails"
                                onChange={(e) => {
                                    setInput(({ ...userInput, face: e.target.value, side: e.target.value }))
                                    console.log(userInput.side)
                                }} />
                            <label for="tails" className="max-[650px]:w-[30%]"><Image id='img' src={pic1} /></label>
                        </div>
                    </div>
                    <div id="flip">
                        <button className="block rounded-lg p-4 text-white font-bold bg-[#6600ff] w-[100%] mt-5" onClick={() => flipCoin(userInput.betNumber, userInput.wager)}>Flip Your Money Goodbye</button>
                    </div>
                </div>
            </div>
        </div>
    )
}