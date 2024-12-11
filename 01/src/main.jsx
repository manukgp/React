import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react';

function MyApp() {
  return (
    <h1>React with Vite</h1>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit Google'
// }

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  "Click to visit Google"
)

const anotherElem = (
  <a href='https://google.com' target='_blank'>Click to visit Google</a>
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  // MyApp()
  // reactElement
  anotherElem

)
