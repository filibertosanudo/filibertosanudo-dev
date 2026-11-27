"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/i18n/dictionary";

type Status = "idle" | "loading" | "success" | "error";
type FormDict = Dictionary["contactSection"]["form"];

function messageForErrorCode(code: unknown, errors: FormDict["errors"]): string {
  switch (code) {
    case "validation":
      return errors.validation;
    case "not_configured":
      return errors.notConfigured;
    case "send_failed":
      return errors.sendFailed;
    default:
      return errors.generic;
  }
}

export default function ContactForm({ form }: { form: FormDict }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const el = e.currentTarget;
    const data = new FormData(el);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(messageForErrorCode(body?.error, form.errors));
      }

      setStatus("success");
      el.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : form.errors.generic);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-11 flex flex-col gap-[18px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px]">
        <label className="flex flex-col gap-2">
          <span className="font-mono text-xs font-medium text-ink">{form.nameLabel}</span>
          <input
            type="text"
            name="name"
            required
            placeholder={form.namePlaceholder}
            className="rounded-[10px] border border-ash bg-white px-4 py-[14px] font-sans text-base text-ink outline-none transition focus:border-navy"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-mono text-xs font-medium text-ink">{form.emailLabel}</span>
          <input
            type="email"
            name="email"
            required
            placeholder={form.emailPlaceholder}
            className="rounded-[10px] border border-ash bg-white px-4 py-[14px] font-sans text-base text-ink outline-none transition focus:border-navy"
          />
        </label>
      </div>
      <label className="flex flex-col gap-2">
        <span className="font-mono text-xs font-medium text-ink">{form.messageLabel}</span>
        <textarea
          name="message"
          rows={5}
          required
          placeholder={form.messagePlaceholder}
          className="resize-y rounded-[10px] border border-ash bg-white px-4 py-[14px] font-sans text-base leading-[1.5] text-ink outline-none transition focus:border-navy"
        />
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center gap-[10px] self-start rounded-[10px] bg-navy px-[26px] py-[15px] font-sans text-base font-semibold text-white transition hover:-translate-y-px hover:bg-navy-hover disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {status === "loading" ? form.sendingLabel : form.submitLabel}
        <span className="font-mono text-[15px]">&rarr;</span>
      </button>

      {status === "success" && (
        <p role="status" aria-live="polite" className="text-sm font-medium text-navy">
          {form.successMessage}
        </p>
      )}
      {status === "error" && (
        <p role="alert" aria-live="assertive" className="text-sm font-medium text-red-700">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
