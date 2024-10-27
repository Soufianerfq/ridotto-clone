"use client"
import "./styles.css";
import React, { useState } from 'react'

export default function RootLayout({ children }) {
  const [isexpanded, setExpand] = useState(true)

  return (
    <html lang="en">
      <body className="flex flex-col max-[650px]:w-[100%] ">
        <nav className=""><h1>navigation header</h1></nav>
        <div className="flex">
          <aside className=" flex-none h-screen	border-solid  lg:block  max-[650px]:hidden"><h1>navigation side menu</h1></aside>
          <main className=" flex-auto h-screen	 ">
            <div>games drop down</div>
            {children}
          </main>
        </div>
        <footer className=" "><h1>footer</h1></footer>
      </body>
    </html>
  );
}
