import { FeatureRow } from "../components/FeatureRow";
import Hero from "../components/Hero";
import group136 from "../assets/Group136.png";
import groupL from "../assets/Group_l.png";
import groupRight from "../assets/Group_right.png";
import { CtaBanner } from "../components/CtaBanner";
import FAQ from "../components/FAQ";

function Landing() {
  return (
    <>
      <Hero />
      <FeatureRow
        eyebrow="Global Reach"
        title={
          <>
            The First Fully Global Job
            <br />
            Board, Anywhere, Ever
          </>
        }
        description="RemoteRecruit connects candidates with opportunities around the world. With today's remote-first workforce, you need to be able to find the best jobs and the best people for them, wherever they may be."
        image={group136}
        imageAlt="Global job board preview with candidate cards"
      />

      <FeatureRow
        reverse
        eyebrow="Activity For Free"
        title={<>Fee-Free Forever</>}
        description="We don't charge you fees and we won't bait you with paywalls. We're the bridge that connects job opportunities with the best candidates, with no middleman involved."
        image={groupL}
        imageAlt="Premium membership tier card preview"
      />

      <FeatureRow
        eyebrow="Custom Profile"
        title={<>Showcase Your Talents</>}
        description="Personalize your profile with everything that makes you unique. Add an introductory video and other media for a personal touch that stands out to employers and candidates."
        image={groupRight}
        imageAlt="Showcase your talents profile preview"
      />

      <CtaBanner />
      <FAQ />
    </>
  );
}

export default Landing;
