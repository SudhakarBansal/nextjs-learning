import Link from "next/link";
import navLinksList from "@/lib/navlink-list";
const NavLinks = ({ menuOpen }) => {
  const navLinks = navLinksList();
  return (
    <div
      className={`${
        menuOpen ? "block" : "hidden"
      } w-full md:w-auto flex flex-col md:flex-row md:block md:space-x-10`}
    >
      {navLinks.map(({ title, path }) => (
        <Link
          key={title}
          href={path}
          className="text-white text-xl dark:text-gray-100 hover:text-gray-300 py-2 md:py-0"
        >
          {title}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
