import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaLink,
  FaGoogle,
  FaGitlab,
} from "react-icons/fa";

const icons = [
  { icon: FaGithub, link: "https://github.com/msabeeh01" },
  { icon: FaLinkedin, link: "https://linkedin.com/in/msabeeh01" },
  { icon: FaInstagram, link: "https://instagram.com/msabeeh01" },
  { icon: FaGoogle, link: "mailto:msabeeh.dev@gmail.com" },
  { icon: FaGitlab, link: "https://gitlab.com/msabeeh01" },
];

const LeftFixedSocial = () => {
  return (
    <div className="hidden md:fixed bottom-0 left-0 md:flex flex-col gap-4 text-[25px] p-8 items-center">
      {icons.map(({ icon: Icon, link }, index) => (
        <a href={link} target="_blank">
          <Icon key={index} className="social-icons" />
        </a>
      ))}
      <div className="h-[100px] w-[1px] block bg-[#233554]"></div>
    </div>
  );
};

export default LeftFixedSocial;
