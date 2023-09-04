import { MainSectionProps } from "@/types";

export default function MainSection({ title, description }: MainSectionProps) {
  return (
    <section className="main_section__container">
      <h2 className="main_section__title">{title}</h2>
      <p className="main_section__description">{description}</p>
    </section>
  );
}
