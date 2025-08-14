import { useEffect, useRef } from "react";

const useHideScroller = (ref: React.RefObject<HTMLElement>, speed: number = 1) => {
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Duplicate child content for infinite effect
    const children = Array.from(el.children);
    if (children.length && !el.dataset.cloned) {
      children.forEach((child) => {
        el.appendChild(child.cloneNode(true));
      });
      el.dataset.cloned = "true"; // prevent cloning again
    }

    const scroll = () => {
      if (!el) return;

      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0; // reset to start
      } else {
        el.scrollLeft += speed;
      }

      requestRef.current = requestAnimationFrame(scroll);
    };

    requestRef.current = requestAnimationFrame(scroll);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [ref, speed]);
};

export default useHideScroller;
