import ProjectBento from "./ProjectBento"



const ProjectSet = () =>{
    return(
        <div className="flex gap-4 flex-col">
        {/* title spaces */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-6xl font-bold break-all">Projects</div>
          <div className="text-4xl">📝</div>
        </div>

        {/* projects cards */}
        <div className="flex flex-wrap md:grid md:grid-cols-3 md:grid-rows-2 gap-4">
          <ProjectBento />
          <ProjectBento />
          <ProjectBento />

          <ProjectBento />
          <ProjectBento />
          <ProjectBento />
        </div>
        </div>
    )
}

export default ProjectSet