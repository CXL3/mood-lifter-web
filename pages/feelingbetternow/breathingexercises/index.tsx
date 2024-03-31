import Header from "@/app/components/Header";
import Head from "next/head";
import "@/app/globals.css";

function BreathingExercises() {
  const videos = [
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
          <div className="grid gap-5 w-full max-w-4xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
              <div
                key={video.id}
                className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 flex flex-col items-center"
              >
                <h2 className="text-lg font-semibold mb-2">{video.title}</h2>
                <iframe
                  className="w-full rounded-lg aspect-video"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default BreathingExercises;
