import { HeroTitleProps } from "@/types";

export default function HeroTitle({ text }: HeroTitleProps) {
  return <h1 className="hero__title">{text}</h1>;
}
