"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import getImgList from "@/lib/slide-img-list";

const HeaderSlideShow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = getImgList();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0 h-[27rem] relative overflow-hidden">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          alt={image.alt}
          className={`absolute transition-opacity duration-1000 ease-in-out object-cover w-full h-full ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          priority={index === currentIndex}
        />
      ))}
    </div>
  );
};

export default HeaderSlideShow;
