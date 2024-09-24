import Script from "next/script";
import React from "react";

const Alphabet: React.FC = () => {
  return (
    <>
      <div>
        <Script
          strategy="beforeInteractive"
          src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
          type="module"
        />
        <dotlottie-player
          autoplay
          src="https://lottie.host/f11d4391-2afb-4c1c-a917-6ef3beedce21/QPxW70TFdZ.json"
          style={{ width: "auto", height: "100%" }}
        />
      </div>
    </>
  );
};

export default Alphabet;
