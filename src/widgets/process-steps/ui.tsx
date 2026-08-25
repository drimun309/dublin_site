"use client";

import { useState } from "react";
import { Reveal } from "@/shared/ui";

const steps = [
  {
    num: "01",
    title: "Initial Consultation",
    body: <p>You tell us what’s happening, send photos, and describe the problem.</p>,
  },
  {
    num: "02",
    title: "Site Assessment",
    body: (
      <>
        <p>The crew visits the property and inspects:</p>
        <ul>
          <li>brickwork</li>
          <li>mortar joints</li>
          <li>cracks</li>
          <li>chimney</li>
          <li>parapets</li>
          <li>gutters</li>
          <li>areas of water ingress</li>
          <li>previous repairs</li>
          <li>access requirements</li>
        </ul>
      </>
    ),
  },
  {
    num: "03",
    title: "Assessment & Diagnosis",
    body: <p>We establish what’s damaged → why → what actually needs doing.</p>,
  },
  {
    num: "04",
    title: "Detailed Quotation",
    body: (
      <>
        <p>Not just a figure — a full quote:</p>
        <ul>
          <li>scope of works</li>
          <li>materials</li>
          <li>areas</li>
          <li>methodology</li>
          <li>access</li>
          <li>exclusions</li>
          <li>expected timescale</li>
        </ul>
      </>
    ),
  },
  {
    num: "05",
    title: "Restoration",
    body: <p>The work is carried out to the agreed method.</p>,
  },
  {
    num: "06",
    title: "Quality Inspection",
    body: (
      <>
        <p>We check:</p>
        <ul>
          <li>finish</li>
          <li>joint profile</li>
          <li>mortar consistency</li>
          <li>brick repairs</li>
          <li>cleanliness</li>
          <li>final details</li>
        </ul>
      </>
    ),
  },
  {
    num: "07",
    title: "Handover",
    body: <p>You get photos of the completed works and recommendations for ongoing maintenance.</p>,
  },
];

export function ProcessSteps() {
  const [open, setOpen] = useState(0);

  return (
    <section className="process" id="process">
      <div className="section-head services-head">
        <div className="services-head-copy">
          <Reveal>
            <p className="eyebrow">How we work</p>
          </Reveal>
          <Reveal>
            <h2>From first call to handover.</h2>
          </Reveal>
        </div>
      </div>
      <div className="process-steps">
        {steps.map((step, index) => {
          const isOpen = open === index;
          return (
            <Reveal key={step.num}>
              <div className={`process-step${isOpen ? " is-open" : ""}`}>
                <button
                  type="button"
                  className="process-step-trigger"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  <span className="process-step-num">{step.num}</span>
                  <span className="process-step-title">{step.title}</span>
                  <span className="process-step-icon" aria-hidden="true">
                    +
                  </span>
                </button>
                <div className="process-step-body">
                  <div className="process-step-text">{step.body}</div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
