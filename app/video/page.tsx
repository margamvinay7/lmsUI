"use client";
import VideoPlayer from "@/components/videoPlayer";

function Video() {
  // const playerRef = useRef(null);
  // const videoLink =
  //   "http://res.cloudinary.com/dcpb8l04x/raw/upload/v1734605180/hls_files/courses/1dbbf5e7-c3e5-4211-ba9f-d2d45966a276/master.m3u8"; // Replace with your HLS URL
  const videoLink =
    "http://localhost:8000/uploads/courses/4164dd74-aec6-43ec-a28f-800834c693d9/master.m3u8"; // Replace with your HLS URL
  // const videoLink =
  //   "http://localhost:8000/uploads/courses/dfe93c8c-6adc-41c8-bbcf-966d03234d3c/master.m3u8"; // Replace with your HLS URL

  const videoPlayerOptions = {
    controls: true, // Show player controls
    responsive: true, // Make the player responsive
    fluid: true, // Fluid layout
    aspectRatio: "16:9",
    // width: 940, // Width of the player
    // height: 560, // Height of the player
    playbackRates: [0.5, 1, 1.5, 2], // Add speed controls
    sources: [
      {
        src: videoLink,
        type: "application/x-mpegURL", // HLS stream type
      },
    ],
  };

  const handlePlayerReady = (player: any) => {
    console.log("Player is ready", player);
  };

  return (
    <div>
      <VideoPlayer options={videoPlayerOptions} onReady={handlePlayerReady} />
    </div>
  );
}

export default Video;
