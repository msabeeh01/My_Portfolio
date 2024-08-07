"use client"
import { useState } from "react";

interface EducationBentoProps {
    school: string
    degree: string
    location: string
    coursework: string[]
    date: string
}

const EducationBento: React.FC<EducationBentoProps> = ({ school, degree, location, coursework, date }) => {
    const [open, setOpen] = useState(false);
    return (
        <div data-aos="fade-up" className="bg-white rounded-2xl flex flex-col w-full p-4 gap-4 shadow-[2px_4px_12px_rgba(0,0,0,.08)]">
            {/* education preview */}
            <div className="flex flex-row w-full justify-between">
                <div className="flex flex-col">
                    <p className="text-2xl font-bold text-[#6E6E73]">{school.split(' ').map((word, index, array) => (
                        index === 0 ? <span key={index} className="text-black">{word} </span> : word + (index !== array.length - 1 ? ' ' : '')
                    ))}</p>
                    <p className="text-[#6E6E73]">{degree}</p>
                    <p className="text-[#6E6E73]">{location}</p>
                    <p className="text-[#6E6E73]">{date}</p>
                </div>

                <div className="active:bg-[#F5F5F7] hover:bg-[#F5F5F7] transition h-10 w-10 flex justify-center items-center duration-200 rounded-full cursor-pointer" onClick={() => { setOpen(!open) }}>
                    {/* + if closed - else */}
                    <p className="text-2xl">{open ? "-" : "+"}</p>
                </div>

            </div>

            {/* hidden coursework table */}
            {open &&
                <div className="grid grid-cols-3  bg-[#F5F5F7] rounded-2xl p-4" data-aos="fade-down">
                    {coursework?.map((course) => (
                        <div className="p-2 gap-2 flex flex-col group justify-between">
                            <div className="">{course}</div>
                            <div className="w-full flex">
                                <div className="border-b-2 w-[95%] group-hover:border-black transition duration-200">

                                </div>
                            </div>
                        </div>
                    ))}

                </div>}


        </div>
    )
}

export default EducationBento