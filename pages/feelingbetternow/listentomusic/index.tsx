import React, { useState } from "react";
import Header from "@/app/components/Header";
import Head from "next/head";
import "@/app/globals.css";

const playlists = [
  {
    name: "Mood Lifters",
    songs: [
      { id: "ZbZSe6N_BXs", title: "Pharrell Williams - Happy" },
      { id: "LHCob76kigA", title: "OneRepublic - Counting Stars" },
      { id: "09R8_2nJtjg", title: "Maroon 5 - Sugar" },
    ],
  },
  {
    name: "Chill Vibes",
    songs: [
      { id: "WbJNkH-pDd8", title: "Petit Biscuit - Sunset Lover" },
      { id: "yKNxeF4KMsY", title: "Coldplay - Yellow" },
      { id: "0I647GU3Jsc", title: "Alina Baraz, Khalid - Electric" },
    ],
  },
  {
    name: "Energizing Beats",
    songs: [
      { id: "IPXIgEAGe4U", title: "Imagine Dragons - Believer" },
      {
        id: "YqeW9_5kURI",
        title: "Major Lazer & DJ Snake - Lean On (feat. MØ)",
      },
      { id: "papuvlVeZg8", title: "Katy Perry - Chained To The Rhythm" },
    ],
  },
  {
    name: "Focus Music",
    songs: [
      { id: "4VR-6AS0-l4", title: "Ludovico Einaudi - Nuvole Bianche" },
      { id: "M36OGCfYp3A", title: "Hans Zimmer - Time (Inception)" },
      { id: "WUXEeAXywCY", title: "Tony Anderson - Eyes Wide Open" },
    ],
  },
];

function MusicPlaylists() {
  const [currentPlaylist, setCurrentPlaylist] = useState(playlists[0]);

  return (
    <>
      <Head>
        <title>{currentPlaylist.name}</title>
        <meta
          name="description"
          content={`Enjoy the ${currentPlaylist.name} playlist to uplift your mood or relax.`}
        />
      </Head>
      <main className="bg-gradient-to-br from-blue-400 to-cyan-300 min-h-screen flex flex-col items-center justify-center p-5">
        <Header />
        <div className="text-center flex flex-col items-center justify-center w-full pt-24 md:pt-0">
          <h1
            className="text-4xl md:text-5xl font-extrabold text-yellow-300 pb-4"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            {currentPlaylist.name}
          </h1>
          <p className="text-lg md:text-xl font-medium text-white mb-6 max-w-2xl mx-auto">
            Select a playlist to enhance your mood.
          </p>
          <div className="mb-8">
            {playlists.map((playlist) => (
              <button
                key={playlist.name}
                onClick={() => setCurrentPlaylist(playlist)}
                className={`px-4 py-2 m-2 rounded-lg ${currentPlaylist.name === playlist.name ? "bg-yellow-500 text-white" : "bg-white text-blue-500"}`}
              >
                {playlist.name}
              </button>
            ))}
          </div>
          <div className="grid gap-5 w-full max-w-4xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {currentPlaylist.songs.map((song) => (
              <div
                key={song.id}
                className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 flex flex-col items-center"
              >
                <h2 className="text-lg font-semibold mb-2">{song.title}</h2>
                <iframe
                  className="w-full rounded-lg aspect-video"
                  src={`https://www.youtube.com/embed/${song.id}`}
                  title={song.title}
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

export default MusicPlaylists;
