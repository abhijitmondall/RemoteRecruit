import { Reveal } from "./Reveal";

const FAQS = [
  {
    q: "Do I have to sign a long-term contract?",
    a: "Actually beard single-origin coffee twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui Selvage jean shorts 80's, Vice American Apparel try-hard food truck Shoreditch fap omo Wes Anderson Art party.",
  },
  {
    q: "Can I pay for a whole year?",
    a: "Actually beard single-origin coffee twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui Selvage jean shorts 80's, Vice American Apparel try-hard food truck Shoreditch fap omo Wes Anderson Art party.",
  },
  {
    q: "What if I need help?",
    a: "Actually beard single-origin coffee twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui Selvage jean shorts 80's, Vice American Apparel try-hard food truck Shoreditch fap omo Wes Anderson Art party.",
  },
];

function FAQ() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto container px-6 md:px-[60px]">
        <Reveal>
          <h2 className="font-display text-[40px] font-[500] text-[#11142D] sm:text-4xl">
            Common Questions
          </h2>
        </Reveal>
        <div className="mt-10 space-y-8">
          {FAQS.map((item, i) => (
            <Reveal key={item.q} delay={0.05 * i}>
              <div>
                <h3 className="text-[19px] font-[500] text-[#11142D]">
                  {item.q}
                </h3>
                <p className="mt-3 text-[16px] font-[400] leading-[35px] text-[#6D6E7A">
                  {item.a}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <a
            href="#more"
            className="mt-12 inline-flex items-center rounded-[16px] border border-[#53B4DAB1] bg-white px-5 py-3 text-[16px] font-semibold text-[#1E3E85] shadow-sm transition-all hover:-translate-y-0.5 hover:border-rr-blue hover:shadow-md"
          >
            More Questions
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default FAQ;
