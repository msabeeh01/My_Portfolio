const Footer = () => {
    return(
        <div className="flex w-full bg-white max-h-fit justify-center">
            {/* actual padded content */}
            <div className="grid grid-cols-3 w-2/3 py-5 h-full px-4 text-sm text-[#A1A1A1]">
                <a href="#" className="hover:text-black w-fit">Experience</a>
                <a href="#" className="hover:text-black w-fit">Education</a>
                <a href="#" className="hover:text-black w-fit">Projects</a>
                <a href="#" className="hover:text-black w-fit">Skills</a>
                <a href="#" className="hover:text-black w-fit">Contact</a>
            </div>
        </div>
    )
}

export default Footer