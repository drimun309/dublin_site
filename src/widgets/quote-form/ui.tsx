"use client";

import { ChangeEvent, FormEvent, useRef, useState } from "react";
import Link from "next/link";
import { formServiceTitles } from "@/entities/service";
import { useSendLead } from "@/features/send-lead";
import { Reveal } from "@/shared/ui";

export function QuoteForm({ sourcePage = "home" }: { sourcePage?: string }) {
  const { send, pending, note, ok, error } = useSendLead();
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    setSelectedFiles(files.map((f) => f.name));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    data.set("source_page", sourcePage);

    const sent = await send(data);
    if (sent) {
      form.reset();
      setSelectedFiles([]);
    }
  };

  return (
    <section className="quote" id="quote">
      <div className="quote-shell">
        <div className="quote-intro">
          <Reveal>
            <p className="eyebrow">Free assessment</p>
          </Reveal>
          <Reveal>
            <h2>Tell us about the job.</h2>
          </Reveal>
          <Reveal>
            <p>
              Not sure what your property needs? Send us a few photos and details, and we&apos;ll advise on the next
              step with an itemised estimate.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <form className="quote-form" onSubmit={onSubmit}>
            <div className="field">
              <label htmlFor="name">Name *</label>
              <input id="name" name="name" type="text" autoComplete="name" required placeholder="Your name" />
            </div>

            <div className="field">
              <label htmlFor="phone">Phone *</label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" required placeholder="Mobile or landline" />
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" placeholder="email@example.com (optional)" />
            </div>

            <div className="field">
              <label htmlFor="area">Area / Postcode</label>
              <input id="area" name="area" type="text" placeholder="e.g. Ranelagh, D06, Dublin 4" />
            </div>

            <div className="field field-full">
              <label htmlFor="service">Service</label>
              <select id="service" name="service" defaultValue="">
                <option value="">Select a service (optional)</option>
                {formServiceTitles.map((title) => (
                  <option key={title} value={title}>
                    {title}
                  </option>
                ))}
                <option value="Other">Other / Multiple services</option>
              </select>
            </div>

            <div className="field field-full">
              <label htmlFor="message">Description of Work</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Briefly describe the issues, property type/age, or preferred date for a visit..."
              />
            </div>

            <div className="field field-full">
              <label htmlFor="photos">Upload Photos (Optional)</label>
              <div
                className="file-upload-box"
                onClick={() => fileInputRef.current?.click()}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") fileInputRef.current?.click();
                }}
              >
                <input
                  ref={fileInputRef}
                  id="photos"
                  name="photos"
                  type="file"
                  multiple
                  accept="image/*,.heic,.heif"
                  onChange={onFileChange}
                />
                <span className="file-upload-label">
                  {selectedFiles.length > 0
                    ? `${selectedFiles.length} photo(s) selected`
                    : "Click to upload photos of the property"}
                </span>
                <span className="file-upload-hint">
                  {selectedFiles.length > 0
                    ? selectedFiles.slice(0, 3).join(", ") + (selectedFiles.length > 3 ? "..." : "")
                    : "Wide shot + close-up of the brickwork or chimney helps us give an accurate assessment."}
                </span>
              </div>
            </div>

            <div className="field-full form-footer">
              <button className="btn btn-solid" type="submit" disabled={pending}>
                {pending ? "Sending assessment request…" : "Send Photos for a Free Assessment"}
              </button>
              <p className="form-privacy">
                By submitting, you ask us to use your details and photos to assess your enquiry. See our{" "}
                <Link href="/privacy">Privacy Policy</Link>.
              </p>
              <p className={`form-note${ok ? " is-success" : ""}${error ? " is-error" : ""}`}>{note}</p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
