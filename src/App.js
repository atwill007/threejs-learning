import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [msg, setMsg] = useState('Default msg')

  const handleEdit = () => setMsg('hi random : ' + Math.random())
  return (
    <div className="App">
      <header className="App-header">
        msg: {msg}
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={handleEdit}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
