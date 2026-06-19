import { Reveal } from "./Reveal";
import Tier from "./Tier";

type Feature = { label: string; enabled: boolean };

const FREE: Feature[] = [
  { label: "1 Active Job", enabled: true },
  { label: "Basic List Placement", enabled: true },
  { label: "Unlimited Job Applicants", enabled: false },
  { label: "Invite Anyone to Apply to Your Jobs", enabled: false },
];
const PREMIUM: Feature[] = [
  { label: "Unlimited Job Posts", enabled: true },
  { label: "Instant Job Post Approval", enabled: true },
  { label: "Premium List Placement", enabled: true },
  { label: "Unlimited Job Applicants", enabled: true },
];

function Pricing() {
  return (
    <section className="relative bg-background pb-40 pt-8 md:-mb-[300px] z-50">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="text-center font-display md:text-[40px] text-[32px] font-[600] text-[#11142D]">
            Help Is One Click Away
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <Reveal delay={0.05}>
            <Tier
              features={FREE}
              priceNode={
                <>
                  <div className="font-display text-[32px] font-[600] leading-[45px] text-[#52B4DA]">
                    Free
                  </div>
                  <div className="mt-1 text-[20px] font-[500] text-[#11142D65]">
                    Basic
                  </div>
                </>
              }
            />
          </Reveal>
          <Reveal delay={0.15}>
            <Tier
              highlight
              features={PREMIUM}
              priceNode={
                <>
                  <div className="font-display text-[32px] font-[600] leading-[45px] text-[#52B4DA]">
                    $79.99
                  </div>
                  <div className="mt-1 text-[20px] font-[500] text-[#11142D65]">
                    Per Month
                  </div>
                </>
              }
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
