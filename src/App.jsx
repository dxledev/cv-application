// import { useState } from 'react'
import './App.css'

function Header() {
  return (
    <div className="header">
      <div className="link">
        About
      </div>

      <div className="justify-self-center">
        CV Generator
      </div>
    </div>
  )
}

function Footer() {
  return (
    <div className="footer">
     hello 
    </div>
  )
}

function Body() {
  return (
    <div className="body">
      <div className="justify-self-center">
        body
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App;
