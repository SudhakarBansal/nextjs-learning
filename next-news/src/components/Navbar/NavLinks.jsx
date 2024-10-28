import Link from "next/link";
import navLinksList from "@/lib/navlink-list";

const NavLinks = ({ menuOpen }) => {
  const navLinks = navLinksList();

  return (
    <div
      className={`${
        menuOpen ? "block" : "hidden"
      } w-full md:block md:w-auto flex flex-col md:flex-row md:space-x-10`}
    >
      {navLinks.map(({ title, path, active }) => (
        <Link
          key={title}
          href={path}
          className={`${
            active ? "bg-slate-300 text-black" : "text-white dark:text-gray-100"
          } text-xl hover:text-blue-500 px-5 py-4 md:py-3 rounded-md`}
        >
          {title}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
