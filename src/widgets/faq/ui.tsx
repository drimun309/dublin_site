import { Reveal } from "@/shared/ui";

const items = [
  {
    q: "Why choose Dublin Restoration?",
    a: [
      "Our experience in the industry. Dublin Restoration works period façades across Dublin — pointing, brickwork, damp proofing and cleaning done to last Irish weather.",
      "The repair starts with precise mortar matching so the work reads with the surrounding brick. We’ve practised this so well that most clients can’t pinpoint where the job was done.",
      "These days anyone can put up a website and hire help off the street. We have our own trained crew. We don’t subcontract the work.",
      "We complete and follow through on our projects. We over-communicate and over-deliver.",
    ],
  },
  {
    q: "How long will it take to get my estimate?",
    a: [
      "A thorough proposal that we can stand behind takes time to prepare properly.",
      "We aim to have it in your hands within 24 hours. Often we can price the job on the spot, depending on the repair.",
    ],
  },
  {
    q: "How long will my project take?",
    a: [
      "Once the estimate is approved, we schedule as soon as we can. Lead time depends on materials — if we need a specific mortar or brick, we’ll keep you updated.",
      "Scheduling is typically 1–3 weeks out, depending on the season. Emergency and priority jobs are taken into account.",
      "How long the work itself takes depends on complexity. Most jobs are finished in a day.",
    ],
  },
  {
    q: "Do you offer a warranty?",
    a: [
      "Yes. We offer a standard one-year warranty on our work, so the repair lasts through time and seasonal weather. Extra warranty options are available if you want more cover.",
    ],
  },
];

export function Faq() {
  return (
    <section className="faq" id="faq">
      <div className="section-head">
        <Reveal>
          <h2>Frequently Asked Questions</h2>
        </Reveal>
      </div>
      <div className="faq-list">
        {items.map((item) => (
          <Reveal key={item.q}>
            <details className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">
                {item.a.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
