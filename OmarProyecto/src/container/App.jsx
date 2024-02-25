import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import LandingPage from '../pages/LandingPage'

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
