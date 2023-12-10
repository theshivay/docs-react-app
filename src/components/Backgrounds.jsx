/* eslint-disable no-unused-vars */
import React from 'react'

function background() {
  return (
    <>
      <div className='fixed w-full h-screen z-[2]'>
        <div className='absolute top-[5%] w-full py-10 flex justify-center font-semibold text-xl text-zinc-500'>Documents</div>
        <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tighter font-semibold text-zinc-900 '>Docs.</h1>
      </div>
    </>
  )
}

export default background
