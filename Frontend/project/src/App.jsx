import { useState } from 'react'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import SellPage from './Pages/SellPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <SellPage />
    </>
  )
}

export default App
