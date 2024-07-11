import React from "react";
import video from "../../assets/bannerVideo/video.mp4";

export const HeroSection: React.FC = () => {
  return (
    <div className="relative">
      <video
        className="w-full h-auto"
        autoPlay
        loop
        muted
        playsInline
        src={video}
      />
      <div className="absolute inset-0 flex justify-center items-center">
        <h1 className="text-white text-9xl opacity-85 font-serif font-bold">
          Simply the Finest
        </h1>
      </div>
    </div>
  );
};
