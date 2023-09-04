import { HeroButtonProps } from "@/types";

export default function HeroButton({ href, icon, children }: HeroButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hero__button"
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </a>
  );
}
