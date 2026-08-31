import type { GalleryImage, ServiceSlug } from "./model";

const img = (
  src: string,
  alt: string,
  service: GalleryImage["service"],
  flags: Pick<GalleryImage, "featured" | "home"> = {},
): GalleryImage => ({ src, alt, service, ...flags });

const otto = (n: number, service: GalleryImage["service"] = "brick-restoration"): GalleryImage =>
  img(
    `/assets/pic/otto/otto-${String(n).padStart(2, "0")}.jpg`,
    `Dublin Restoration work ${n}`,
    service,
  );

export const galleryImages: GalleryImage[] = [
  img("/assets/brick-restoration/01.jpg", "Brick restoration work", "brick-restoration"),
  img("/assets/brick-restoration/02-ba-spalling.jpg", "Before and after: spalling brick repair", "brick-restoration", {
    featured: true,
    home: true,
  }),
  img("/assets/brick-restoration/02.jpg", "Brick restoration detail", "brick-restoration"),
  img("/assets/brick-restoration/03-ba-repoint.jpg", "Before and after: brick pillar repointing", "brick-restoration", {
    featured: true,
  }),
  img("/assets/brick-restoration/03.jpg", "Brick restoration close-up", "brick-restoration"),
  img("/assets/brick-restoration/04-ba-crack.jpg", "Before and after: chimney brick restoration", "brick-restoration", {
    featured: true,
  }),
  img("/assets/brick-restoration/04.jpg", "Restored brick panel", "brick-restoration"),
  img("/assets/brick-restoration/05-ba-entrance.jpg", "Before and after: entrance brick restoration", "brick-restoration", {
    featured: true,
    home: true,
  }),
  img("/assets/brick-restoration/05.jpg", "Entrance brickwork", "brick-restoration"),
  img("/assets/brick-restoration/06.jpg", "Brick restoration job", "brick-restoration"),
  img("/assets/brick-restoration/07.jpg", "Completed brick repair", "brick-restoration"),
  img("/assets/brick-restoration/08.jpg", "Brick façade restoration", "brick-restoration"),
  img("/assets/gallery/brick-patch.jpg", "Repaired brick panel on weathered wall", "brick-restoration", {
    featured: true,
    home: true,
  }),
  img("/assets/gallery/spalling-stairs.jpg", "Spalling brick under concrete stairs", "brick-restoration", {
    home: true,
  }),
  img("/assets/gallery/brick-steps.jpg", "New brick and stone entrance steps", "brick-restoration", {
    featured: true,
    home: true,
  }),
  img("/assets/pic/bri/bri-01.jpg", "Stepped crack in red brick wall", "brick-restoration", { featured: true }),
  img("/assets/pic/bri/bri-02.jpg", "Damaged brickwork before repair", "brick-restoration"),
  img("/assets/pic/bri/bri-03.jpg", "Weathered brick needing restoration", "brick-restoration"),
  img("/assets/pic/bri/bri-04.jpg", "Brick crack and failed mortar", "brick-restoration"),

  img("/assets/brick-repointing/dublin-facade-before-after.jpg", "Dublin house brick façade before and after repointing", "brick-repointing", {
    featured: true,
    home: true,
  }),
  img("/assets/brick-repointing/01.jpg", "Georgian brick façade repointing", "brick-repointing", { featured: true }),
  img("/assets/brick-repointing/02.jpg", "Repointing work on scaffolding", "brick-repointing", { featured: true }),
  img("/assets/brick-repointing/13.jpg", "Before and after lime mortar repointing", "brick-repointing", {
    featured: true,
  }),
  img("/assets/brick-repointing/26-sunroom.jpg", "Finished red brick sunroom and chimney", "brick-repointing", {
    featured: true,
  }),
  img("/assets/brick-repointing/27-softwash.jpg", "Brick wall cleaning before and after", "brick-repointing"),
  img("/assets/brick-repointing/28-ba-crack.jpg", "Before and after cracked brick repair", "brick-repointing", {
    featured: true,
  }),
  img("/assets/brick-repointing/29-ba-arch.jpg", "Before and after brick arch restoration", "brick-repointing", {
    featured: true,
    home: true,
  }),
  img("/assets/brick-repointing/30-stonegate.jpg", "Repointed brick panel on weathered façade", "brick-repointing", {
    featured: true,
  }),
  img("/assets/brick-repointing/ba-facade.jpg", "Brick repointing before and after", "brick-repointing", {
    featured: true,
  }),
  img("/assets/brick-repointing/Brick-Work-Before-After.jpg", "Brickwork before and after cleaning and pointing", "brick-repointing", {
    featured: true,
  }),
  img("/assets/brick-repointing/brick02-695x300.jpg", "Repointed brick wall section", "brick-repointing"),
  img("/assets/brick-repointing/images (1).jpg", "Brick pointing detail", "brick-repointing"),
  img("/assets/brick-repointing/stonegate-hero.jpg", "Stonegate brick façade", "brick-repointing"),
  img("/assets/brick-repointing/srvc-commercial-brick-restoration.jpeg", "Commercial brick restoration", "brick-repointing"),
  img("/assets/pic/Brick-Work-Before-After.jpg", "Façade before and after restoration", "brick-repointing"),
  img("/assets/pic/brick02-695x300.jpg", "Pointing patch on brick wall", "brick-repointing"),
  img("/assets/pic/Lime-Mortar-Repointing-in-London.webp", "Lime mortar repointing", "brick-repointing"),
  img("/assets/pic/srvc-commercial-brick-restoration.jpeg", "Commercial brick façade", "brick-repointing"),
  img("/assets/pic/images.jpg", "Brick pointing sample", "brick-repointing"),
  img("/assets/pic/images (1).jpg", "Brickwork sample", "brick-repointing"),

  img("/assets/pressure-washing/pw-1.jpg", "Cleaned brick surface", "chemical-cleaning", { featured: true }),
  img("/assets/pressure-washing/pw-2.jpg", "Brick after washing", "chemical-cleaning", { featured: true }),
  img("/assets/pressure-washing/pw-3.jpg", "Stone before clean", "chemical-cleaning", { featured: true }),
  img("/assets/pressure-washing/pw-4.jpg", "Chemical cleaning result", "chemical-cleaning", { featured: true }),
  img("/assets/pic/google-theme-02.jpg", "Cleaned masonry façade", "chemical-cleaning"),
  img("/assets/pic/google-theme-06.jpg", "Brick after chemical clean", "chemical-cleaning"),

  img("/assets/chimney/ba-stack.jpg", "Chimney before and after", "chimney-restoration", {
    featured: true,
    home: true,
  }),
  img("/assets/chimney/before-after.jpg", "Chimney stack restoration", "chimney-restoration", { featured: true }),
  img("/assets/chimney/cap.jpg", "Chimney with cap", "chimney-restoration", { featured: true }),
  img("/assets/chimney/hero.jpg", "Chimney restoration work", "chimney-restoration", { featured: true }),
  img("/assets/chimney/otto-14.jpg", "Chimney on site", "chimney-restoration"),
  img("/assets/chimney/repair.jpg", "Brick chimney repair", "chimney-restoration", { featured: true }),
  img("/assets/chimney/repairs.jpeg", "Chimney repairs", "chimney-restoration"),
  img("/assets/chimney/roof.jpg", "Chimney on roof", "chimney-restoration", { featured: true }),
  img("/assets/chimney/stack-cowl.png", "Brick chimney stack with cowl on Dublin roof", "chimney-restoration", {
    featured: true,
  }),
  img("/assets/chimney/tuckpoint.jpg", "Chimney tuckpointing", "chimney-restoration", { featured: true }),

  img("/assets/fireplace/fp-1.jpg", "Stone fireplace", "fireplace-remodel", { featured: true }),
  img("/assets/fireplace/fp-2.jpg", "Fireplace remodel", "fireplace-remodel", { featured: true }),
  img("/assets/fireplace/fp-3.jpg", "Fireplace detail", "fireplace-remodel", { featured: true }),
  img("/assets/fireplace/fp-4.jpg", "Custom fireplace", "fireplace-remodel", { featured: true }),

  img("/assets/damp-proofing/damp-1.jpg", "Rising damp treatment", "damp-proofing", { featured: true }),
  img("/assets/damp-proofing/damp-2.jpg", "Damp proofing in Dublin", "damp-proofing", { featured: true }),
  img("/assets/damp-proofing/damp-3.jpg", "Damp wall before treatment", "damp-proofing", { featured: true }),
  img("/assets/damp-proofing/damp-4.jpg", "Damp proof course work", "damp-proofing", { featured: true }),
  img("/assets/damp-proofing/damp-5.jpg", "Internal damp repair", "damp-proofing"),
  img("/assets/damp-proofing/damp-6.jpg", "Damp proofing detail", "damp-proofing"),
  img("/assets/damp-proofing/damp-7.jpg", "Treated damp wall", "damp-proofing"),
  img("/assets/damp-proofing/damp-8.jpg", "Damp proofing finish", "damp-proofing"),

  img("/assets/roofing/roof-1.jpg", "Roof repair in Dublin", "roofing", { featured: true }),
  img("/assets/roofing/roof-2.jpg", "Roof and chimney work", "roofing", { featured: true }),
  img("/assets/roofing/roof-3.jpg", "Roof slates repair", "roofing", { featured: true }),
  img("/assets/roofing/roof-4.jpg", "Roof flashing repair", "roofing", { featured: true }),
  img("/assets/roofing/roof-5.jpg", "Completed roof repair", "roofing"),
  img("/assets/roofing/roof-6.jpg", "Roof maintenance", "roofing"),
  img("/assets/roofing/roof-7.jpg", "Roofing on Dublin home", "roofing"),
  img("/assets/roofing/roof-8.jpg", "Roof repair detail", "roofing"),
  img("/assets/roofing/chimney-1.jpg", "Roof chimney repair", "roofing"),
  img("/assets/roofing/chimney-2.jpg", "Chimney on repaired roof", "roofing"),
  img("/assets/roofing/chimney-3.jpg", "Roof stack work", "roofing"),
  img("/assets/roofing/chimney-4.jpg", "Roofing around chimney", "roofing"),
  img("/assets/roofing/chimney-5.jpg", "Completed chimney on roof", "roofing"),

  img("/assets/flat-roof/flat-1.jpg", "Flat roof waterproofing", "flat-roof", { featured: true }),
  img("/assets/flat-roof/flat-2.jpg", "Flat roof overlay", "flat-roof", { featured: true }),
  img("/assets/flat-roof/flat-3.jpg", "Balcony waterproofing", "flat-roof", { featured: true }),
  img("/assets/flat-roof/flat-4.jpg", "Liquid membrane roof", "flat-roof", { featured: true }),
  img("/assets/flat-roof/flat-5.jpg", "Flat roof repair", "flat-roof"),
  img("/assets/flat-roof/flat-6.jpg", "Felt roof work", "flat-roof"),
  img("/assets/flat-roof/flat-7.jpg", "Single ply roof", "flat-roof"),
  img("/assets/flat-roof/flat-8.jpg", "Completed flat roof", "flat-roof"),
  img("/assets/flat-roof/flat-9.jpg", "Flat roof detail", "flat-roof"),
  img("/assets/flat-roof/flat-10.jpg", "Waterproofed roof deck", "flat-roof"),
  img("/assets/flat-roof/flat-11.jpg", "Flat roofing system", "flat-roof"),
  img("/assets/flat-roof/flat-12.jpg", "Roof membrane finish", "flat-roof"),
  img("/assets/flat-roof/flat-13.jpg", "Commercial flat roof", "flat-roof"),
  img("/assets/flat-roof/flat-14.jpg", "New-build flat roof", "flat-roof"),
  img("/assets/flat-roof/flat-15.jpg", "Flat roof after repair", "flat-roof"),

  img("/assets/pic/otto/otto-01.jpg", "Inspecting brickwork on a Dublin home", "craft"),
  otto(2, "craft"),
  otto(3, "craft"),
  ...[4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32].map(
    (n) => otto(n),
  ),
  ...[38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82].map(
    (n) => otto(n),
  ),
];

export function imagesForService(slug: ServiceSlug, featuredOnly = false) {
  return galleryImages.filter(
    (item) => item.service === slug && (!featuredOnly || item.featured),
  );
}

const homeGalleryOrder: GalleryImage[] = [
  img("/assets/brick-repointing/dublin-facade-before-after.jpg", "Dublin house brick façade before and after repointing", "brick-repointing"),
  img("/assets/brick-restoration/05-ba-entrance.jpg", "Entrance brick restoration", "brick-restoration"),
  img("/assets/chimney/ba-stack.jpg", "Chimney before and after", "chimney-restoration"),
  img("/assets/chimney/stack-cowl.png", "Brick chimney stack with cowl on Dublin roof", "chimney-restoration"),
  img("/assets/brick-repointing/29-ba-arch.jpg", "Brick arch restoration", "brick-repointing"),
  img("/assets/brick-restoration/02-ba-spalling.jpg", "Spalling brick repair", "brick-restoration"),
  img("/assets/gallery/brick-patch.jpg", "Repaired brick panel on weathered wall", "brick-restoration"),
  img("/assets/gallery/spalling-stairs.jpg", "Spalling brick under concrete stairs", "brick-restoration"),
  img("/assets/gallery/brick-steps.jpg", "New brick and stone entrance steps", "brick-restoration"),
];

export function homeGalleryImages() {
  return homeGalleryOrder;
}

export function workImages(filter: ServiceSlug | "all" | "craft") {
  if (filter === "all") return galleryImages.filter((item) => item.service !== "craft");
  return galleryImages.filter((item) => item.service === filter);
}

export function craftImages() {
  return galleryImages.filter((item) => item.service === "craft");
}
