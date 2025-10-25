import { useEffect, useState } from "react";

function LEDBackground() {
  const [leds, setLeds] = useState([]);
  const [hover, setHover] = useState({ x: null, y: null });

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const ROWS = isMobile ? 20 : 45;
    const COLS = isMobile ? 40 : 90;

    const temp = [];
    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLS; j++) {
        temp.push({ x: j / COLS, y: i / ROWS });
      }
    }
    setLeds(temp);

    const handleResize = () => {
      const newIsMobile = window.innerWidth < 768;
      const newRows = newIsMobile ? 20 : 45;
      const newCols = newIsMobile ? 40 : 90;
      const newTemp = [];
      for (let i = 0; i < newRows; i++) {
        for (let j = 0; j < newCols; j++) {
          newTemp.push({ x: j / newCols, y: i / newRows });
        }
      }
      setLeds(newTemp);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHover({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHover({ x: null, y: null })}
    >
      {leds.map((led, idx) => {
        // Calcula a intensidade de brilho pelo mouse
        let intensity = 0;
        if (hover.x !== null && hover.y !== null) {
          const dx = led.x - hover.x;
          const dy = led.y - hover.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          intensity = Math.max(0, 1 - dist * 4);
        }

        // Aplica leve gradiente (mais forte no topo)
        const degradeFactor = 1 - led.y;
        const alpha = 0.04 + intensity * 0.45 * degradeFactor;

        // Cor e brilho esfumaçado
        const baseColor = `rgba(0, 200, 255, ${alpha})`;
        const glow = `0 0 ${8 + intensity * 25}px rgba(0, 200, 255, ${alpha * 2})`;

        return (
          <span
            key={idx}
            className="absolute w-[2px] h-[2px] rounded-full transition-all duration-300"
            style={{
              top: `${led.y * 100}%`,
              left: `${led.x * 100}%`,
              backgroundColor: baseColor,
              boxShadow: glow, // efeito esfumaçado
              opacity: 0.9,
              transform: `scale(${1 + intensity * 0.8})`, // leve expansão ao acender
            }}
          ></span>
        );
      })}
    </div>
  );
}

export default LEDBackground;
