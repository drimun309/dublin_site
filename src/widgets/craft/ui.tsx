import { Reveal } from "@/shared/ui";

export function Craft() {
  return (
    <section className="craft" id="trust">
      <div className="craft-grid">
        <Reveal>
          <div className="craft-visual">
            <img
              src="/assets/brick-repointing/ba-facade.jpg"
              alt="Dublin Restoration brickwork and mortar matching"
              loading="lazy"
              width={600}
              height={750}
              decoding="async"
            />
            <div className="craft-caption">
              <span>Our Standards</span>
              <strong>Restoration Done Properly</strong>
            </div>
          </div>
        </Reveal>

        <div className="craft-copy">
          <Reveal>
            <p className="eyebrow">Why choose us</p>
          </Reveal>
          <Reveal>
            <h2>Honest restoration, transparent process.</h2>
          </Reveal>
          <Reveal>
            <p>
              With 10 years’ experience restoring Dublin façades, we focus on period and modern brickwork. No
              shortcuts, no guesswork — the right materials, proven techniques, and clear communication from
              assessment to handover.
            </p>
          </Reveal>
          <Reveal>
            <ul className="craft-points">
              <li>
                <strong>10 Years in Dublin</strong>
                <span>
                  A decade of brick restoration, lime repointing and façade work across Dublin homes — period and
                  modern.
                </span>
              </li>
              <li>
                <strong>Dedicated In-House Team</strong>
                <span>We never subcontract. Our own trained craftsmen carry out every stage of the project on site.</span>
              </li>
              <li>
                <strong>Traditional Lime &amp; Mortar Matching</strong>
                <span>
                  We match traditional lime and cement mortars to seamlessly blend with your existing brickwork without
                  trapping moisture.
                </span>
              </li>
              <li>
                <strong>Itemised, Fixed Quotations</strong>
                <span>
                  Clear scope of works, exact materials, and transparent pricing. You know exactly what is included
                  before work begins.
                </span>
              </li>
              <li>
                <strong>1-Year Workmanship Warranty</strong>
                <span>
                  We stand behind our craft with a standard 1-year guarantee designed to withstand Irish weather.
                </span>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}