"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    setLoading(true);
    setSubmitted(false);
    setError("");

    const formData = new FormData(form);

    const data = {
      name: formData.get("name")?.toString().trim(),
      company: formData.get("company")?.toString().trim(),
      email: formData.get("email")?.toString().trim(),
      phone: formData.get("phone")?.toString().trim(),
      service: formData.get("service")?.toString().trim(),
      industry: formData.get("industry")?.toString().trim(),
      budget: formData.get("budget")?.toString().trim(),
      preferredContact: formData
        .get("preferredContact")
        ?.toString()
        .trim(),
      requirements: formData
        .get("requirements")
        ?.toString()
        .trim(),
      message: formData.get("message")?.toString().trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      console.log("Contact API response:", result);

      if (!response.ok || result.success !== true) {
        throw new Error(
          result.message || "Unable to submit your enquiry."
        );
      }

      // Clear the form first.
      form.reset();

      // Show success message.
      setError("");
      setSubmitted(true);
    } catch (err) {
      console.error("Contact form error:", err);

      setSubmitted(false);

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Name + Company */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
          >
            Name *
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full rounded-xl border border-[var(--border-light)] bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[var(--brand-green)] focus:ring-2 focus:ring-[var(--brand-green)]/10"
          />
        </div>

        <div>
          <label
            htmlFor="company"
            className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
          >
            Company
          </label>

          <input
            id="company"
            name="company"
            type="text"
            placeholder="Company name"
            className="w-full rounded-xl border border-[var(--border-light)] bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[var(--brand-green)] focus:ring-2 focus:ring-[var(--brand-green)]/10"
          />
        </div>
      </div>

      {/* Email + Phone */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
          >
            Email *
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="w-full rounded-xl border border-[var(--border-light)] bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[var(--brand-green)] focus:ring-2 focus:ring-[var(--brand-green)]/10"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
          >
            Phone
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Phone number"
            className="w-full rounded-xl border border-[var(--border-light)] bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[var(--brand-green)] focus:ring-2 focus:ring-[var(--brand-green)]/10"
          />
        </div>
      </div>

      {/* Service + Industry */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="service"
            className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
          >
            Service Required *
          </label>

          <select
            id="service"
            name="service"
            required
            defaultValue=""
            className="w-full rounded-xl border border-[var(--border-light)] bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[var(--brand-green)] focus:ring-2 focus:ring-[var(--brand-green)]/10"
          >
            <option value="" disabled>
              Select a service
            </option>

            <option value="web-development">
              Web Development
            </option>

            <option value="ecommerce">
              E-Commerce
            </option>

            <option value="mobile-app-development">
              Mobile App Development
            </option>

            <option value="ai-automation">
              AI & Automation
            </option>

            <option value="whatsapp-automation">
              WhatsApp Automation
            </option>

            <option value="digital-marketing">
              Digital Marketing
            </option>

            <option value="business-software">
              Business Software
            </option>

            <option value="office-it">
              Office & IT Setup
            </option>

            <option value="technical-services">
              Technical Services
            </option>

            <option value="other">
              Other
            </option>
          </select>
        </div>

        <div>
          <label
            htmlFor="industry"
            className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
          >
            Industry
          </label>

          <select
            id="industry"
            name="industry"
            defaultValue=""
            className="w-full rounded-xl border border-[var(--border-light)] bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[var(--brand-green)] focus:ring-2 focus:ring-[var(--brand-green)]/10"
          >
            <option value="">
              Select your industry
            </option>

            <option value="education">Education</option>
            <option value="healthcare">Healthcare</option>
            <option value="retail-ecommerce">
              Retail & E-Commerce
            </option>
            <option value="manufacturing">
              Manufacturing
            </option>
            <option value="food-hospitality">
              Food & Hospitality
            </option>
            <option value="professional-services">
              Professional Services
            </option>
            <option value="smb">
              Small & Medium Business
            </option>
            <option value="corporate-offices">
              Corporate Offices
            </option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      {/* Budget + Preferred Contact */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="budget"
            className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
          >
            Budget
            <span className="ml-2 text-xs font-normal text-[var(--text-muted)]">
              Optional
            </span>
          </label>

          <select
            id="budget"
            name="budget"
            defaultValue=""
            className="w-full rounded-xl border border-[var(--border-light)] bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[var(--brand-green)] focus:ring-2 focus:ring-[var(--brand-green)]/10"
          >
            <option value="">
              Prefer not to say
            </option>

            <option value="under-50000">
              Under ₹50,000
            </option>

            <option value="50000-100000">
              ₹50,000 – ₹1,00,000
            </option>

            <option value="100000-500000">
              ₹1,00,000 – ₹5,00,000
            </option>

            <option value="500000-plus">
              ₹5,00,000+
            </option>

            <option value="to-discuss">
              Let&apos;s discuss
            </option>
          </select>
        </div>

        <div>
          <label
            htmlFor="preferredContact"
            className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
          >
            Preferred Contact Method
          </label>

          <select
            id="preferredContact"
            name="preferredContact"
            defaultValue=""
            className="w-full rounded-xl border border-[var(--border-light)] bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[var(--brand-green)] focus:ring-2 focus:ring-[var(--brand-green)]/10"
          >
            <option value="">
              Select preference
            </option>

            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="whatsapp">WhatsApp</option>
          </select>
        </div>
      </div>

      {/* Project Requirements */}
      <div>
        <label
          htmlFor="requirements"
          className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
        >
          Project Requirements *
        </label>

        <textarea
          id="requirements"
          name="requirements"
          required
          rows={6}
          placeholder="Tell us about your project, business requirement, current challenges or what you would like to build."
          className="w-full resize-y rounded-xl border border-[var(--border-light)] bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[var(--brand-green)] focus:ring-2 focus:ring-[var(--brand-green)]/10"
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
        >
          Message
        </label>

        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Anything else you would like us to know?"
          className="w-full resize-y rounded-xl border border-[var(--border-light)] bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[var(--brand-green)] focus:ring-2 focus:ring-[var(--brand-green)]/10"
        />
      </div>

      {/* Submit */}
      <div>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center rounded-full bg-[var(--brand-green)] px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[var(--brand-green-dark)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {loading ? "Sending..." : "Send Enquiry"}
        </button>
      </div>

      {/* Success */}
      {submitted && (
        <div
          className="rounded-xl border border-[var(--brand-green)]/20 bg-[var(--brand-green-light)] p-4 text-sm font-medium text-[var(--brand-green-dark)]"
          role="status"
          aria-live="polite"
        >
          ✓ Your enquiry has been received successfully.
        </div>
      )}

      {/* Error */}
      {error && (
        <div
          className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700"
          role="alert"
          aria-live="assertive"
        >
          {error}
        </div>
      )}
    </form>
  );
}