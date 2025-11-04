"use client"

import { useState } from "react"

export default function Signup(){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleChange = (e) => {
        e.preventDefault();
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return <div className="flex justify-center items-center h-screen bg-black">
        <div className="bg-gray-200 border border-gray-700 rounded-md px-6 py-12 w-96 shadow-lg">
            <div className="text-black text-2xl font-bold text-center">
                Sign Up
            </div>
            <form className="flex flex-col gap-2">
                <label className="text-black text-lg font-medium mt-5">
                    Name
                </label>
                <input
                type = "text"
                name = "name"
                value = {formData.name}
                placeholder = "Enter your name"
                onChange = {handleChange}
                className = "w-full px-4 py-3 bg-black text-white border border-gray-700 rounded-md focus:outline-none focus:border-gray-500 text-white"
                required
                />
            </form>
        </div>
    </div>
}
