// src/GAListener.tsx
import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

interface GAListenerProps {
  measurementId: string;
}

export default function GAListener({ measurementId }: GAListenerProps) {
  const location = useRouterState({ select: (state) => state.location });

  useEffect(() => {
    const page_path = location.pathname + location.search;

    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path,
      });
    } else {
      console.warn("gtag is not defined");
    }
  }, [location, measurementId]);

  return null;
}
