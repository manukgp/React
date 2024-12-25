import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const[length, setLength] = useState(8)
  const[charAllowed, setCharAllowed] = useState(false)
  const[numAllowed, setNumAllowed] = useState(false)
  const[password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*~"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  
  }, [length, charAllowed, numAllowed, setPassword])

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }
  , [length, numAllowed, charAllowed, passwordGenerator])


  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-center text-neutral-300 my-3'>Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        ref={passwordRef}
        readOnly/>
        <button className='outline-none bg-slate-600 text-white px-3 py-0.5 
         hover:bg-gradient-to-br hover:from-slate-500 hover:to-slate-900 
         focus:ring-4 focus:outline-none focus:ring-slate-700 dark:focus:ring-slate-950' 
         onClick={copyToClipboard}>Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input 
          type="range"
          min={8}
          max={20}
          value={length}
          className='cursor-pointer '
          onChange={(event) => setLength(event.target.value)}
          />
            <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
          defaultChecked={numAllowed}
          id='numInput'
          onChange={() => {
            setNumAllowed((prev) => !prev)
          }}
          />
            <label htmlFor='numInput'>Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
            defaultChecked={charAllowed}
            id='charInput'
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
            />
              <label htmlFor='charInput'>Spl Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
