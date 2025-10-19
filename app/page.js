"use client"

import NavBar from "./components/navBar"

export default function Home(){
  return <div>
    <NavBar/>
    <div className="text-4xl font-bold flex justify-center items-center h-screen text-white">
      Welcome to <span className="text-blue-500 pl-1">TradingView</span>
    </div>
  </div>
}
