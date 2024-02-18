"use client"
import ProjectBento from "../ProjectSet/ProjectBento"
import PillCard from "./PillCardStuff/PillCard"
import { useState } from "react"

const ExperienceSet = ({ title, emoji, job, position, skills, descItems }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex gap-4 flex-col">
            {/* title spaces */}

            <div data-aos="fade-up">
                <div className="bg-white rounded-lg p-4 flex flex-col gap-4 shadow-[2px_4px_12px_rgba(0,0,0,.08)]">

                    <div className="flex flex-row w-full justify-between place-items-center">
                        <div className="flex flex-col">
                            <p className="text-2xl font-bold">{job}</p>
                            <p className="text-[#6E6E73]">{position}</p>
                        </div>

                        <div className="" style={{ cursor: "pointer" }} onClick={() => setOpen(!open)}>
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

        </div>
    )
}

export default ExperienceSet