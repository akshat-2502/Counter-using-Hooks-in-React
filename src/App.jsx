import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  let counter = 15;
  

  return (
    <>
      <h1>Counter Using Hooks</h1>
      <h2>Counter Value : {counter}</h2>

      <button>Add Value</button>
      <br/>
      <br/>
      <button>Decrease Value</button>
    </>
  )
}

export default App
