import { MainSectionProjectButtonProps } from "@/types";

export default function MainSectionProjectButton({
  html_url,
  children,
}: MainSectionProjectButtonProps) {
  return (
    <a
      href={html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="main_section__project"
    >
      <span>{children}</span>
    </a>
  );
}
