import React, { useState} from "react"
import './App.css'

function App() {
  const [message, setMessage] = useState('Hello World')

  return (
    <>
    <div className="container">{message}</div>
    <button onClick={() => setMessage("hello")}>mudar mensagem</button>
    
    </>
  )
}

export default App
