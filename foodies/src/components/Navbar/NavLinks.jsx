import Link from "next/link";
import getNavList from "@/lib/nav-list";

export default function NavLinks() {
  const navItems = getNavList();

  return (
    <div className="flex flex-col lg:flex-row absolute lg:static left-0 w-full bg-white dark:bg-black z-30 p-6 text-center">
      {navItems.map((navItem, index) => (
        <Link
          href={navItem.href}
          key={index}
          className={`text-xl my-1 hover:bg-gradient-to-r from-orange-600 via-orange-400 to-orange-300 hover:bg-clip-text hover:text-transparent md:mx-4 md:my-0 ${
            navItem.active
              ? "text-orange-400"
              : "text-gray-700 dark:text-gray-200"
          }`}
        >
          {navItem.title}
        </Link>
      ))}
    </div>
  );
}
