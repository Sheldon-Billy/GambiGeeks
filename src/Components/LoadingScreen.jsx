import React, { useState, useEffect } from "react";
import TypingEffect from "./TypingEffect";
import Logo from "../assets/Pictures";

const LoadingScreen = ({ onComplete }) => {
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    if (typingComplete) {
      const timeout = setTimeout(() => {
        onComplete(); // Call the onComplete function to hide the loading screen
      }, 3000); // 1-second delay

      return () => clearTimeout(timeout); // Cleanup
    }
  }, [typingComplete, onComplete]);

  return (
    // Container
    <div className="flex flex-col gap-5 absolute top-40 left-90 items-center">

      <img src={Logo} className='h-50 rounded-[200px] w-50 shadow-[0_0_20px_blue] ' />
      <h1 className="text-6xl font-bold text-white"> @GambiGeeks</h1>
      {/* loading text */}
      <div className="lg:text-3xl sm:text-[10px]  font-extrabold bg-gradient-to-r from-[white] via-blue-300 to-[blue] text-transparent bg-clip-text">
        <TypingEffect
          text="A moment while we set everything ready for you..."
          onTypingComplete={() => setTypingComplete(true)} // Notify when typing is done
        />

        <span className="animate-blink text-blue-500 ">|</span>
      </div>
      {/* progress bar */}
      <div className="w-[350px] h-[2px] bg-gray-800 rounded-2xl overflow-hidden">
        <div className="bg-blue-500 shadow-[0_0_15px_blue] h-full w-[30%] animate-loading-bar "></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
