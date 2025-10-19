import NavBar from "./components/navbar";
export default function Home() {
  return (
    <div>
      <NavBar /> 
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-4xl font-bold">Hello this is going to be the future of <span className="text-blue-500">TradingView.</span></h1>
      </div>  
    </div>
  )
}
