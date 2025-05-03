import { useEffect } from 'react';

export default function useCarouselControls({ isMobile, onLeft, onRight, onUp, onDown }) {
  // Swipe support for mobile
  useEffect(() => {
    if (!isMobile) return;

    let touchStartX = 0;
    let touchStartY = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchEndY - touchStartY;
      const deltaX = touchEndX = touchStartX;
      
      // Distinguish between up and down motions for different carousels
      if (Math.abs(deltaX) > Math.abs(deltaY)) { // Horizontal swipe
        if (deltaX < -30) onRight?.();
        if (deltaX > 30) onLeft?.();
      } else { // vertical
        if (deltaY < -30) onUp?.();
        if (deltaY > 30) onDown?.();
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isMobile, onLeft, onRight, onUp, onDown]);

  // Keyboard support for web
  useEffect(() => {
    if (isMobile) return;

    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowLeft':
          onLeft?.();
          break;
        case 'ArrowRight':
          onRight?.();
          break;
        case 'ArrowUp':
          onUp?.();
          break;
        case 'ArrowDown':
          onDown?.();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobile, onLeft, onRight, onUp, onDown]);
}
