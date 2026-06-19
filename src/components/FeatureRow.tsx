import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type FeatureRowProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

export function FeatureRow({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  reverse = false,
}: FeatureRowProps) {
  return (
    <div className="mx-auto grid container items-center gap-10 px-4 py-12 md:grid-cols-2 md:gap-16 md:py-8">
      <Reveal className={reverse ? "md:order-2" : ""} delay={0.05}>
        <span className="inline-flex items-center rounded-[18px] bg-[#C2EEFF] px-4 py-1.5 text-xs font-semibold text-rr-blue">
          {eyebrow}
        </span>
        <h2 className="mt-5 font-display md:text-[40px] text-[32px] font-[500] leading-[52px] text-[#11142D]">
          {title}
        </h2>
        <p className="mt-5 max-w-md font-[400] text-[19px] leading-[35px] text-[#11142DA4]">
          {description}
        </p>
      </Reveal>
      <Reveal className={reverse ? "md:order-1" : ""} delay={0.15}>
        <div className="flex items-center justify-center">
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            decoding="async"
            className="w-full max-w-[455px] drop-shadow-[0_30px_60px_rgba(38,79,180,0.15)]"
          />
        </div>
      </Reveal>
    </div>
  );
}
