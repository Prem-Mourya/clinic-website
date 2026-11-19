import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { clinicConfig } from "../config/clinicConfig";
import { scrollToId } from "../hooks/useScrollReveal";

export default function Faq() {
  const { faqs } = clinicConfig;
  const [open, setOpen] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section id="faq" className="section bg-white">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          {/* Left — header */}
          <div className="reveal lg:sticky lg:top-24 lg:self-start">
            <p className="eyebrow">FAQ</p>
            <h2 className="heading-2 mt-3">
              Questions you{" "}
              <span className="text-brand-600">might have</span>
            </h2>
            <p className="lead mt-4 max-w-md">
              Quick answers about booking, timings, location, and what to expect
              when you visit the clinic.
            </p>

            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-brand-100 bg-brand-50/50 p-4">
              <HelpCircle className="mt-0.5 h-5 w-5 flex-none text-brand-600" />
              <div>
                <p className="text-sm font-semibold text-ink-900">
                  Still have a question?
                </p>
                <p className="mt-0.5 text-xs text-ink-600">
                  Send us a WhatsApp message — we usually respond during working
                  hours.
                </p>
                <button
                  type="button"
                  onClick={() => scrollToId("contact")}
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
                >
                  Contact the clinic →
                </button>
              </div>
            </div>
          </div>

          {/* Right — accordion */}
          <div className="reveal" data-delay="100">
            <div className="divide-y divide-ink-100 rounded-3xl border border-ink-100 bg-white shadow-soft">
              {faqs.map((f) => {
                const isOpen = open === f.id;
                return (
                  <div key={f.id}>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : f.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${f.id}`}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-brand-50/40 sm:px-6"
                    >
                      <span className="font-display text-base font-bold text-ink-900 sm:text-lg">
                        {f.question}
                      </span>
                      <span
                        className={`flex h-8 w-8 flex-none items-center justify-center rounded-full ring-1 transition-all duration-300 ${
                          isOpen
                            ? "rotate-180 bg-brand-600 text-white ring-brand-600"
                            : "bg-white text-brand-600 ring-brand-200"
                        }`}
                      >
                        <ChevronDown className="h-4 w-4" strokeWidth={2.5} />
                      </span>
                    </button>
                    <div
                      id={`faq-panel-${f.id}`}
                      role="region"
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 text-sm leading-relaxed text-ink-600 sm:px-6 sm:text-[15px]">
                          {f.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
