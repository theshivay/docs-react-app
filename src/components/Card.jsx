/* eslint-disable no-unused-vars */
import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

function Card() {
    return (
        <div className='relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
            <FaRegFileAlt />
            <p className='text-sm mt-5 leading-tight font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio incidunt dolor quos sunt sapiente rem.</p>
            <div className='footer absolute w-full bottom-0 left-0'>
                <div className='flex items-center justify-between py-3 px-8 mb-3'>
                    <h5>.4mb</h5>
                    <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                    <MdOutlineFileDownload size=".9em" color="#fff"/>
                    </span>
                </div>
                <div className='tag w-full py-4 bg-green-500 flex items-center justify-center'>
                    <h3 className='text-sm font-semibold'>Download Now</h3>
                </div>
            </div>
        </div>
    )
}

export default Card
