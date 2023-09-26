import { HeroImageProps } from "@/types";
import Image from "next/image";

export default function HeroImage({ filename }: HeroImageProps) {
  return (
    <Image
      src={filename}
      width={200}
      height={200}
      alt="Picture of the author"
      className="hero__image"
    />
  );
}
