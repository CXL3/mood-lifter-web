import Link from "next/link";

interface HomeSlideProps {
  text: string;
  color: string;
  link?: string; // Optional link for navigation
  includeButton?: boolean; // Optional flag to show/hide the button
}

export default function HomeSlide({
  text,
  color,
  link = "/",
  includeButton,
}: HomeSlideProps) {
  return (
    <div
      className={`${color} w-full h-screen flex flex-col items-center justify-center px-5 space-y-4`}
    >
      <p className="font-poppins font-bold text-gray-800 text-lg sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl">
        {text}
      </p>
      {includeButton && (
        <Link
          href={link}
          className="bg-white text-gray-800 py-2 px-4 rounded-lg shadow-md hover:bg-gray-100 transition"
        >
          Learn More
        </Link>
      )}
    </div>
  );
}
