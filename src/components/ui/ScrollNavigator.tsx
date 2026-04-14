import { useEffect, useMemo, useState } from "react";
import "../../styles/ScrollNavigator.css";

export default function ScrollNavigator() {
  const [scrollY, setScrollY] = useState(0);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrollY(currentY);
      setShowControls(currentY > 180);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isNearBottom = useMemo(() => {
    const pageHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    return scrollY + viewportHeight >= pageHeight - 220;
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollDown = () => {
    const nextY = Math.min(
      window.scrollY + window.innerHeight * 0.9,
      document.documentElement.scrollHeight,
    );

    window.scrollTo({
      top: nextY,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  if (!showControls) return null;

  return (
    <div className="scrollNavigator" aria-label="Page scroll controls">
      <button
        type="button"
        className="scrollNavigator__button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Go to top"
      >
        ↑
      </button>

      <button
        type="button"
        className="scrollNavigator__button"
        onClick={isNearBottom ? scrollToTop : scrollDown}
        aria-label={isNearBottom ? "Scroll to top" : "Scroll down"}
        title={isNearBottom ? "Go to top" : "Go down"}
      >
        {isNearBottom ? "↺" : "↓"}
      </button>

      <button
        type="button"
        className="scrollNavigator__button scrollNavigator__button--ghost"
        onClick={scrollToBottom}
        aria-label="Scroll to bottom"
        title="Go to bottom"
      >
        ⇣
      </button>
    </div>
  );
}
