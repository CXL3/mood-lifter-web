// VideoGrid.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import VideoGrid from "../VideoGrid";
import { VideoGridTypes } from "./types"; // Update the import if necessary

// Sample data for testing
const mockVideos: VideoGridTypes[] = [
  {
    id: "123",
    title: "Video 1",
  },
  {
    id: "456",
    title: "Video 2",
  },
  {
    id: "789",
    title: "Video 3",
  },
];

describe("VideoGrid", () => {
  it("renders all videos provided", () => {
    render(<VideoGrid videos={mockVideos} />);

    // Check for the title of each video
    mockVideos.forEach((video) => {
      expect(screen.getByText(video.title)).toBeInTheDocument();
    });

    // Optionally, check the src of iframes
    mockVideos.forEach((video) => {
      const iframe = screen.getByTitle(video.title);
      expect(iframe).toBeInTheDocument();
      expect(iframe).toHaveAttribute(
        "src",
        `https://www.youtube.com/embed/${video.id}`,
      );
    });
  });

  it("displays videos in iframes with proper attributes", () => {
    render(<VideoGrid videos={mockVideos} />);
    mockVideos.forEach((video) => {
      const iframe = screen.getByTitle(video.title);
      expect(iframe).toBeInTheDocument();
      expect(iframe).toHaveAttribute(
        "src",
        `https://www.youtube.com/embed/${video.id}`,
      );
      expect(iframe).toHaveAttribute("allowFullScreen");
    });
  });
});
