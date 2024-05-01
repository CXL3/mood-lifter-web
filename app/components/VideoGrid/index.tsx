import React from "react";
import { VideoGridTypes } from "./types"; // Assuming types.ts is in the root

interface VideoGridProps {
  videos: VideoGridTypes[];
}

const VideoGrid: React.FC<VideoGridProps> = ({ videos }) => {
  return (
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
  );
};

export default VideoGrid;
