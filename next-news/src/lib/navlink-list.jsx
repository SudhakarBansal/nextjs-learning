import { usePathname } from "next/navigation";

export default function navLinksList() {
  const path = usePathname();
  return [
    {
      title: "News",
      path: "/news",
      active: path.startsWith("/news"),
    },
    {
      title: "Archive",
      path: "/archive",
      active: path.startsWith("/archive"),
    },
  ];
}
