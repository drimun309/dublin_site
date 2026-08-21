import { site } from "@/shared/config";
import { PhoneIcon } from "@/shared/ui";

export function StickyCall() {
  return (
    <a className="sticky-call" href={site.phoneHref} aria-label={`Call ${site.name}`}>
      <PhoneIcon size={18} />
      Call
    </a>
  );
}
