'use client';

import { useEffect, useState } from 'react';

interface Eye {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
}

export default function FloatingEyes() {
  const [eyes, setEyes] = useState<Eye[]>([]);

  useEffect(() => {
    const colors = [
      'rgba(255, 107, 157, 0.15)',
      'rgba(107, 168, 255, 0.15)',
      'rgba(255, 217, 61, 0.15)',
      'rgba(181, 234, 215, 0.15)',
    ];

    const newEyes: Eye[] = [];
    for (let i = 0; i < 6; i++) {
      newEyes.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 60 + Math.random() * 40,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 5,
      });
    }
    setEyes(newEyes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1]">
      {eyes.map((eye) => (
        <div
          key={eye.id}
          className="absolute rounded-full border-2 backdrop-blur-sm"
          style={{
            left: `${eye.x}%`,
            top: `${eye.y}%`,
            width: `${eye.size}px`,
            height: `${eye.size}px`,
            borderColor: eye.color,
            background: `radial-gradient(circle, ${eye.color} 0%, transparent 70%)`,
            animation: `float ${8 + eye.delay}s ease-in-out infinite`,
            animationDelay: `${eye.delay}s`,
          }}
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: `${eye.size * 0.25}px`,
              height: `${eye.size * 0.25}px`,
              background: eye.color.replace('0.15', '0.4'),
              animation: `pulse-slow ${3 + eye.delay}s ease-in-out infinite`,
              animationDelay: `${eye.delay * 0.5}s`,
            }}
          />
        </div>
      ))}
    </div>
  );
}
