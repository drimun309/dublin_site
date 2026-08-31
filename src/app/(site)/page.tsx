import { JsonLd } from "@/shared/ui";
import { HomePage } from "@/views/home";
import { faqItems } from "@/widgets/faq";

export default function Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a.join(" ") },
    })),
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />
      <HomePage />
    </>
  );
}
