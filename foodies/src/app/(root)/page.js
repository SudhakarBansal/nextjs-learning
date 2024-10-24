import Image from "next/image";
import Link from "next/link";
import MainHomePage from "@/components/MainHomePage";
export default function Home() {
  return (
    <>
      <header className="flex flex-col md:flex-row justify-between items-center md:px-32 md:py-16 px-6 py-8">
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <div className="img-slideshow w-full h-64 bg-gray-300">
            {/* Placeholder for slideshow image */}
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-start md:px-10">
          <h1 className="bg-gradient-to-r from-orange-600 via-orange-400 to-orange-300 bg-clip-text text-transparent text-4xl md:text-5xl font-extrabold leading-tight">
            NextLevel Food For NextLevel Foodies
          </h1>
          <p className="text-xl md:text-2xl my-4 tracking-wide">
            Taste & share food from all over the world
          </p>
          <div className="flex flex-col sm:flex-row mt-6">
            <Link
              className="bg-gradient-to-r from-orange-600 via-orange-400 to-orange-300 bg-clip-text text-transparent text-2xl py-2"
              href="/meals"
            >
              Join the community
            </Link>
            <Link
              className="text-white bg-gradient-to-r from-orange-600 via-orange-400 to-orange-400 px-5 py-3 text-xl rounded-lg font-bold sm:mx-6 sm:mt-0 mt-4"
              href="/community"
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </header>
      <MainHomePage/>
    </>
  );
}
