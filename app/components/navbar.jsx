
export default function navBar(){
    return <div className="flex justify-between items-center p-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600
        transition-all duration-300 ease-in-out cursor-pointer">
            Sign Up
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 
        transition-all duration-300 ease-in-out cursor-pointer">
            Login
        </button>
    </div>
}