import React, { useState, useEffect } from "react";
import TypingEffect from "./TypingEffect";
import Logo from "../assets/Pictures";
import BuildingSVG from "./BuildingSVG"; // New SVG component

const LoadingScreen = ({ onComplete }) => {
  const [typingComplete, setTypingComplete] = useState(false);
  const [progress, setProgress] = useState(0);

  // Progress logic (starts when typing finishes)
  useEffect(() => {
    if (typingComplete) {
      const interval = setInterval(() => {
        setProgress((old) => {
          const next = old + 2;
          if (next >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              onComplete();
            }, 500);
          }
          return next;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [typingComplete, onComplete]);

  return (
    <div className="flex flex-col gap-5 absolute top-30 left-90 items-center">
      {/* animated svg */}
      <BuildingSVG progress={progress} />

      <h1 className="text-6xl font-bold text-white">@GambiGeeks</h1>
      <div className="lg:text-3xl sm:text-[10px] font-extrabold bg-gradient-to-r from-white via-blue-300 to-blue-500 text-transparent bg-clip-text text-center">
        <TypingEffect
          text="A moment while we set everything ready for you..."
          onTypingComplete={() => setTypingComplete(true)}
        />
        <span className="animate-blink text-blue-500">|</span>
      </div>


      {/* progress bar */}
      <div className="w-[350px] h-[2px] bg-gray-800 rounded-2xl overflow-hidden">
        <div className="bg-blue-500 shadow-[0_0_100px_blue] h-full w-[30%] animate-loading-bar "></div>
      </div>


    </div>
  );
};

export default LoadingScreen;
