/* eslint-disable no-unused-vars */
import React from 'react'
import Backgrounds from './components/Backgrounds'
import Foreground from './components/Foreground'

function App() {
  return (
    <div className='relative w-full h-screen bg-zinc-700'>
      <Backgrounds />
      <Foreground />
    </div>
  )
}

export default App
