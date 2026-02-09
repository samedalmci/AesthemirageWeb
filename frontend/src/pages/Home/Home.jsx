import { Link } from "react-router";
import { Fuel, Building2, UtensilsCrossed } from "lucide-react";
import { HeroHome } from "./HeroHome";
import StatisticsHero from "./StatisticsHero";
import CommentHero from "./CommentHero";
import SolutionHero from "./SolutionHero";
import CategoryHero from "./CategoryHero";
import IGHero from "./IGHero";
import FormHero from "./FormHero";

export default function Home() {
  return (
    <div>
      <HeroHome />
      <StatisticsHero />
      <CommentHero />
      <SolutionHero />
      <CategoryHero />
      <IGHero />
      <FormHero />
    </div>
  );
}
