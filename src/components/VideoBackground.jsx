import React from "react";
import { useSelector } from "react-redux";
import { useTrailerVideo } from "../customHooks/useTrailerVideo";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useTrailerVideo(movieId);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
      ></iframe>
    </div>
  );
};

export default VideoBackground;
