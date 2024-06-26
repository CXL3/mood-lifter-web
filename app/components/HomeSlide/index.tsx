import React, { useState, useEffect } from "react";
import Link from "next/link";
import "@/app/globals.css";

interface HomeSlideProps {
  text: string;
  color: string;
  backgroundImage?: string;
  link?: string;
  includeButton?: boolean;
}

export default function HomeSlide({
  text,
  color,
  backgroundImage,
  link = "/",
  includeButton,
}: HomeSlideProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  const style = {
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    height: "120vh",
    width: "100%",
    transition: "opacity 1s ease-in-out", // Smooth transition for the opacity
    opacity: loaded ? 1 : 0, // Start from 0 opacity, fade in to 1
  };

  return (
    <div className={`${color} w-full h-screen`}>
      <div
        className={` flex flex-col items-center justify-center px-5 pt-12 space-y-4`}
        style={style}
      >
        <p
          className="font-bold pt-20 text-lg sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl text-white"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          {text}
        </p>
        {includeButton && (
          <Link
            href={link}
            className="inline-block bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold py-2 px-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Learn More
          </Link>
        )}
      </div>
    </div>
  );
}
