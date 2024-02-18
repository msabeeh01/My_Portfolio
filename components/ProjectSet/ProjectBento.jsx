"use client"

import Image from "next/image"
import project_placeholder from "@/public/images/projects/projectplaceholder.jpg"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const ProjectBento = () => {
    useEffect(() => {
        Aos.init()
    })
    return (
        <div data-aos="fade-up" className="m-0 p-0">
            <div className="shadow-[2px_4px_12px_rgba(0,0,0,.08)] bg-white h-[420px] w-full rounded-2xl md:hover:scale-105 transition-all duration-200">
                <Image src={project_placeholder} quality={100} className="object-cover h-full rounded-2xl" />
            </div>
        </div>
    )
}

export default ProjectBento