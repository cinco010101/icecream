import { useEffect, useState } from 'react';

interface SnowflakeProps {
  id: number;
  left: string;
  animationDuration: string;
  animationDelay: string;
  size: string;
  opacity: number;
}

export function Snowflakes() {
  const [snowflakes, setSnowflakes] = useState<SnowflakeProps[]>([]);

  useEffect(() => {
    // Generate random snowflakes on mount
    const flakes: SnowflakeProps[] = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}vw`,
      animationDuration: `${Math.random() * 10 + 10}s`, // 10s to 20s
      animationDelay: `${Math.random() * 10}s`,
      size: `${Math.random() * 0.8 + 0.4}rem`, // 0.4rem to 1.2rem
      opacity: Math.random() * 0.5 + 0.2, // 0.2 to 0.7
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: flake.left,
            animationDuration: flake.animationDuration,
            animationDelay: flake.animationDelay,
            fontSize: flake.size,
            opacity: flake.opacity,
          }}
        >
          &#10052; {/* Unicode snowflake character */}
        </div>
      ))}
    </div>
  );
}
