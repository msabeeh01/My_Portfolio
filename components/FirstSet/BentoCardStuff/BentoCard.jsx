import CircularProgressBar from "./CircularProgressBar"

const BentoCard = ({skill, progress}) =>{
    return(
        <div className="hover:bg-[#b5b5b5] p-2 transition-all duration-200 flex flex-col items-center justify-evenly bg-[#D9D9D9] h-[80px] w-[80px] rounded-lg">
            <p className="text-xs">{skill}</p>
            <CircularProgressBar progress={progress}/>
        </div>
    )
}

export default BentoCard