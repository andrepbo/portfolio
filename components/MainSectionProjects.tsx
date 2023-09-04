import { MainSectionProjectsProps } from "@/types";

export default function MainSectionProjects({
  children,
}: MainSectionProjectsProps) {
  return <div className="main_section__projects">{children}</div>;
}
