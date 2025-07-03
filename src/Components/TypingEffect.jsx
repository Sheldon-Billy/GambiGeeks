import React, { useState, useEffect } from "react";

const TypingEffect = ({
  text,
  delay = 30,
  infinite = false,
  onTypingComplete,
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else {
      // Typing is complete
      if (onTypingComplete) {
        onTypingComplete(); // Call the callback
      }
      if (infinite) {
        const timeout = setTimeout(() => {
          setCurrentText("");
          setCurrentIndex(0);
        }, 1000);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentIndex, delay, infinite, text, onTypingComplete]);

  return <span>{currentText}</span>;
};

export default TypingEffect;
