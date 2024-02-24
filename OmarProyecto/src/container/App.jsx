import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import LandingPage from '../assets/pages/LandingPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
