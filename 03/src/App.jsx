import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myArr = [1,2,3]

  let myObj = {
    name: "manu",
    age: 25
  }

  return (
    <>
      <h1 className='text-center bg-white text-black rounded p-4 mb-1'>Tailwind Test</h1>
      <Card cardName="Classic Utility Jacket" myArr={myArr} obj={myObj} />
    </>
  )
}

export default App
