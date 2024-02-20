import CircularProgressBar from "./CircularProgressBar"

const BentoCard = ({skill, progress}) =>{
    return(
        <div className="shadow-[2px_4px_12px_rgba(0,0,0,.08)] hover:scale-105 p-2 transition-all duration-200 flex flex-col items-center justify-evenly bg-white h-[80px] w-[80px] flex-grow rounded-2xl">
            <p className="text-xs">{skill}</p>
            <CircularProgressBar progress={progress}/>
        </div>
    )
}

export default BentoCard