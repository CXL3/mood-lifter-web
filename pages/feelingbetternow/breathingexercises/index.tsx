import Header from "@/app/components/Header";
import Head from "next/head";
import "@/app/globals.css";
import VideoGrid from "@/app/components/VideoGrid";
import { VideoGridTypes } from "@/app/components/VideoGrid/types";

function BreathingExercises() {
  const videos: VideoGridTypes[] = [
    { id: "hJbRpHZr_d0", title: "Calm Breathing Exercise" },
    { id: "m8JjuyRIxOg", title: "Deep Breathing for Anxiety Relief" },
    { id: "sJ04nsiz_M0", title: "Quick Mood Lifting Breathing" },
  ];

  return (
    <>
      <Head>
        <title>Breathing Exercise</title>
        <meta
          name="description"
          content="Breathing exercises for mood lift and anxiety relief"
        />
      </Head>
      <main className="bg-gradient-to-br from-blue-400 to-cyan-300 min-h-screen flex flex-col items-center justify-center p-5">
        <Header />
        <div className="text-center flex flex-col items-center justify-center min-h-screen w-full pt-24">
          <h1
            className="text-4xl md:text-5xl font-extrabold text-yellow-300 pb-4"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Breathing Exercises
          </h1>
          <p className="text-lg md:text-xl font-medium text-white mb-6 max-w-2xl mx-auto">
            Select a video to start your breathing exercise. These exercises can
            help lift your mood and relieve anxiety.
          </p>
          <VideoGrid videos={videos} />
        </div>
      </main>
    </>
  );
}

export default BreathingExercises;
