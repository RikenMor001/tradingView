'use client';

export default function navBar({ onSignupClick, onLoginClick }){
    return <div className="flex justify-between items-center p-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600
        transition-all duration-300 ease-in-out cursor-pointer"
        onClick={onSignupClick}>
            Sign Up
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 
        transition-all duration-300 ease-in-out cursor-pointer"
        onClick={onLoginClick}>
            Login
        </button>
    </div>
}
