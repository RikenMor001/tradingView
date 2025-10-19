'use client';
import { useState } from 'react';
import NavBar from "./components/navbar";
import SignupModal from "./components/SignupModal";

export default function Home() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <div>
      <NavBar 
        onSignupClick={() => setIsSignupOpen(true)} 
        onLoginClick={() => console.log('Login clicked')}
      /> 
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-4xl font-bold">Hello this is going to be the future of <span className="text-blue-500">TradingView.</span></h1>
      </div>
      
      <SignupModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
    </div>
  )
}
