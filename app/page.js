import ExperienceSet from "@/components/ExperienceSet/ExperienceSet";
import AboutMe from "@/components/FirstSet/AboutMe";
import BentoCard from "@/components/FirstSet/BentoCardStuff/BentoCard";
import FirstSetCombine from "@/components/FirstSet/FirstSetCombine";
import ProjectBento from "@/components/ProjectSet/ProjectBento";
import ProjectSet from "@/components/ProjectSet/ProjectSet";
import Image from "next/image";

export default function Home() {
  return (
    // page
    <div className="flex flex-col place-items-center justify-center min-w-screen place-self-center min-h-screen">
      {/* content holder */}
      <div className="flex flex-col w-2/3 min-h-full bg-white p-4 gap-2">
        {/* content */}
        <FirstSetCombine />
        <ProjectSet />
        <ExperienceSet />



      </div>
    </div>
  );
}
