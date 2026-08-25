import type { ServiceSlug } from "./model";

export const seoServiceSlugs = [
  "brick-restoration",
  "brick-repointing",
  "chemical-cleaning",
  "chimney-restoration",
] as const;

export type SeoServiceSlug = (typeof seoServiceSlugs)[number];

export type ServiceLanding = {
  slug: SeoServiceSlug;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  problem: {
    title: string;
    intro: string;
    signs: string[];
  };
  process: {
    title: string;
    steps: { title: string; body: string }[];
  };
  materials: {
    title: string;
    intro: string;
    items: string[];
  };
  faq: { q: string; a: string }[];
};

export const serviceLandings: ServiceLanding[] = [
  {
    slug: "brick-restoration",
    metaTitle: "Brick Restoration Dublin",
    metaDescription:
      "Specialist brick restoration in Dublin. Repair cracked sills, spalled brick, loose panels and worn stonework with matched materials and a free assessment.",
    h1: "Brick Restoration in Dublin",
    lead:
      "Cracked sills, spalled faces and loose brick panels let water into the wall. We repair and reinstate damaged brickwork so the façade reads as one piece again.",
    problem: {
      title: "When brick restoration is needed",
      intro:
        "Dublin period and modern brick façades fail gradually — frost, moisture and past cement repairs often cause more damage than the original problem.",
      signs: [
        "Cracked or spalling brick faces, especially after hard cement pointing",
        "Loose, hollow or bulging brick panels",
        "Worn window sills, cornices or decorative stonework",
        "Previous patch repairs that no longer match the surrounding wall",
      ],
    },
    process: {
      title: "How we restore brickwork",
      steps: [
        {
          title: "Assessment",
          body: "We inspect the wall, identify failed areas, and advise whether local repair or wider reinstatement is needed.",
        },
        {
          title: "Material matching",
          body: "Brick type, mortar colour and finish are matched to the existing façade before work starts.",
        },
        {
          title: "Sympathetic repair",
          body: "Damaged units are cut out, joints prepared, and repairs rebuilt with methods suited to the building age.",
        },
        {
          title: "Finish & handover",
          body: "Joints are finished cleanly, the area is left tidy, and you receive photos plus maintenance advice.",
        },
      ],
    },
    materials: {
      title: "Materials we use",
      intro: "Repairs are specified for the wall — not a generic bag mix that fails next winter.",
      items: [
        "Traditional lime and cement mortars matched to period brickwork",
        "Replacement brick and stone selected to blend with the existing façade",
        "Breathable mixes that work with older Dublin walls",
        "Itemised scope so you know exactly what is included",
      ],
    },
    faq: [
      {
        q: "Can you repair brick without replacing the whole wall?",
        a: "Often yes. Localised restoration is usually enough when damage is caught early and the surrounding brick is sound.",
      },
      {
        q: "Will the repair be visible?",
        a: "We match mortar and brick as closely as possible so the work blends naturally with the surrounding wall.",
      },
      {
        q: "Do you work on period Dublin homes?",
        a: "Yes. We regularly restore Victorian and Edwardian brick façades across Dublin using sympathetic materials and methods.",
      },
    ],
  },
  {
    slug: "brick-repointing",
    metaTitle: "Brick Repointing Dublin",
    metaDescription:
      "Professional brick repointing in Dublin. Traditional lime mortar, colour-matched joints and weather-tight finishes for period and modern homes.",
    h1: "Brick Repointing in Dublin",
    lead:
      "Open mortar joints let rain into the wall. We rake out failed pointing and repoint with a mix matched to your façade — weather-tight, tidy, and built to last Irish weather.",
    problem: {
      title: "Signs your brickwork needs repointing",
      intro:
        "Mortar is the weak point in most brick walls. Once it fails, water enters the structure and frost damage accelerates.",
      signs: [
        "Crumbling, powdery or missing mortar joints",
        "Gaps you can fit a knife or finger into",
        "Damp patches or salt staining on internal walls",
        "Hard cement pointing on older brick that is cracking the faces",
      ],
    },
    process: {
      title: "Our repointing process",
      steps: [
        {
          title: "Joint inspection",
          body: "We assess mortar depth, brick type and any previous repairs before quoting.",
        },
        {
          title: "Raking out",
          body: "Failed mortar is removed to a consistent depth without damaging the brick arrises.",
        },
        {
          title: "Mortar matching",
          body: "We mix lime or cement mortars to suit the building age and match the existing colour.",
        },
        {
          title: "Pointing & finish",
          body: "Joints are filled, compacted and finished with a profile suited to the façade.",
        },
      ],
    },
    materials: {
      title: "Lime vs cement mortar",
      intro: "The wrong mortar traps moisture. We specify the mix that suits your wall.",
      items: [
        "Traditional hydraulic lime mortars for period Dublin brick",
        "Colour-matched sand and lime blends for visible façades",
        "Appropriate cement-lime mixes where the building requires it",
        "No hard modern cement on soft historic brick unless structurally required",
      ],
    },
    faq: [
      {
        q: "Why is lime mortar better for older brick?",
        a: "Lime allows the wall to breathe. Hard cement traps moisture, which can cause brick faces to crack and spall in frost.",
      },
      {
        q: "How long does repointing last?",
        a: "With the correct mix and preparation, quality repointing should last decades — not just a few seasons.",
      },
      {
        q: "Can you repoint part of a wall only?",
        a: "Yes. We can work in sections, matching existing joints so repairs do not stand out.",
      },
    ],
  },
  {
    slug: "chemical-cleaning",
    metaTitle: "Brick & Stone Chemical Cleaning Dublin",
    metaDescription:
      "Gentle brick and stone chemical cleaning in Dublin. Remove pollution, algae and soot without damaging the masonry surface.",
    h1: "Brick & Stone Chemical Cleaning in Dublin",
    lead:
      "Pollution, algae and soot make brick look tired and hold moisture against the wall. We clean façades with the right chemistry — not a blast that scars the surface.",
    problem: {
      title: "When chemical cleaning helps",
      intro:
        "Built-up dirt holds moisture and hides defects. Cleaning restores curb appeal and makes underlying brick problems visible before they worsen.",
      signs: [
        "Black carbon staining or pollution on the upper façade",
        "Green algae or biological growth on north-facing walls",
        "Paint splashes, efflorescence or general grime",
        "A dull, uneven finish that makes the property look neglected",
      ],
    },
    process: {
      title: "Our cleaning process",
      steps: [
        {
          title: "Surface test",
          body: "We test a small area first to confirm the right chemistry for your brick or stone.",
        },
        {
          title: "Protection & prep",
          body: "Windows, doors and planted areas are protected before treatment begins.",
        },
        {
          title: "Chemical application",
          body: "Cleaning agents are applied and dwell time controlled to lift dirt without etching the masonry.",
        },
        {
          title: "Low-pressure rinse",
          body: "The façade is rinsed gently and inspected before handover.",
        },
      ],
    },
    materials: {
      title: "Methods & materials",
      intro: "We choose the lightest effective treatment for the substrate.",
      items: [
        "Purpose-formulated masonry cleaners — not generic pressure washing",
        "Low-pressure rinse to protect the brick fire-skin",
        "Biocide treatment where algae or moss is present",
        "Suitable methods for brick, stone and rendered details",
      ],
    },
    faq: [
      {
        q: "Will chemical cleaning damage my brick?",
        a: "Not when done properly. Unlike sandblasting or aggressive jet washing, our process lifts dirt without chewing the face of the brick.",
      },
      {
        q: "Is this the same as pressure washing?",
        a: "No. Chemical cleaning treats the surface first, then uses controlled low-pressure rinsing rather than force alone.",
      },
      {
        q: "Can you clean before repointing or restoration?",
        a: "Yes. Cleaning first often gives a clearer picture of the brick condition and improves the final result.",
      },
    ],
  },
  {
    slug: "chimney-restoration",
    metaTitle: "Chimney Restoration Dublin",
    metaDescription:
      "Chimney repair and restoration in Dublin. Fix leaning stacks, loose bricks, failed mortar and leaking pots with matched brickwork.",
    h1: "Chimney Restoration in Dublin",
    lead:
      "Leaning stacks, loose bricks and lost mortar are common on Dublin roofs. We repair, tuckpoint or rebuild chimneys with mortar and brick matched to your façade.",
    problem: {
      title: "Common chimney problems",
      intro:
        "Chimneys sit in the worst weather on the roof. Small defects quickly become leaks, loose pots and unsafe stacks.",
      signs: [
        "Loose or missing pots and flaunching",
        "Open mortar joints or spalled brick on the stack",
        "Leaning chimney or visible movement",
        "Damp or staining around the fireplace or roof junction",
      ],
    },
    process: {
      title: "How we restore chimneys",
      steps: [
        {
          title: "Roof inspection",
          body: "We inspect the stack, flashings and pots from safe access and identify the source of failure.",
        },
        {
          title: "Scope & quote",
          body: "You receive a clear quote covering rebuild, repointing, pot replacement or sealing as needed.",
        },
        {
          title: "Repair or rebuild",
          body: "Work is carried out with matched brick and mortar, including lead or flashing details where required.",
        },
        {
          title: "Final check",
          body: "The stack is left weather-tight, tidy, and photographed on completion.",
        },
      ],
    },
    materials: {
      title: "Repair standards",
      intro: "Chimney work must survive wind, rain and frost at roof level.",
      items: [
        "Mortar colour-matched to existing chimney brickwork",
        "Replacement pots and flaunching where required",
        "Lead and flashing repairs coordinated with the stack work",
        "Option to seal unused chimneys properly when no longer in use",
      ],
    },
    faq: [
      {
        q: "Can you rebuild part of a chimney stack?",
        a: "Yes. Localised rebuilds are common when only the upper courses or one elevation has failed.",
      },
      {
        q: "Should I repair or remove an unused chimney?",
        a: "We can advise on-site. Proper sealing is often better than leaving a failing stack in place.",
      },
      {
        q: "Do you repair indoor fireboxes too?",
        a: "Yes. We can repair fireboxes and hearths when the indoor work needs the same care as the stack outside.",
      },
    ],
  },
];

export function isSeoServiceSlug(slug: string): slug is SeoServiceSlug {
  return (seoServiceSlugs as readonly string[]).includes(slug);
}

export function getServiceLanding(slug: SeoServiceSlug) {
  const landing = serviceLandings.find((item) => item.slug === slug);
  if (!landing) throw new Error(`Unknown landing: ${slug}`);
  return landing;
}

export function getServiceLandingBySlug(slug: ServiceSlug) {
  if (!isSeoServiceSlug(slug)) return null;
  return getServiceLanding(slug);
}
