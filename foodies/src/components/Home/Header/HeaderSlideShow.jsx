"use client";
import burger from "@/../assets/burger.jpg";
import curry from "@/../assets/curry.jpg";
import dumplings from "@/../assets/dumplings.jpg";
import macncheese from "@/../assets/macncheese.jpg";
import pizza from "@/../assets/pizza.jpg";
import schnitzel from "@/../assets/schnitzel.jpg";
import tomatoSalad from "@/../assets/tomato-salad.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  { image: burger, alt: "Burger" },
  { image: curry, alt: "Curry" },
  { image: dumplings, alt: "Dumplings" },
  { image: macncheese, alt: "Mac and Cheese" },
  { image: pizza, alt: "Pizza" },
  { image: schnitzel, alt: "Schnitzel" },
  { image: tomatoSalad, alt: "Tomato Salad" },
];

const HeaderSlideShow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0 h-[22rem] relative overflow-hidden">
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
