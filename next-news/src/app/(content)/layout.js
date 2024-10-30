import Navbar from "@/components/Navbar/Navbar";

export const metadata = {
  title: "Next News",
  description: "A News App using Next.js",
};

export default function ContentLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
