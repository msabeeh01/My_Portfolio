import { motion } from "motion/react";

const Intro = () => {
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
      className="flex flex-col gap-8 navpad"
    >
      <div>
        <h1 className=" text-[#64FFDA]">My Name is.</h1>
        <h2 className="heading inline-block leading-[0.9] ">
          Muhammad Sabeeh.
        </h2>

        <h3 className="heading inline-block leading-[1.1]">
          I build things you like.
        </h3>
      </div>

      <p className="max-w-xl inline-block text-[20px]">
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products at Upstatement.
      </p>

      <button className="transition-all duration-300 hover:-translate-x-[2px] hover:-translate-y-[2px]">
        My Experience
      </button>
    </motion.div>
  );
};

export default Intro;
