import React, { useEffect, useState } from "react";

const HindiAlphabetAnimation: React.FC = () => {
  const hindiAlphabet = [
    "अ",
    "आ",
    "इ",
    "ई",
    "उ",
    "ऊ",
    "ऋ",
    "ए",
    "ऐ",
    "ओ",
    "औ",
    "अं",
    "अः",
    "क",
    "ख",
    "ग",
    "घ",
    "ङ",
    "च",
    "छ",
    "ज",
    "झ",
    "ञ",
    "ट",
    "ठ",
    "ड",
    "ढ",
    "ण",
    "त",
    "थ",
    "द",
    "ध",
    "न",
    "प",
    "फ",
    "ब",
    "भ",
    "म",
    "य",
    "र",
    "ल",
    "व",
    "श",
    "ष",
    "स",
    "ह",
    "क्ष",
    "त्र",
    "ज्ञ",
  ];
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLetterIndex(
        (prevIndex) => (prevIndex + 1) % hindiAlphabet.length
      );
    }, 600); // Change letter every 1 second

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <span style={{ fontSize: "10rem" }}>
        {hindiAlphabet[currentLetterIndex]}
      </span>
    </div>
  );
};

export default HindiAlphabetAnimation;
