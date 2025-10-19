'use client';

export default function SignupModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="border border-gray-300 rounded-md p-6 w-full max-w-md shadow-lg bg-gray-300 relative">
                <button 
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
                >
                    &times;
                </button>
                
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-2xl font-bold mb-6 text-black">
                        Sign Up
                    </h2>
                    
                    <div className="w-full space-y-4">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                                Username
                            </label>
                            <input 
                                type="text"
                                id="username"
                                placeholder="Enter username"
                                className="border border-gray-900 rounded-md px-3 py-2 w-full focus:outline-none
                                focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-500
                                text-black"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input 
                                type="email"
                                id="email"
                                placeholder="Enter email"
                                className="border border-gray-900 rounded-md px-3 py-2 w-full focus:outline-none
                                focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-500
                                text-black"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <input 
                                type="password"
                                id="password"
                                placeholder="Enter password"
                                className="border border-gray-900 rounded-md px-3 py-2 w-full focus:outline-none
                                focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-500
                                text-black"
                            />
                        </div>
                        
                        <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 
                        transition-all duration-300 ease-in-out cursor-pointer mt-4">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}