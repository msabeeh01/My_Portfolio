"use client"
import Memoji from '../../public/images/memoji.jpeg'
import Image from 'next/image'

import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from "react"

const MemojiBento = () => {
    useEffect(() => {
        Aos.init()
    })
    return(
        <div data-aos="fade-left" className='w-full m-0 p-0'>
        <div className='shadow-[2px_4px_12px_rgba(0,0,0,.08)] h-full w-full bg-white rounded-2xl p-2 md:hover:scale-[1.02] transition-all duration-200'>
            <Image alt="memoji" src={Memoji} quality={100} className='rounded-lg h-full w-full object-cover'/>
        </div>
        </div>
    )
}

export default MemojiBento