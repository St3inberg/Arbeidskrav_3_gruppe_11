import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Rollup } from 'vite'
import { Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Layout>
    
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/:slug' element={<profiler/>}></Route>
      </Routes>
      </Layout>
    </>
  )
}

export default App
