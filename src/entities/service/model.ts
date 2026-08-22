export const serviceSlugs = [
  "brick-restoration",
  "brick-repointing",
  "chemical-cleaning",
  "chimney-restoration",
  "fireplace-remodel",
  "damp-proofing",
  "roofing",
  "flat-roof",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export type GalleryImage = {
  src: string;
  alt: string;
  service: ServiceSlug | "craft";
  featured?: boolean;
  home?: boolean;
};

export type Service = {
  slug: ServiceSlug;
  title: string;
  shortTitle: string;
  eyebrow: string;
  summary: string;
  paragraphs: string[];
  hero: string;
  heroAlt: string;
  homeCard?: {
    src: string;
    alt: string;
    summary: string;
  };
};

export const services: Service[] = [
  {
    slug: "brick-restoration",
    title: "Brick Restoration",
    shortTitle: "Brick Restoration",
    eyebrow: "Stone & brick repair",
    summary:
      "Cracked sills, worn cornices, loose bricks. We repair and reinstate damaged brickwork so the façade reads as one piece again.",
    paragraphs: [
      "Cracked sills, worn cornices, loose bricks and bulging panels don’t need a full rebuild. We repair and reinstate damaged brick and stonework so the façade reads as one piece again.",
      "We favour traditional materials (Bath Premix, Portland Premix, York Stone) matched to the building — sympathetic repairs that last Irish weather, not a cheap patch that fails next winter.",
    ],
    hero: "/assets/brick-restoration/05-ba-entrance.jpg",
    heroAlt: "Before and after brick restoration at entrance",
    homeCard: {
      src: "/assets/brick-restoration/05-ba-entrance.jpg",
      alt: "Brick Restoration",
      summary:
        "Cracked sills, worn cornices, loose bricks. We repair and reinstate damaged brickwork so the façade reads as one piece again.",
    },
  },
  {
    slug: "brick-repointing",
    title: "Brick Repointing",
    shortTitle: "Brick Repointing",
    eyebrow: "Mortar joints done properly",
    summary:
      "Failed mortar lets water into the wall. We rake out and repoint with a mix matched to your façade — weather-tight and tidy.",
    paragraphs: [
      "Open joints let rain into the wall. We rake out failed mortar and repoint with a mix suited to your period façade — colour-matched, weather-tight, and finished clean.",
      "Wrong cement mixes trap moisture and damage older brick. We use traditional materials so the joint works with the building, not against it.",
    ],
    hero: "/assets/brick-repointing/30-stonegate.jpg",
    heroAlt: "Brick façade with fresh repointing patch",
    homeCard: {
      src: "/assets/brick-repointing/ba-facade.jpg",
      alt: "Brick repointing before and after",
      summary:
        "Failed mortar lets water into the wall. We rake out and repoint with a mix matched to your façade — weather-tight and tidy.",
    },
  },
  {
    slug: "chemical-cleaning",
    title: "Brick and Stone Chemical Cleaning",
    shortTitle: "Chemical Cleaning",
    eyebrow: "Façade cleaning",
    summary:
      "Pollution, algae and soot dull brick and stone. Careful chemical cleaning brings the façade back without chewing the surface.",
    paragraphs: [
      "Pollution, algae and soot make brick look tired and hold moisture against the wall. We clean façades, floors and masonry with the right chemistry for the stone — not a blast that scars the surface.",
      "Domestic or commercial: restore curb appeal and stop dirt accelerating decay.",
    ],
    hero: "/assets/pressure-washing/pw-1.jpg",
    heroAlt: "Brick and Stone Chemical Cleaning",
    homeCard: {
      src: "/assets/pressure-washing/pw-1.jpg",
      alt: "Brick and Stone Chemical Cleaning",
      summary:
        "Pollution, algae and soot dull brick and stone. Careful chemical cleaning brings the façade back without chewing the surface.",
    },
  },
  {
    slug: "chimney-restoration",
    title: "Chimney Restoration",
    shortTitle: "Chimney",
    eyebrow: "Repair & rebuild",
    summary:
      "Leaning stacks, loose bricks and lost mortar. We repair, tuckpoint or rebuild chimneys matched to your façade.",
    paragraphs: [
      "Leaning stacks, loose bricks, lost mortar and leaking pots are common on Dublin roofs. We repair, tuckpoint or rebuild chimneys with mortar colour-matched to your brickwork.",
      "We also demolish and seal off unused chimneys, and repair fireboxes indoors when the hearth needs the same care as the stack outside.",
    ],
    hero: "/assets/chimney/ba-stack.jpg",
    heroAlt: "Chimney restoration before and after",
    homeCard: {
      src: "/assets/chimney/ba-stack.jpg",
      alt: "Chimney restoration before and after",
      summary:
        "Leaning stacks, loose bricks and lost mortar. We repair, tuckpoint or rebuild chimneys matched to your façade.",
    },
  },
  {
    slug: "fireplace-remodel",
    title: "Fireplace Remodel",
    shortTitle: "Fireplace",
    eyebrow: "Brick & stone hearths",
    summary:
      "An outdated or damaged fireplace pulls the room down. We remodel in brick or stone so the hearth fits how you live now.",
    paragraphs: [
      "An outdated or damaged fireplace pulls the room down. We remodel in brick or stone — new colour, new materials, features added or removed — so the hearth fits how you live now.",
      "Bring a photo of the look you want; we’ll price what’s feasible and build it cleanly in your home.",
    ],
    hero: "/assets/fireplace/fp-1.jpg",
    heroAlt: "Fireplace Remodel",
  },
  {
    slug: "damp-proofing",
    title: "Damp Proofing",
    shortTitle: "Damp Proofing",
    eyebrow: "Rising damp treatment",
    summary:
      "Rising damp and bridged DPCs wreck plaster and timber. We diagnose the path of water and install a proper damp-proof course.",
    paragraphs: [
      "Most wall materials are porous. Water in contact with the ground travels up the wall by capillarity — rising damp — until evaporation balances the intake. You often see a tide mark, salts and perished plaster below about a metre.",
      "A damp-proof course is useless if water can bypass it. Bridging is common when outside ground sits above the DPC, or when plaster and render run down over the line.",
      "We treat rising damp with chemical or mortar injection suited to the wall, then strip salt-contaminated plaster and replaster so the repair lasts — not just a hole in the brick and a promise.",
    ],
    hero: "/assets/damp-proofing/damp-2.jpg",
    heroAlt: "Damp proofing treatment in Dublin",
  },
  {
    slug: "roofing",
    title: "Roofing",
    shortTitle: "Roofing",
    eyebrow: "Roof & chimney repair",
    summary:
      "Small leaks become structural problems. We repair Dublin roofs properly — slates, flashings, chimneys — not a patch that fails next storm.",
    paragraphs: [
      "Roof repairs are easy to put off. A tiny leak and a stain on the ceiling can work into the structure and cost far more later.",
      "We find the path of water and fix it so it does not return. No quick-fixes: sound repairs on the roof you have, whether the issue is slates, flashings, valleys or the chimney stack.",
    ],
    hero: "/assets/roofing/roof-1.jpg",
    heroAlt: "Roof repair work in Dublin",
  },
  {
    slug: "flat-roof",
    title: "Flat Roof",
    shortTitle: "Flat Roof",
    eyebrow: "Waterproofing systems",
    summary:
      "Felt, single-ply and liquid membranes for roofs, balconies and gutters — inspected, specified and laid to last.",
    paragraphs: [
      "We waterproof new and existing flat roofs and balconies with liquid systems that cure to a seamless, flexible membrane — useful in Irish weather and on awkward details.",
      "Felt and single-ply roofs from garden rooms to commercial decks get a proper inspection first, then a repair or overlay specified for the damage you actually have.",
    ],
    hero: "/assets/flat-roof/flat-1.jpg",
    heroAlt: "Flat roof waterproofing in Dublin",
  },
];

export const servicesPageSlugs: ServiceSlug[] = [
  "brick-restoration",
  "brick-repointing",
  "chemical-cleaning",
  "chimney-restoration",
  "fireplace-remodel",
];

export const formServiceTitles = [
  "Brick Repointing",
  "Brick Restoration",
  "Chemical Cleaning",
  "Chimney Restoration",
  "Fireplace Remodel",
] as const;

export const homeServiceSlugs: ServiceSlug[] = [
  "brick-repointing",
  "brick-restoration",
  "chimney-restoration",
  "chemical-cleaning",
];

export const extraServiceSlugs: ServiceSlug[] = [
  "damp-proofing",
  "roofing",
  "flat-roof",
];

export function getServicesPageServices() {
  return servicesPageSlugs.map((slug) => getService(slug));
}

export function getService(slug: ServiceSlug) {
  const service = services.find((item) => item.slug === slug);
  if (!service) throw new Error(`Unknown service: ${slug}`);
  return service;
}
