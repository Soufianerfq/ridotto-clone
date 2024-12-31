import "./styles.css";
import Link from "next/link";
import Headers from "./components/header";

import { headers } from "next/headers"; // added
import { Inter } from "next/font/google";
// import ContextProvider from "@/context";
import ContextProvider from "./context";
import { cookieToInitialState } from "wagmi";
import { config } from "./config";

export const metadata = {
  title: "AppKit Example App",
  description: "Powered by WalletConnect",
};

export default function RootLayout({ children }) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));

  return (
    <ContextProvider initialState={initialState}>
      <html lang="en">
        <body className="flex flex-col  ">
          <Headers />
          <div className="flex">
            <main className=" p-3 flex h-screen w-full">
              <div className="flex-1 ">{children}</div>
            </main>
          </div>
          <footer className=" p-3 border-[1px] border-gray-700 rounded-lg">
            <h1>footer</h1>
          </footer>
        </body>
      </html>
    </ContextProvider>
  );
}
