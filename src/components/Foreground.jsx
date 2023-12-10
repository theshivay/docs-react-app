/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react'
import Card from './Card'

function Foreground() {
  const ref=useRef(null)
  const data = [
    {
      desc: "This is my 1st description of my card.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
    },
    {
      desc: "This is my 2nd description of my card.",
      filesize: ".4mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Upload Now", tagColor: "blue" }
    },
    {
      desc: "This is my 3rd description of my card.",
      filesize: ".1mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
    },
    {
      desc: "This is my 4th description of my card.",
      filesize: ".3mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" }
    },
  ];
  return (
    <div ref={ref} className=' fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap'>
      {
        data.map((item,index) => 
          (
            <Card data={item} key={index} reference={ref} />
          )
        )
      }
    </div>

  )
}

export default Foreground
