import { Star, Quote, Info } from "lucide-react";
import { clinicConfig } from "../config/clinicConfig";

export default function Testimonials() {
  const { testimonials } = clinicConfig;

  return (
    <section id="testimonials" className="section bg-ink-50/60">
      <div className="container-page">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow">Patient experience</p>
          <h2 className="heading-2 mt-3">
            What patients{" "}
            <span className="text-brand-600">appreciate most</span>
          </h2>
          <p className="lead mt-4">
            Real reviews matter. The testimonials below are sample previews used
            only for this demo — they will be replaced with verified patient
            feedback once the clinic goes live.
          </p>
        </div>

        {/* Sample disclaimer banner */}
        <div className="reveal mx-auto mt-6 flex max-w-2xl items-start gap-2 rounded-xl border border-amber-200 bg-amber-50/70 p-3 text-xs text-amber-900">
          <Info className="mt-0.5 h-3.5 w-3.5 flex-none" />
          <span>
            <strong className="font-semibold">Sample testimonials.</strong>{" "}
            These reviews are placeholders for layout demonstration. Replace
            with consented patient feedback before launch, or link directly to
            your Google Business Profile reviews.
          </span>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.id}
              className="reveal card relative flex flex-col p-6 hover:-translate-y-1 hover:shadow-lift"
              data-delay={(i % 3) * 100}
            >
              <Quote className="absolute right-5 top-5 h-9 w-9 text-brand-100" />
              <span className="inline-flex items-center gap-1 self-start rounded-full bg-amber-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-amber-700 ring-1 ring-amber-200">
                Sample
              </span>
              <div className="mt-3 flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className={`h-4 w-4 ${
                      idx < t.rating
                        ? "fill-amber-400 text-amber-400"
                        : "fill-ink-100 text-ink-100"
                    }`}
                  />
                ))}
              </div>
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink-700">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-ink-100 pt-4">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-brand-100 font-display text-sm font-bold text-brand-700">
                  {t.name.charAt(0)}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-ink-900">{t.name}</p>
                  <p className="truncate text-xs text-ink-500">{t.location}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
