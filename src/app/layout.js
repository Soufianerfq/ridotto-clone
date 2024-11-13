"use client"

import "./styles.css";
import { useRef, useState } from "react";
import Link from 'next/link'

export default function RootLayout({ children }) {

  const [isExpand, setExpand] = useState(false)
  const sideMenu = useRef(null)

  return (
    <html lang="en">
      <body className="flex flex-col  ">
        <nav className=" flex p-3 border-[1px] border-gray-700 rounded-lg">
          <div className="text-white font-semibold p-3 mx-3 border-[1px] border-gray-700 rounded-lg">Soufiane Rafiq</div>
          <div className="text-white font-semibold p-3 mx-3 border-[1px] border-gray-700 rounded-lg"><Link href="/"> About Me</Link></div>
          <div className="text-white font-semibold p-3 mx-3 border-[1px] border-gray-700 rounded-lg"><Link href="/portfolio">Portfolio</Link></div>
          <div className="text-white font-semibold p-3 mx-3 border-[1px] border-gray-700 rounded-lg"><Link href="/games">Games</Link></div>
        </nav>
        <div className="flex">
          <aside ref={sideMenu} className="bg-[#2c2634] transition-all my-6 p-3 border-[1px] border-gray-700 rounded-lg w-[13%] h-screen	border-solid  max-md:hidden max-lg:hidden">
            <div className=" text-white font-semibold p-3 my-3 border-[1px] border-gray-700 rounded-lg">
              <button className="w-full" onClick={() => {
                if (isExpand) {
                  sideMenu.current.style.width = "5%"
                  setExpand(false)
                } else {
                  sideMenu.current.style.width = "13%"
                  setExpand(true)
                }
              }}> retract</button>
            </div>
            <div className="text-white font-semibold p-3 my-3 border-[1px] border-gray-700 rounded-lg"><Link href="/portfolio">Portfolio</Link></div>
            <div className="text-white font-semibold p-3 my-5 border-[1px] border-gray-700 rounded-lg"><Link href="/games">Games</Link></div>
            <div className="text-white font-semibold p-3 my-5 border-[1px] border-gray-700 rounded-lg"><Link href="/cv">CV</Link></div>
            <div className="text-white font-semibold p-3 my-5 border-[1px] border-gray-700 rounded-lg"><Link href="/contactMe">Contact</Link></div>
          </aside>
          <main className=" p-3 flex h-screen w-full">
            <div className="flex-1 ">
              {children}
            </div>
          </main>
        </div>
        <footer className=" p-3 border-[1px] border-gray-700 rounded-lg"><h1>footer</h1></footer>
      </body>
    </html>
  );
}
