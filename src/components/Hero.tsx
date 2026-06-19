import { motion } from "framer-motion";
import bg from "../assets/Background.png";
import Header from "./Header";

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={bg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-bottom"
      />
      <Header />
      <div className="mx-auto flex min-h-[700px] max-w-4xl flex-col items-center justify-center px-6 pt-40 pb-48 text-center sm:pt-44 sm:pb-56">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-display font-bold leading-tight tracking-tight text-white md:text-[53px] text-[36px]"
        >
          RemoteRecruit's Difference
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="mt-6 text-sm leading-[32px] text-white/85 sm:text-[20px] "
        >
          RemoteRecruit is connecting the world with an easy-to-use platform
          that lets full-time, part-time, and freelance workers showcase their
          talents to businesses that need them. With no paywalls, no fees, and
          no barriers, there's nothing but you, your talents, and the next step
          in your career.
        </motion.p>
      </div>
    </section>
  );
}

export default Hero;
