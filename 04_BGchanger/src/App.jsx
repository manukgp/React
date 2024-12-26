import { useState } from "react";
import viteLogo from '/vite.svg'

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className="w-full h-screen flex items-center justify-center"
    style={{backgroundColor: color}}>
        <img src={viteLogo} width={70} className="" alt="Vite logo" />
        <div className="fixed flex flex-wrap rounded justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center rounded-xl shadow-lg gap-3 bg-slate-200 py-2 px-3">

            <button onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "red"}}>Red</button>

            <button onClick={() => setColor("white")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{backgroundColor: "white"}}>White</button>

            <button onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "green"}}>Green</button>

            <button onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "blue"}}>Blue</button>

            <button onClick={() => setColor("olive")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "olive"}}>Olive</button>

            <button onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{backgroundColor: "yellow"}}>Yellow</button>

            <button onClick={() => setColor("grey")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "grey"}}>Grey</button>

            <button onClick={() => setColor("cyan")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "cyan"}}>Cyan</button>
          </div>
        </div>
    </div>
  )
}

export default App
