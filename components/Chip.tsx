import { ChipProps } from "@/types";

export default function Chip({ text }: ChipProps) {
  return <div className="chip">{text}</div>;
}
