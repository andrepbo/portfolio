import { HeroSubtitleProps } from "@/types";

export default function HeroSubtitle({ text }: HeroSubtitleProps) {
  return <p className="hero__subtitle">{text}</p>;
}
