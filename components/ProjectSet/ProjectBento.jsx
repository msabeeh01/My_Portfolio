"use client"

import Image from "next/image"
import project_placeholder from "@/public/images/projects/projectplaceholder.jpg"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const ProjectBento = () =>{
    useEffect(() => {
        Aos.init()
    })
    return(
        <div data-aos="fade-up" className="m-0 p-0">
        <div className="bg-[#D9D9D9] h-[260px] w-full rounded-lg p-2 hover:scale-105 transition-all duration-200">
            <Image src={project_placeholder} quality={100} className="rounded-lg object-cover h-full "/>
        </div>
        </div>
    )
}

export default ProjectBento