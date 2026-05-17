import { type ReactNode, useEffect, useMemo, useState } from "react";

import { cls } from "@/utils/helpers";

interface TypingTextProps {
  text: string[];
  delay?: number;
  eraseDelay?: number;
  waitTime?: number;
  cursor?: ReactNode;
  className?: string;
  grow?: boolean;
  alwaysVisibleCount?: number;
  smooth?: boolean;
  onComplete?: () => void;
  hideCursorOnComplete?: boolean;
}

function Blinker() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow((prev) => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return <span className={show ? "" : "opacity-0"}>|</span>;
}

function SmoothEffect({
  words,
  index,
  alwaysVisibleCount,
}: {
  words: string[];
  index: number;
  alwaysVisibleCount: number;
}) {
  return (
    <div className="flex flex-wrap whitespace-pre">
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          className={cls("transition-opacity duration-300 ease-in-out", {
            "opacity-100": wordIndex < index,
            "opacity-0": wordIndex >= index + alwaysVisibleCount,
          })}
        >
          {word}
          {wordIndex < words.length && <span>&nbsp;</span>}
        </span>
      ))}
    </div>
  );
}

function NormalEffect({
  text,
  index,
  alwaysVisibleCount,
}: {
  text: string;
  index: number;
  alwaysVisibleCount: number;
}) {
  return (
    <>
      {text.slice(
        0,
        Math.max(index, Math.min(text.length, alwaysVisibleCount)),
      )}
    </>
  );
}

function CursorWrapper({
  visible,
  children,
  waiting,
}: {
  visible?: boolean;
  waiting?: boolean;
  children: ReactNode;
}) {
  const [on, setOn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setOn((prev) => !prev);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!visible || (!on && !waiting)) {
    return null;
  }

  return children;
}

enum Direction {
  Forward = "forward",
  Backward = "backward",
}

function Type({
  text,
  cursor,
  delay = 32,
  eraseDelay = 20,
  grow,
  className,
  alwaysVisibleCount,
  smooth,
  waitTime = 1000,
  onComplete,
  hideCursorOnComplete,
}: {
  text: string;
  cursor?: ReactNode;
  delay?: number;
  eraseDelay?: number;
  grow?: boolean;
  className?: string;
  alwaysVisibleCount?: number;
  smooth?: boolean;
  waitTime?: number;
  onComplete?: () => void;
  hideCursorOnComplete?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(Direction.Forward);
  const [isComplete, setIsComplete] = useState(false);

  const words = useMemo(() => text.split(/\s+/), [text]);

  const total = smooth ? words.length : text.length;

  useEffect(() => {
    setIndex(0);
    setDirection(Direction.Forward);
    setIsComplete(false);
  }, [text]);

  useEffect(() => {
    const currentDelay = direction === Direction.Forward ? delay : eraseDelay;

    const interval = setInterval(() => {
      setIndex((prev) => {
        if (direction === Direction.Forward) {
          if (prev >= total) {
            clearInterval(interval);

            setTimeout(() => {
              setDirection(Direction.Backward);
            }, waitTime);

            return prev;
          }

          return prev + 1;
        }

        if (prev <= 0) {
          clearInterval(interval);

          onComplete?.();

          return 0;
        }

        return prev - 1;
      });
    }, currentDelay);

    return () => clearInterval(interval);
  }, [direction, delay, eraseDelay, total, waitTime, onComplete]);

  useEffect(() => {
    if (index >= total) {
      setIsComplete(true);
    }
  }, [index, total]);

  const waiting = index >= total;

  return (
    <div className={cls("relative font-mono", className)}>
      {!grow && <div className="invisible">{text}</div>}

      <div
        className={cls({
          "absolute inset-0 h-full w-full": !grow,
        })}
      >
        {smooth ? (
          <SmoothEffect
            words={words}
            index={index}
            alwaysVisibleCount={alwaysVisibleCount ?? 1}
          />
        ) : (
          <NormalEffect
            text={text}
            index={index}
            alwaysVisibleCount={alwaysVisibleCount ?? 1}
          />
        )}

        <CursorWrapper
          waiting={waiting}
          visible={Boolean(
            !smooth && cursor && (!hideCursorOnComplete || !isComplete),
          )}
        >
          {cursor}
        </CursorWrapper>
      </div>
    </div>
  );
}

export default function TypingText({
  text,
  cursor = <Blinker />,
  delay = 32,
  eraseDelay = 20,
  className,
  grow = false,
  alwaysVisibleCount = 1,
  smooth = false,
  waitTime = 1000,
  onComplete,
  hideCursorOnComplete = false,
}: TypingTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const currentText = text[currentTextIndex];

  const handleComplete = () => {
    setCurrentTextIndex((prev) => (prev + 1) % text.length);

    onComplete?.();
  };

  return (
    <Type
      key={currentText}
      text={currentText}
      delay={delay}
      eraseDelay={eraseDelay}
      waitTime={waitTime}
      grow={grow}
      cursor={cursor}
      className={className}
      smooth={smooth}
      alwaysVisibleCount={alwaysVisibleCount}
      onComplete={handleComplete}
      hideCursorOnComplete={hideCursorOnComplete}
    />
  );
}
