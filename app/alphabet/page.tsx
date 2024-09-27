import Script from "next/script";
import React, { useEffect } from "react";

const Alphabet: React.FC = () => {
  useEffect(() => {
    const lottiePlayer = document.getElementById("lottiePlayer");
    if (lottiePlayer !== null) {
      lottiePlayer.addEventListener("complete", () => {
        lottiePlayer.style.display = "none";
      });
    }
  });

  return (
    <>
      <div>
        <Script
          strategy="beforeInteractive"
          src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
          type="module"
        />
        <dotlottie-player
          id="lottiePlayer"
          autoplay
          src="https://lottie.host/f11d4391-2afb-4c1c-a917-6ef3beedce21/QPxW70TFdZ.json"
          style={{ width: "auto", height: "100%" }}
        ></dotlottie-player>
      </div>
    </>
  );
};

export default Alphabet;
