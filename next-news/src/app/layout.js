import localFont from "next/font/local";
import "../globals.css";
import Navbar from "@/components/Navbar/Navbar";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Next News",
  description: "A News App using Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased px-7 md:px-20 lg:px-36`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
