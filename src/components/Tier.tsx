import icon from "../assets/Icon.png";
import CheckIcon from "../ui/CheckIcon";
import XIcon from "../ui/XIcon";
import PremiumBadge from "../ui/PremiumBadge";

type Feature = { label: string; enabled: boolean };

function Tier({
  features,
  highlight,
  priceNode,
}: {
  features: Feature[];
  highlight?: boolean;
  priceNode: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-3xl bg-white p-8 shadow-[0_20px_50px_-25px_rgba(30,58,138,0.25)] ring-1 ring-slate-100">
      <div className="flex flex-col md:flex-row items-stretch gap-6">
        <div
          className={
            "relative flex min-h-[180px] min-w-[160px] shrink-0 flex-col items-center justify-center rounded-[16px] text-center " +
            (highlight ? "bg-[#ECF2FF]" : "bg-[#eaf1fb]")
          }
        >
          {highlight && <PremiumBadge icon={icon}> Premium </PremiumBadge>}
          {priceNode}
        </div>
        <ul className="flex flex-1 flex-col justify-center space-y-3.5">
          {features.map((f) => (
            <li
              key={f.label}
              className="flex items-start gap-5 text-[16px] leading-snug font-[500] text-[#323445]"
            >
              {f.enabled ? <CheckIcon /> : <XIcon />}
              <span className={f.enabled ? "" : "text-[#808191]"}>
                {f.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <a
        href="#start"
        className={
          "mt-8 inline-flex items-center justify-center rounded-[24px] py-5 text-[20px] font-[600] transition-all hover:-translate-y-0.5 " +
          (highlight
            ? "bg-gradient-to-r from-[#52B4DA] to-[#1E3E85] text-white shadow-lg hover:shadow-xl"
            : "border-2 border-[#52B4DA] text-[#1E3E85] hover:border-rr-blue hover:bg-rr-blue/5")
        }
      >
        Get Started
      </a>
    </div>
  );
}

export default Tier;
