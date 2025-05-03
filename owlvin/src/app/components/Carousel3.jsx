'use client';

import { useState, useEffect } from 'react';
import useIsMobile from '../hooks/platform-detection';
import useCarouselControls from '../hooks/useCarouselControls';


export default function Carousel3({topics, index, setIndex}) {
    const isMobile = useIsMobile();

  const rotateUp = () => setIndex((index - 1 + topics.length) % topics.length);
  const rotateDown = () => setIndex((index + 1) % topics.length);
  const current = topics[index];
    
  // Distinguish between mobile and joystick swiping //
  useCarouselControls({ isMobile, onUp: rotateUp, onDown: rotateDown });
  const up = topics[(index - 1 + topics.length) % topics.length];
  const down = topics[(index + 1) % topics.length];
////////////////////////////////////////////////////////

    const topicsMap = [
      "Existential Philosophy & Meaning of Life",
      'Sarcastic Life Coaching & "Motivational" Advice',
      "Tourism and thing to do in San Francisco",
      "Space Exploration & The Future of Humanity",
      "Useless but Fascinating Scientific Facts",
    ];
  
    return (
      <div className="min-h-screen bg-blue-500 flex flex-col items-center justify-center text-black px-4">
        <h1 className="text-4xl font-bold mb-10 text-black drop-shadow-lg">
          What would you like to talk about?
        </h1>
  
        <div className="flex flex-col gap-4 w-full max-w-md">
          {topicsMap.map((topic, i) => (
            <div
              key={i}
              className={`px-6 py-3 rounded-lg border-2 text-center transition-all duration-200 ${
                i === index
                  ? 'bg-yellow-300 text-black border-orange-500 scale-110 font-semibold shadow-lg'
                  : 'bg-gray-300 text-black border-transparent opacity-70'
              } ${i === index ? 'w-[90%] py-6 text-lg' : 'w-[80%]'} mx-auto`}
            >
              {topic}
            </div>
          ))}
        </div>
      </div>
    );
  }
  