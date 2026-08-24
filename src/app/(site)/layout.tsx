import type { ReactNode } from "react";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
