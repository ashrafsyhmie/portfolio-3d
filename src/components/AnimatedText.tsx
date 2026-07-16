import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface AnimatedCharacterProps {
  character: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
}

function AnimatedCharacter({
  character,
  progress,
  start,
  end,
}: AnimatedCharacterProps) {
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block" aria-hidden="true">
      <span className="opacity-0">{character}</span>
      <motion.span className="absolute inset-0" style={{ opacity }}>
        {character}
      </motion.span>
    </span>
  );
}

export function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const words = text.split(' ');
  const characterCount = words.join('').length;
  let characterIndex = 0;
  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  return (
    <p ref={paragraphRef} className={className} aria-label={text}>
      {words.map((word, wordIndex) => (
        <span
          key={`${word}-${wordIndex}`}
          className="mr-[0.28em] inline-block whitespace-nowrap last:mr-0"
        >
          {Array.from(word).map((character) => {
            const start = characterIndex / characterCount;
            const end = Math.min(1, start + 1 / characterCount);
            const key = `${character}-${wordIndex}-${characterIndex}`;
            characterIndex += 1;

            return (
              <AnimatedCharacter
                key={key}
                character={character}
                progress={scrollYProgress}
                start={start}
                end={end}
              />
            );
          })}
        </span>
      ))}
    </p>
  );
}
