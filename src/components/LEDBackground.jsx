import { useEffect, useRef } from "react";

function LEDBackground() {
  const containerRef = useRef(null);
  const hoverRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    const isMobile = window.innerWidth < 768;
    const ROWS = isMobile ? 20 : 45;
    const COLS = isMobile ? 40 : 90;

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLS; j++) {
        const led = document.createElement("span");
        led.className = "absolute w-[2px] h-[2px] rounded-full";
        led.style.top = `${(i / ROWS) * 100}%`;
        led.style.left = `${(j / COLS) * 100}%`;
        led.style.backgroundColor = "rgba(0,200,255,0.05)";
        led.style.opacity = "0.9";
        fragment.appendChild(led);
      }
    }

    container.appendChild(fragment);
    const leds = Array.from(container.children);

    const updateLEDs = () => {
      const { x, y } = hoverRef.current;

      leds.forEach((led) => {
        const rect = container.getBoundingClientRect();
        const lx = parseFloat(led.style.left) / 100;
        const ly = parseFloat(led.style.top) / 100;
        const dx = lx - x;
        const dy = ly - y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const intensity = Math.max(0, 1 - dist * 4);
        const degrade = 1 - ly;
        const alpha = 0.04 + intensity * 0.45 * degrade;
        led.style.backgroundColor = `rgba(0,200,255,${alpha})`;
        led.style.boxShadow = `0 0 ${8 + intensity * 25}px rgba(0,200,255,${alpha * 2})`;
        led.style.transform = `scale(${1 + intensity * 0.8})`;
      });

      requestAnimationFrame(updateLEDs);
    };

    requestAnimationFrame(updateLEDs);

    const handleMove = (e) => {
      const rect = container.getBoundingClientRect();
      hoverRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    };

    const handleLeave = () => {
      hoverRef.current = { x: -1, y: -1 };
    };

    container.addEventListener("mousemove", handleMove);
    container.addEventListener("mouseleave", handleLeave);

    return () => {
      container.removeEventListener("mousemove", handleMove);
      container.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 overflow-hidden" />;
}

export default LEDBackground;
