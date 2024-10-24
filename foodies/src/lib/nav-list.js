import { usePathname } from "next/navigation";

export default function getNavList() {
  const path = usePathname();

  return [
    {
      title: "Browse Meals",
      href: "/meals",
      active: path.startsWith("/meals"), 
    },
    {
      title: "Foodies Community",
      href: "/community",
      active: path.startsWith("/community"),
    },
  ];
}
