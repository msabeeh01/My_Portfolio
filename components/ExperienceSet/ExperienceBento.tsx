"use client"
import ProjectBento from "../ProjectSet/ProjectBento"
import PillCard from "./PillCardStuff/PillCard"
import { useState } from "react"

interface ExperienceSetProps {
    title?: string
    emoji?: string
    job: string
    position: string
    skills: string[]
    descItems: string[]
    date: string
}

const ExperienceSet = ({ job, position, skills, descItems, date }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex gap-4 flex-col" data-aos="fade-up">
            {/* title spaces */}
                <div className="bg-white rounded-2xl p-4 flex flex-col gap-4 shadow-[2px_4px_12px_rgba(0,0,0,.08)]">

                    <div className="flex flex-row w-full justify-between">
                        <div className="flex flex-col">
                            <p className="text-2xl font-bold text-[#6E6E73]">
                                {job.split(' ').map((word, index, array) => (
                                    index === 0 ? <span key={index} className="text-black">{word} </span> : word + (index !== array.length - 1 ? ' ' : '')
                                ))}
                            </p>
                            <p className="text-[#6E6E73]">{position}</p>
                            <p className="text-[#6E6E73] italic">{date}</p>
                        </div>

                        <div className="active:bg-[#F5F5F7] hover:bg-[#F5F5F7] transition h-10 w-10 flex justify-center items-center duration-200 rounded-full" style={{ cursor: "pointer" }} onClick={() => { setOpen(!open) }}>
                            {/* + if closed - else */}
                            <p className="text-2xl">{open ? "-" : "+"}</p>
                        </div>

                    </div>

                    <div className="flex gap-4 flex-row flex-wrap">
                        {skills.map((skill) => (
                            <PillCard key={skill} skill={skill} />
                        ))}
                    </div>


                    {open &&
                        <div data-aos="fade-down">
                            <div className="flex gap-4 flex-row flex-wrap" >
                                <ul className="list-disc ml-6 flex gap-2 flex-col">
                                    {descItems.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}

                                </ul>
                            </div>
                        </div>
                    }

                </div>

        </div>
    )
}

export default ExperienceSet