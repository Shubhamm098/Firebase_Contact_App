import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../components/Navigation/Navbar'
import ContactHeader from '../components/ContactHeader/ContactHeader'
import Contactform from '../components/Contactform/Contactform'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <main className='maincontainer'>
    <ContactHeader/>
    <div className="cont">
    <Contactform/>
    </div>
    </main>
    </>
  )
}

export default App
