import logo from "../assets/Logo.png";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute inset-x-0 top-0 z-20"
    >
      <section className="max-w-[1440px] mx-auto flex items-center justify-between px-6 py-6 sm:px-10">
        <a
          href="#"
          className="flex items-center"
          aria-label="RemoteRecruit home"
        >
          <img
            src={logo}
            alt="RemoteRecruit"
            loading="eager"
            className="h-[50px] w-auto"
          />
        </a>
        <nav className="flex items-center gap-3 sm:gap-6">
          <a
            href="#signin"
            className="text-sm font-medium text-white/90 transition-colors hover:text-white"
          >
            Sign in
          </a>
          <a
            href="#signup"
            className="rounded-[16px] bg-[#4DA8CCE5] px-5 py-2 text-sm font-semibold text-rr-blue shadow-sm transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
          >
            Sign up
          </a>
        </nav>
      </section>
    </motion.header>
  );
}

export default Header;
