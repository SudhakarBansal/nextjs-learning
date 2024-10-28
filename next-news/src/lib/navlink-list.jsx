import { usePathname } from "next/navigation";

export default function navLinksList() {
  const path = usePathname();
  return [
    {
      title: "News",
      path: "/news",
      active: path.startsWith("/meals"),
    },
    {
      title: "Archive",
      path: "/archive",
      active: path.startsWith("/archive"),
    },
  ];
}
