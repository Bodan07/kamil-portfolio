import Portfolio from "../portfolio";
import PortfolioRebuild from "@/components/portfolio-rebuild";

// Change this value to "original" to restore the first portfolio design.
const PORTFOLIO_VERSION: "original" | "rebuild" = "rebuild";

export default function Page() {
  return PORTFOLIO_VERSION === "rebuild" ? <PortfolioRebuild /> : <Portfolio />;
}
