import type { Metadata } from "next";
import { WorkPage } from "@/views/work";

export const metadata: Metadata = {
  title: "Our work",
  description: "Before and after gallery of brick restoration, repointing, chimneys, cleaning and roofing in Dublin.",
};

export default function Page() {
  return <WorkPage />;
}
