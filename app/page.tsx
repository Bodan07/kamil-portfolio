"use client";

import Portfolio from "../portfolio";
import PortfolioRebuild from "@/components/portfolio-rebuild";
import { useState } from "react";

// Change this value to "original" to restore the first portfolio design.
const PORTFOLIO_VERSION: "original" | "rebuild" = "rebuild";

export default function Page() {
  const [portfolioVersion, setPortfolioVersion] = useState(PORTFOLIO_VERSION);

  return portfolioVersion === "rebuild" ? (
    <PortfolioRebuild
      onSwitchOriginal={() => setPortfolioVersion("original")}
    />
  ) : (
    <Portfolio />
  );
}
