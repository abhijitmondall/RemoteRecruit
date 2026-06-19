import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaSnapchatGhost,
} from "react-icons/fa";
import logo from "../assets/footer-logo.png";
import rrIcon from "../assets/rr_icon.png";
import footerBg from "../assets/Background_footer.png";

const SOCIALS = [
  { Icon: FaFacebookF, label: "Facebook" },
  { Icon: FaInstagram, label: "Instagram" },
  { Icon: FaTwitter, label: "Twitter" },
  { Icon: FaLinkedinIn, label: "LinkedIn" },
  { Icon: FaSnapchatGhost, label: "Snapchat" },
];

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden">
      <img
        src={footerBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="mx-auto md:min-h-[380px] flex container flex-col items-start gap-8 px-6 pb-16 pt-32 sm:px-10 md:flex-row md:items-end md:justify-between">
        <img src={logo} alt="RemoteRecruit" className="h-[74px] w-auto" />
        <div className="flex items-center gap-5  text-white/90">
          {SOCIALS.map(({ Icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="transition-transform hover:-translate-y-0.5 hover:text-white bg-[#3E65A5] rounded-full p-[8px]"
            >
              <Icon className="text-[16px] text-[#DFE1F2]" />
            </a>
          ))}
        </div>
      </div>
      <div className="flex justify-center py-5 border-t border-[#426aaf]">
        <img src={rrIcon} alt="" className="h-[32px] w-auto opacity-90" />
      </div>
    </footer>
  );
}
