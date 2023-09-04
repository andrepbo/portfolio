import { HeroContentProps } from "@/types";

export default function HeroContent({ children }: HeroContentProps) {
  return <div className="hero__content">{children}</div>;
}
