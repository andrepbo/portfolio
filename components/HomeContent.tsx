import { HomeContentProps } from "@/types";

export default function HomeContent({ children }: HomeContentProps) {
  return <div className="home__content">{children}</div>;
}
