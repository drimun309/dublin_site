import { Reveal } from "@/shared/ui";

const items = [
  {
    q: "Why choose Dublin Restoration?",
    a: [
      "We specialise in Dublin period and modern façades — lime repointing, brick restoration, and chemical cleaning designed to withstand Irish weather.",
      "The repair starts with exact mortar and brick matching so the work blends naturally with the surrounding wall.",
      "We have our own trained in-house crew and never subcontract. We communicate clearly and provide transparent, itemised quotes.",
    ],
  },
  {
    q: "Why use traditional lime mortar instead of modern cement?",
    a: [
      "Historic and period Dublin brick needs to breathe. Hard modern Portland cement traps moisture inside older brick, causing the brick faces to crack and spall during frost.",
      "Traditional hydraulic lime mortar allows moisture to evaporate naturally, keeping the wall dry and structurally sound for decades.",
    ],
  },
  {
    q: "What are the signs that my brickwork needs repointing?",
    a: [
      "Common signs include crumbling or powdery mortar, gaps between bricks, damp patches on internal walls, white salt stains (efflorescence), and loose bricks.",
      "Addressing failing mortar early prevents rainwater ingress and costly structural damage to the wall.",
    ],
  },
  {
    q: "Can chemical cleaning damage the brick surface?",
    a: [
      "Not when done properly. Unlike harsh sandblasting or aggressive high-pressure washing which destroys the protective fire-skin of the brick, our gentle chemical treatments lift carbon, soot, and biological growth without etching the masonry.",
    ],
  },
  {
    q: "How long will it take to receive an assessment and estimate?",
    a: [
      "Once you submit the form (especially with photos of the wall), we usually review and provide an initial assessment and estimate within 24 hours.",
      "For complex projects, we arrange a quick on-site assessment to inspect access and structural details.",
    ],
  },
  {
    q: "Do you offer a warranty on your work?",
    a: [
      "Yes. We offer a standard 1-year workmanship warranty on our restoration and repointing work.",
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
