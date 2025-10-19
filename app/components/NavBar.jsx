"use client"

export default function NavBar(){
    return <div className="flex justofy-center items-center p-4 bg-gray-100 border-b border-slate-200 shadow-xl">
        <div className="text-left text-2xl font-bold text-blue-500 text-center">
           TradingView
        </div>
        <div className="flex justify-end items-center gap-4 ml-autp">
        <button className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 transition-all duration-300 cursor-pointer
        font-medium text-sm text-center">
            Sign Up
        </button>
        <button className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 transition-all duration-300 cursor-pointer
        font-medium text-sm text-center">
            Login
        </button>
        </div>
    </div>
}