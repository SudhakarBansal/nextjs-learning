import Link from "next/link";
import getNavList from "@/lib/nav-list";

export default function NavLinks() {
  const navItems = getNavList();

  return (
    <div className="flex flex-col md:flex-row md:mx-6">
      {navItems.map((navItem, index) => (
        <Link
          href={navItem.href}
          key={index}
          className={`text-xl my-1 hover:bg-gradient-to-r from-orange-600 via-orange-400 to-orange-300 hover:bg-clip-text hover:text-transparent md:mx-4 md:my-0 ${
            navItem.active ? "text-orange-400" : " text-gray-700 dark:text-gray-200 "
          }`}
        >
          {navItem.title}
        </Link>
      ))}
    </div>
  );
}
