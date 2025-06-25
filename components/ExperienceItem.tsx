import { redirect } from "next/navigation";
import { FaExternalLinkAlt } from "react-icons/fa";

type ExperienceItem = {
  position: string;
  startDate: string;
  endDate?: string;
  desc: string;
  link?: string;
  isHovered?: boolean;
  isAnyHovered?: boolean;
};

const ExperienceItem: React.FC<ExperienceItem> = ({
  position,
  startDate,
  endDate,
  desc,
  link,
  isAnyHovered,
  isHovered,
}) => {
  return (
    <a href={link} target="_blank">
    <div
      className={`group grid grid-cols-4 p-4 rounded-md text-white transition-all duration-300 hover:bg-[rgba(106,4,15,0.4)] ${
        isAnyHovered && !isHovered ? "opacity-30" : "opacity-100"
      }`}
    >
      <div className="inactive col-span-1 text-sm font-semibold">
        {startDate} {endDate ? (
           <>- {endDate}</> 
        ):(
            <></>
        )}
      </div>
      <div className="flex flex-col col-span-3 gap-2">
        <div className="font-medium font-semibold flex flex-row items-center gap-4 group-hover:text-[#ffba08] -inset-x-4 -inset-y-2.5">
          {position} {link ? (<FaExternalLinkAlt color="#8598BC" size={12}/>):(<></>)}
        </div>
        <div className="text-sm inactive">{desc}</div>
      </div>
    </div>
    </a>
  );
};

export default ExperienceItem;
