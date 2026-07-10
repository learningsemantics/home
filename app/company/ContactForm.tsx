"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "opening">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const organization = String(form.get("organization") || "");
    const workflow = String(form.get("workflow") || "");
    const message = [
      `Name: ${name}`,
      `Work email: ${email}`,
      `Organization: ${organization}`,
      "",
      "Workflow to govern:",
      workflow,
    ].join("\n");

    setStatus("opening");
    window.location.href = `mailto:hello@learningsemantics.com?subject=${encodeURIComponent(
      "Private briefing request",
    )}&body=${encodeURIComponent(message)}`;
    window.setTimeout(() => setStatus("idle"), 1200);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          <span>Work email</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label className="form-wide">
          <span>Organization</span>
          <input name="organization" type="text" autoComplete="organization" required />
        </label>
        <label className="form-wide">
          <span>One workflow you want to govern</span>
          <textarea name="workflow" rows={5} required />
        </label>
      </div>
      <div className="form-submit">
        <button className="button button-dark" type="submit" disabled={status === "opening"}>
          {status === "opening" ? "Opening your email…" : "Request a Private Briefing"}
        </button>
        <p>Your email app will open with a pre-filled message. Nothing is sent automatically.</p>
      </div>
    </form>
  );
}
