import { HeroButtonsProps } from "@/types";

export default function HeroButtons({ children }: HeroButtonsProps) {
  return <div className="hero__buttons">{children}</div>;
}
