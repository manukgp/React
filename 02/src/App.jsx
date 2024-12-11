import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1)
    }
  }

  const decValue = () => {
    if (counter > 0) {
      setCounter(counter-1)      
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addValue}> Increase counter </button>
      <button onClick={decValue}> Decrease counter </button>
    </>
  )
}

export default App