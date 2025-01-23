import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-hls-quality-selector"; // Quality Selector Plugin

// Define VideoJS Component
export default function VideoJS({ options, onReady }: any) {
  const videoRef = useRef<any>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (!playerRef.current) {
      // Create a Video.js instance
      const videoElement = document.createElement("video-js");
      console.log("video ele", videoElement);
      videoElement.classList.add("vjs-big-play-centered", "vjs-fluid");
      videoRef.current.appendChild(videoElement);

      const player = (playerRef.current = videojs(videoElement, options, () => {
        //@ts-ignore
        videojs.log("Player is ready");
        onReady && onReady(player);
      }));

      // Initialize HLS Quality Selector Plugin
      //@ts-ignore
      player.hlsQualitySelector({
        displayCurrentQuality: true, // Show current quality in the control bar
      });

      // Example Player Event Logs
      player.on("waiting", () => {
        //@ts-ignore
        videojs.log("Player is waiting for data...");
      });
      player.on("dispose", () => {
        //@ts-ignore
        videojs.log("Player disposed");
      });
    }

    return () => {
      if (playerRef.current && !playerRef.current.isDisposed()) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [options]);

  return (
    <div>
      {/* Video.js Player */}
      <div data-vjs-player>
        <div ref={videoRef} />
      </div>
    </div>
  );
}
