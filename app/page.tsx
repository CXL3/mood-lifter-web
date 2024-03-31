import Header from "./components/Header";
import HomeCarousel from "./components/HomeCarousel";
import "@/app/globals.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <div className="demo-carousel w-full">
        <HomeCarousel />
      </div>
    </main>
  );
}
