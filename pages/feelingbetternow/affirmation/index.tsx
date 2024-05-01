import Header from "@/app/components/Header";
import Head from "next/head";
import "@/app/globals.css";
import VideoGid from "@/app/components/VideoGrid";
import { VideoGridTypes } from "@/app/components/VideoGrid/types";

function MoodWords() {
  const videos: VideoGridTypes[] = [
    {
      id: "YeM2yhULSVM",
      title: "Spoken Affirmations For Panic Attack, Anxiety",
    },
    {
      id: "0Cht6vCJIw4",
      title: "Affirmations For Morning Anxiety, Chronic Stress",
    },
    {
      id: "SWESKYhETmQ",
      title: "Daily Affirmations for Anxiety, Chronic Stress, Panic Attacks",
    },
  ];

  return (
    <>
      <Head>
        <title>Affirnation Meditation</title>
        <meta
          name="description"
          content="Explore meditations and affirmations to enhance positivity and wellbeing."
        />
      </Head>
      <main className="bg-gradient-to-br from-blue-400 to-cyan-300 min-h-screen flex flex-col items-center justify-center p-5">
        <Header />
        <div className="text-center flex flex-col items-center justify-center min-h-screen w-full pt-24">
          <h1
            className="text-4xl md:text-5xl font-extrabold text-yellow-300 pb-4"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Affirnation Meditation
          </h1>
          <p className="text-lg md:text-xl font-medium text-white mb-6 max-w-2xl mx-auto">
            Discover meditations and affirmations designed to improve your day
            and bring positivity into your life.
          </p>
          <VideoGid videos={videos} />
        </div>
      </main>
    </>
  );
}

export default MoodWords;
