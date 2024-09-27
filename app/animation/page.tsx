"use client"
import Script from "next/script";
import React from "react";
import HindiAlphabetAnimation from "../components/HindiAlphabetAnimation";

const Animation: React.FC = () => {
  return (
    <div>
      <Script
        strategy="beforeInteractive"
        src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
        type="module"
      />
      {/* <h1>Welcome to My Next.js App</h1> */}
      <HindiAlphabetAnimation />
    </div>
  );
};

export default Animation;
