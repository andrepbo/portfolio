import { MainSectionProjectProps } from "@/types";
import { Chip, MainSectionProjectButton } from ".";

export default function MainSectionProject({
  description,
  html_url,
  topics,
}: MainSectionProjectProps) {
  return (
    <MainSectionProjectButton html_url={html_url}>
      <h3>{description}</h3>
      <div>
        {topics.length === 0 ? (
          <p>No topics available</p>
        ) : (
          topics.map((topic) => <Chip key={topic} text={topic} />)
        )}
      </div>
    </MainSectionProjectButton>
  );
}
