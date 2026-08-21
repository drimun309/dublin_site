import type { Metadata } from "next";
import { ServicesPage } from "@/views/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Repointing, damp proofing, restoration, brickwork, chimney restoration, fireplace remodel, flat roofs and chemical cleaning in Dublin.",
};

export default function Page() {
  return <ServicesPage />;
}
