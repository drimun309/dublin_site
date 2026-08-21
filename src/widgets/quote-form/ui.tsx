"use client";

import { FormEvent } from "react";
import { services } from "@/entities/service";
import { useSendLead } from "@/features/send-lead";
import { Reveal } from "@/shared/ui";

export function QuoteForm({ sourcePage = "home" }: { sourcePage?: string }) {
  const { send, pending, note, ok, error } = useSendLead();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const sent = await send({
      name: String(data.get("name") || ""),
      phone: String(data.get("phone") || ""),
      email: String(data.get("email") || ""),
      service: String(data.get("service") || ""),
      message: String(data.get("message") || ""),
      source_page: sourcePage,
    });
    if (sent) event.currentTarget.reset();
  };

  return (
    <section className="quote" id="quote">
      <div className="quote-shell">
        <div className="quote-intro">
          <Reveal>
            <p className="eyebrow">Free quote</p>
          </Reveal>
          <Reveal>
            <h2>Tell us about the job.</h2>
          </Reveal>
        </div>

        <Reveal>
          <form className="quote-form" onSubmit={onSubmit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" autoComplete="name" required placeholder="Your name" />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" required placeholder="Mobile or landline" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" placeholder="Optional" />
            </div>
            <div className="field">
              <label htmlFor="service">Service</label>
              <select id="service" name="service" required defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((service) => (
                  <option key={service.slug} value={service.title}>
                    {service.title}
                  </option>
                ))}
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="field field-full">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Address, issue, and preferred time for a visit"
              />
            </div>
            <div className="field-full form-footer">
              <button className="btn btn-solid" type="submit" disabled={pending}>
                {pending ? "Sending…" : "Send request"}
              </button>
              <p className={`form-note${ok ? " is-success" : ""}${error ? " is-error" : ""}`}>{note}</p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
