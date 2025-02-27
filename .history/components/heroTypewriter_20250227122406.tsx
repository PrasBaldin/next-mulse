"use client";
import { useEffect, useState } from "react";

export default function Typewriter({
  text,
  speed,
  delay = 0,
}: {
  text: string;
  speed: number;
  delay?: number;
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentText, setCurrentText] = useState(text);

  useEffect(() => {
    // Reset animasi ketika text berubah
    if (text !== currentText) {
      setDisplayedText("");
      setCurrentText(text);
    }

    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;

    timeoutId = setTimeout(() => {
      let index = 0;
      intervalId = setInterval(() => {
        if (index < text.length) {
          setDisplayedText((prev) => prev + text.charAt(index));
          index++;
        } else {
          clearInterval(intervalId);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, speed, delay, currentText]);

  return <>{displayedText}</>;
}
