"use client";

import { useState, useEffect, ReactNode } from "react";

interface TypingTextProps {
  texts: (string | ReactNode)[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
}

const TypingText = ({
  texts,
  typeSpeed = 120,
  deleteSpeed = 80,
  pause = 800,
}: TypingTextProps) => {
  const [displayed, setDisplayed] = useState<ReactNode>(null);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [waiting, setWaiting] = useState(false);

  useEffect(() => {
    if (waiting) return;

    const currentText = texts[textIndex];

    const stringValue =
      typeof currentText === "string" ? currentText : currentText?.toString();

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setDisplayed(stringValue?.slice(0, charIndex + 1));
          if (charIndex + 1 === stringValue?.length) {
            setWaiting(true);
            setTimeout(() => {
              setDeleting(true);
              setWaiting(false);
            }, pause);
          } else {
            setCharIndex(charIndex + 1);
          }
        } else {
          setDisplayed(stringValue?.slice(0, charIndex - 1));
          if (charIndex - 1 === 0) {
            setWaiting(true);
            setTimeout(() => {
              setDeleting(false);
              setTextIndex((prev) => (prev + 1) % texts.length);
              setCharIndex(0);
              setWaiting(false);
            }, pause / 2);
          } else {
            setCharIndex(charIndex - 1);
          }
        }
      },
      deleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    charIndex,
    deleting,
    textIndex,
    texts,
    typeSpeed,
    deleteSpeed,
    pause,
    waiting,
  ]);

  return (
    <span className="relative">
      {displayed}
      <span className="ml-1 border-r-2 border-light animate-blink"></span>
    </span>
  );
};

export default TypingText;
