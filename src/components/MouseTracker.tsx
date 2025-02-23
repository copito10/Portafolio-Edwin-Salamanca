import { useEffect, useRef } from 'react';

const MouseTracker = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    
    const moveCursor = (e: MouseEvent) => {
      if (cursor && cursorDot) {
        cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        cursorDot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-8 h-8 pointer-events-none border-2 border-[#445eec] rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 z-50"
      />
      <div
        ref={cursorDotRef}
        className="fixed w-2 h-2 pointer-events-none border-[#445eec] rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 z-50"
      />
    </>
  );
};

export default MouseTracker;