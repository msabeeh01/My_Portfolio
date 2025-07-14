const NavBar = () => {
  const navlinks = [
    { name: "About", link: "#about" },
    { name: "Experience", link: "#experience" },
    { name: "Work", link: "#work" },
  ];
  return (
    <nav className="flex justify-between px-[50px] h-[100px] items-center bg-transparent">
      <div>LOGO</div>
      <div>
        <ul className="flex gap-4">
          {navlinks.map(({ name: text, link }, index) => (
            <a href={link} className="flex flex-row gap-2 p-[10px]">
              <p className="text-[#64ffda] text-[13px]"> {index + 1}.</p>
              <li className="text-[13px] hover:text-[#64ffda] transition-all duration-300">{text}</li>
            </a>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
