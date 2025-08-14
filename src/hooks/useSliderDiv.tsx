import { useEffect, useState } from "react";

const useSliderDiv = (length, delay = 3000) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % length);
    }, delay);

    return () => clearInterval(interval);
  }, [length, delay]);

  return currentIndex;
};

export default useSliderDiv;
