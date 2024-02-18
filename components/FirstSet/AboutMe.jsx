const AboutMe = () => {

    return (
        <div className="flex w-full h-full flex-col">
            <p className="text-6xl font-bold break-all">
                Muhammad&nbsp;
                <span className="text-6xl font-normal break-all text-[#6E6E73]">
                    Sabeeh
                </span>
            </p>
            <div className="bg-white rounded-lg p-4 mt-4 h-full">
                <ul className="break-words h-full list-disc ml-4">
                    <li>Passionate Full Stack Developer specializing in React.js and Node.js, with a strong background in front-end and back-end web
                        development.</li>
                    <li>Well-versed in designing and developing user-facing features, integrating front-end components, designing back-end APIs, and
                        managing databases.</li>
                    <li>Exceptional problem-solving skills and the ability to work well both independently and as part of a team.</li>
                </ul>
            </div>
        </div>
    )
}

export default AboutMe