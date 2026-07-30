"use client";

import { Dithering } from "@paper-design/shaders-react";
import { useEffect, useState } from "react";

type PortfolioHeroShaderProps = {
  className?: string;
};

export default function PortfolioHeroShader({
  className,
}: PortfolioHeroShaderProps) {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(media.matches);

    updatePreference();
    media.addEventListener("change", updatePreference);
    return () => media.removeEventListener("change", updatePreference);
  }, []);

  return (
    <div className={className} aria-hidden="true">
      <Dithering
        style={{ height: "100%", width: "100%" }}
        colorBack="#000000"
        colorFront="#ff4fa3"
        shape="simplex"
        type="8x8"
        pxSize={4}
        offsetX={0.12}
        offsetY={-0.08}
        scale={1}
        rotation={11}
        speed={reduceMotion ? 0 : 0.16}
      />
    </div>
  );
}
