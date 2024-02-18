import "aos/dist/aos.css"

const PillCard = ({skill}) => {
    return (
        <div className="flex-col p-4 hover:bg-[#b5b5b5] transition-all duration-200 bg-[#E2E2E4] flex h-[35px] min-w-[85px] w-fit place-items-center justify-center rounded-full text-center">
            <p className="text-sm">{skill}</p>
        </div>
    )
}

export default PillCard