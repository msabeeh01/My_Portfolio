import ProjectBento from "./ProjectBento"

// project images
import driveroo_bentoimage from "@/public/images/projects/driveroo_bentoimage.png"
import whiskerwizard_bentoimage from "@/public/images/projects/whiskerwizard_projectimage.png"
import experiments_bentoimage from "@/public/images/projects/experiments_bentoimage.webp"
import probono_freelance_bentoimage from "@/public/images/projects/probono_freelance_bentoimage.jpg"

const ProjectSet = () => {
  return (
    <div className="flex gap-4 flex-col">
      {/* title spaces */}
      <div className="flex flex-col md:flex-row justify-between items-center my-6" data-aos="fade-up">
        <div className="text-6xl font-bold break-all">Projects</div>
        <div className="text-4xl">📝</div>
      </div>

      {/* projects cards */}
      <div className="flex flex-wrap md:grid md:grid-cols-3 md:grid-rows-2 gap-4">

        <ProjectBento
          name={"Whisker Wizard"}
          description={"Powerful Web and Mobile Application for meticulous pet owners"}
          skills={["Flutter", "React", "TypeScript", "JavaScript", "Dart", "Supabase"]}
          image={whiskerwizard_bentoimage} />


        <ProjectBento
          name={"Experiments"}
          description={"A repo for experimenting and learning new things via half baked projects"}
          skills={["Alot"]}
          image={experiments_bentoimage} />


        <ProjectBento
          name={"Driveroo"}
          description={"Mobile application that seeks to revolutionize the process of scheduling driving lessons"}
          skills={["React Native", "NodeJS", "Javascript", "MongoDB / Atlas", "Firebase"]}
          image={driveroo_bentoimage} />



        <ProjectBento 
        name={"Graphic Designer's Portfolio"}
        description={"Probono Freelance Web and Mobile Web Development for a graphic designer"}
        skills={["SvelteKit", "JavaScript", "TailwindCSS"]}
        image={probono_freelance_bentoimage}
        />
      </div>
    </div>
  )
}

export default ProjectSet