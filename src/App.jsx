// import { useState } from 'react'
import './App.css'
import Link from './components/Link.jsx'
import Form from './components/Form.jsx'

function Header() {
  return (
    <div className="header">
      <Link link="https://github.com/dxledev/cv-application">
        GitHub
      </Link>

      <div className="justify-self-center">
        CV Generator
      </div>
    </div>
  )
}

// function Footer() {
//   return (
//     <div className="footer">
//      hello 
//     </div>
//   )
// }

function Body({ children }) {
  return (
    <div className="body">
      {children}
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <Header />
      <Body>
        <Form />
      </Body>
    </div>
  )
}

export default App;
