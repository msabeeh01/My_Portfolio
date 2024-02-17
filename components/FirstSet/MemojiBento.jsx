"use client"
import Memoji from '@/public/images/memoji.jpeg'
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
        <div className='h-full w-full bg-[#D9D9D9] rounded-lg p-2 md:hover:scale-[1.02] transition-all duration-200'>
            <Image src={Memoji} quality={100} className='rounded-lg h-full w-full object-cover'/>
        </div>
        </div>
    )
}

export default MemojiBento