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
          className="my-1 text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
        >
          {navItem.title}
        </Link>
      ))}
    </div>
  );
}
