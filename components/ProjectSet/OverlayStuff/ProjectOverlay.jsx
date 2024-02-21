
import { FaGithub, FaLifeRing, FaGlobe } from "react-icons/fa";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import PillCard from "@/components/ExperienceSet/PillCardStuff/PillCard";
import { useEffect, useRef } from "react";

const ProjectOverlay = ({ name, bullets, skills, body, image, link, github, onClose}) => {

    return (
        <div className="fixed inset-0 z-50 items-center flex">
        <div className="flex flex-col bg-white gap-4 p-10 mx-10 my-10 h-full md:h-fit rounded-2xl scrollbar-hide overflow-auto">
            <div className="flex flex-col gap-4">
                <div className="w-full flex justify-end cursor-pointer">
                    <p className="text-2xl hover:bg-[#F5F5F7] transition h-10 w-10 flex justify-center items-center duration-200 rounded-full" onClick={onClose}>X</p>
                </div>

                <div className="flex gap-4">
                    <p className="text-2xl font-bold">{name}</p>
                    <div className="flex gap-2 place-items-center cursor-pointer">
                        <FaGithub size={30} onClick={() => window.open(github, "_blank")} />
                        {link ? <FaGlobe size={30} onClick={() => window.open(link, "_blank")} /> : <></>}
                    </div>
                </div>

                <p className="text-lg">{body}</p>

                <div className="flex flex-row gap-4 flex-wrap">
                    {skills.map((skill) => (
                        <PillCard key={skill} skill={skill} />
                    ))}
                </div>

            </div>

            {/* resume list items */}
            {bullets && bullets.length > 0 ?
                <ul className="list-disc flex flex-col ml-6 gap-4">
                    {bullets.map((item) => (
                        <li>{item}</li>
                    ))}
                </ul> : <></>}


            <div className="grid grid-cols-3 h-full place-items-center gap-4">

            </div>



        </div>
        </div>
    )
}

export default ProjectOverlay