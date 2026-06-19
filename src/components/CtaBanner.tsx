import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import dashboard from "../assets/Group13.png";

export function CtaBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[oklch(0.94_0.04_245)] via-[oklch(0.92_0.06_260)] to-[oklch(0.90_0.07_275)] py-20 md:py-24">
      <motion.span
        aria-hidden="true"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[18%] top-16 h-[53px] w-[53px] rounded-full bg-amber-400"
      />
      <motion.span
        aria-hidden="true"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[20%] bottom-16 h-[29px] w-[29px] rounded-full bg-[#52B4DA]"
      />
      <div className="mx-auto grid max-w-full items-center gap-[16px] md:grid-cols-2">
        <Reveal>
          <img
            src={dashboard}
            alt="RemoteRecruit dashboard preview"
            loading="lazy"
            className="w-full max-w-[1000px] drop-shadow-[0_30px_60px_rgba(38,79,180,0.22)]"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <span className="rounded-full bg-rr-sky/20 text-[16px] font-semibold text-[#1E3E85]">
            Are you ready?
          </span>
          <h2 className="mt-5 font-display text-[44px] font-bold leading-[57px] text-[#11142D] sm:text-4xl md:text-[40px]">
            Help is only a few
            <br />
            clicks away!
          </h2>
          <p className="mt-4 max-w-md text-[18px] leading-[33px] text-rr-muted">
            Click below to get set up super quickly and find help now!
          </p>
          <a
            href="#get-started"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#7ec2dd83] to-[#8fd6f1c2] px-5 py-2.5 text-[16px] font-semibold text-[#1E3E85] transition-all hover:-translate-y-0.5 "
          >
            <span className="flex items-center justify-center -ml-[8px] bg-[#52B4DA] w-[46px] h-[46px] rounded-full ">
              <ArrowRight className="text-[16px] text-white transition-transform group-hover:translate-x-0.5" />
            </span>
            Get Started
          </a>
        </Reveal>
      </div>
    </section>
  );
}
