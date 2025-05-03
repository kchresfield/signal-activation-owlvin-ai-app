'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import useIsMobile from '../hooks/platform-detection';
import useCarouselControls from '../hooks/useCarouselControls';


export default function Carousel({traits, index, setIndex}) {
  const isMobile = useIsMobile();

  const rotateLeft = () => setIndex((index - 1 + traits.length) % traits.length);
  const rotateRight = () => setIndex((index + 1) % traits.length);
  const current = traits[index];

  // Distinguish between mobile and joystick swiping //
  useCarouselControls({ isMobile, onLeft: rotateLeft, onRight: rotateRight });
  const left = traits[(index - 1 + traits.length) % traits.length];
  const right = traits[(index + 1) % traits.length];
  /////////////////////////////////////////////////////////

  return (
    <div className="relative w-[300px] h-[300px] mx-auto">
      {/* Icons on carousel */}
      <div className="absolute top-1/2 left transform -translate-y-1/2 filter blur-[2px]">
        <Image src={left.icon} alt={left.name} width={125} height={125} />
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <Image src={current.icon} alt={current.name} width={200} height={200} />
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 filter blur-[2px]">
        <Image src={right.icon} alt={right.name} width={125} height={125} />
      </div>

      {/* Trait name */}
      <div className="absolute top left-1/2 transform -translate-x-1/2 text-lg font-semibold text-white">
        {current.name}
      </div>

      {/* Invisible click zones or can link to buttons */}
      {/* <div className="absolute bottom-[-100px] left-0">
        <button onClick={rotateLeft}>←</button>
        <button onClick={rotateRight}>→</button>
      </div> */}
    </div>
  );
}