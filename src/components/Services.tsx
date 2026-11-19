import {
  Stethoscope,
  Thermometer,
  Activity,
  HeartPulse,
  ShieldPlus,
  Wind,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { clinicConfig } from "../config/clinicConfig";
import { scrollToId } from "../hooks/useScrollReveal";

const ICONS: Record<string, LucideIcon> = {
  stethoscope: Stethoscope,
  thermometer: Thermometer,
  activity: Activity,
  "heart-pulse": HeartPulse,
  "shield-plus": ShieldPlus,
  wind: Wind,
};

export default function Services() {
  const { services } = clinicConfig;

  return (
    <section id="services" className="section bg-ink-50/60">
      <div className="container-page">
        {/* Header */}
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow">Medical services</p>
          <h2 className="heading-2 mt-3">
            Comprehensive care for{" "}
            <span className="text-brand-600">everyday health</span>
          </h2>
          <p className="lead mt-4">
            From routine consultations to ongoing management of long-term
            conditions — every service is delivered with personal attention and
            a clear plan you can follow.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = ICONS[s.icon] ?? Stethoscope;
            return (
              <article
                key={s.id}
                className="reveal group card relative overflow-hidden p-6 hover:-translate-y-1 hover:shadow-lift"
                data-delay={(i % 3) * 100}
              >
                {/* Hover halo */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-100/0 blur-2xl transition-all duration-500 group-hover:bg-brand-100/80" />
                <div className="relative flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-all duration-300 group-hover:bg-brand-600 group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <span className="text-xs font-bold text-ink-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-lg font-bold text-ink-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {s.description}
                </p>

                <button
                  type="button"
                  onClick={() => scrollToId("appointment")}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800"
                >
                  Book this service
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </article>
            );
          })}
        </div>

        {/* CTA bar */}
        <div className="reveal mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl bg-brand-600 p-6 text-white shadow-glow sm:flex-row sm:p-8">
          <div>
            <h3 className="font-display text-xl font-bold sm:text-2xl">
              Not sure which consultation you need?
            </h3>
            <p className="mt-1 text-sm text-brand-100 sm:text-base">
              Send a quick WhatsApp message — we'll guide you to the right
              service and the best time to visit.
            </p>
          </div>
          <div className="flex flex-none gap-3">
            <a
              href="#appointment"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("appointment");
              }}
              className="btn bg-white px-5 py-3 text-sm font-semibold text-brand-700 hover:bg-brand-50"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
