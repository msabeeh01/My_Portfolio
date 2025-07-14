import { motion } from "motion/react";

const RightProjectText = ({ projectTitle, projectDesc, projectLink }) => {
  return (
    <motion.div
      whileInView={{
        y: 0, // Changed from position: 0
        opacity: 1, // Changed from opacity: 100
      }}
      transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
      initial={{ y: 40, opacity: 0 }} // Changed from position: 40
      exit={{ y: 40, opacity: 0 }} // Changed from position: 40
      viewport={{ once: false, amount: 0.2 }}
      className="flex w-full"
    >
      <div className="rounded-[4px] w-1/2  h-[360px] relative">
        <img
          className="object-cover w-full h-full left-4 absolute"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBsePINMowh4IK_c6jX01hOvEsYSY-Y4bGOQ&s"
          alt=""
        />
      </div>

      <div className="flex flex-col w-1/2 justify-center relative">
        <a
          href={projectLink}
          target="_blank"
          className="overflow-y-scroll bg-[#2D0D89] flex flex-col gap-8 rounded-[4px] absolute right-4  bg-transparent lg:h-fit text-right h-full"
        >
          <div>
            <p className="p-overline"> Featured Project</p>
            <h2 className="project-title">{projectTitle}</h2>
          </div>

          <div className="lg:bg-[#2D0D89] p-0 lg:p-[25px] rounded-[4px]">
            <p>{projectDesc}</p>
          </div>
        </a>
      </div>
    </motion.div>
  );
};

export default RightProjectText;
