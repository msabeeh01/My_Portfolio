import EducationSetCombine from "@/components/EducationSet/EducationSetCombine";
import ExperienceSetCombine from "@/components/ExperienceSet/ExperienceSetCombine";
import FirstSetCombine from "@/components/FirstSet/FirstSetCombine";
import Footer from "@/components/Footer/Footer";
import ProjectSet from "@/components/ProjectSet/ProjectSet";

export default function Home() {
  return (
    // page
    <div className="flex flex-col place-items-center justify-center min-w-screen place-self-center min-h-screen gap-16">
      {/* content holder */}
      <div className="flex flex-col w-full md:w-2/3 min-h-full bg-[#F5F5F7] p-4">
        {/* content */}
        <FirstSetCombine />
        <ExperienceSetCombine />
        <ProjectSet />
        <EducationSetCombine />




      </div>

      {/* Footer */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
