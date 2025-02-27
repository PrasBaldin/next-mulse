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
    if (text !== currentText) {
      setDisplayedText("");
      setCurrentText(" " + text);
    }

    const timeoutId = setTimeout(() => {
      let index = 0;
      const intervalId = setInterval(() => {
        if (index < text.length) {
          setDisplayedText((prev) => prev + text.charAt(index));
          index++;
        } else {
          clearInterval(intervalId);
        }
      }, speed);

      return () => clearInterval(intervalId);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [text, speed, delay, currentText]);

  return <>{displayedText}</>;
}
