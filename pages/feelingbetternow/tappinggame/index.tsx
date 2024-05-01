import Header from "@/app/components/Header";
import Head from "next/head";
import "@/app/globals.css";
import VideoGrid from "@/app/components/VideoGrid";
import { VideoGridTypes } from "@/app/components/VideoGrid/types";

function TappingGame() {
  const videos: VideoGridTypes[] = [
    {
      id: "pAclBdj20ZU",
      title: "How to Do EFT Tapping Therapy - EFT Basic Recipe Tutorial",
    },
    {
      id: "XyHxuTG6jRk",
      title: "Tapping for Anxiety - Simple EFT Tapping Practice",
    },
    {
      id: "6AW01rT92Ng",
      title: "EFT Tapping for Beginners: Relieve Stress & Anxiety",
    },
  ];

  return (
    <>
      <Head>
        <title>Tapping Therapy Exercises</title>
        <meta
          name="description"
          content="Learn and practice tapping therapy (EFT) to help manage stress, anxiety, and emotional issues."
        />
      </Head>
      <main className="bg-gradient-to-br from-blue-400 to-cyan-300 min-h-screen flex flex-col items-center justify-center p-5">
        <Header />
        <div className="text-center flex flex-col items-center justify-center min-h-screen w-full pt-24">
          <h1
            className="text-4xl md:text-5xl font-extrabold text-yellow-300 pb-4"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Tapping Therapy Exercises
          </h1>
          <p className="text-lg md:text-xl font-medium text-white mb-6 max-w-2xl mx-auto">
            Select a video to start learning and practicing tapping therapy
            (EFT). These exercises are designed to help you manage stress,
            anxiety, and enhance your emotional well-being.
          </p>
          <VideoGrid videos={videos} />
        </div>
      </main>
    </>
  );
}

export default TappingGame;
