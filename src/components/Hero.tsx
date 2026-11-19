import {
  CalendarCheck,
  Phone,
  ShieldCheck,
  HeartHandshake,
  MapPin,
} from "lucide-react";
import { clinicConfig } from "../config/clinicConfig";
import { scrollToId } from "../hooks/useScrollReveal";
import { telLink } from "../lib/links";

const TRUST_ICONS = [ShieldCheck, HeartHandshake, MapPin];

export default function Hero() {
  const { hero, doctor, clinicName } = clinicConfig;

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-24 sm:pt-28 lg:pt-32"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
      <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-b opacity-60" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl" />

      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          {/* Left column */}
          <div className="reveal">
            <div className="flex items-center gap-2">
              <span className="chip">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-brand-500 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
                </span>
                {doctor.specialization} · {doctor.qualifications}
              </span>
            </div>

            <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.08] text-ink-900 sm:text-5xl lg:text-[3.4rem]">
              {hero.headline}
            </h1>

            <p className="mt-5 max-w-xl text-balance text-base text-ink-600 sm:text-lg">
              {hero.subheading}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#appointment"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("appointment");
                }}
                className="btn-primary px-7 py-3.5 text-[15px]"
              >
                <CalendarCheck className="h-5 w-5" />
                {hero.primaryCta}
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("contact");
                }}
                className="btn-secondary px-7 py-3.5 text-[15px]"
              >
                <Phone className="h-5 w-5" />
                {hero.secondaryCta}
              </a>
            </div>

            {/* Trust strip */}
            <dl className="mt-10 grid grid-cols-1 gap-3 border-t border-ink-100 pt-6 sm:grid-cols-3">
              {hero.trust.map((t, i) => {
                const Icon = TRUST_ICONS[i % TRUST_ICONS.length];
                return (
                  <div
                    key={t.label}
                    className="reveal flex items-start gap-3"
                    data-delay={(i + 1) * 100}
                  >
                    <span className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                      <Icon className="h-4.5 w-4.5" strokeWidth={2} />
                    </span>
                    <div className="min-w-0">
                      <dt className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                        {t.label}
                      </dt>
                      <dd className="text-sm font-semibold text-ink-800">
                        {t.value}
                      </dd>
                    </div>
                  </div>
                );
              })}
            </dl>
          </div>

          {/* Right column — image */}
          <div className="reveal relative" data-delay="200">
            <div className="relative mx-auto max-w-md lg:mr-6 lg:max-w-none">
              {/* Background glow card */}
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-100 via-brand-50 to-white shadow-glow" />
              <div className="relative overflow-hidden rounded-[1.75rem] ring-1 ring-ink-100 shadow-lift">
                <img
                  src={hero.imageUrl}
                  alt={hero.imageAlt}
                  className="aspect-[4/5] w-full object-cover sm:aspect-[5/5] lg:aspect-[4/5]"
                  width={800}
                  height={1000}
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent" />
              </div>

              {/* Floating doctor card */}
              <div className="absolute -bottom-6 left-4 right-4 max-w-[88%] rounded-2xl bg-white/95 p-3.5 shadow-lift ring-1 ring-ink-100 backdrop-blur sm:left-6 sm:right-auto sm:max-w-[280px] lg:-bottom-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-brand-600 font-display text-base font-bold text-white">
                    {doctor.name
                      .replace("Dr. ", "")
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-ink-900">
                      {doctor.name}
                    </p>
                    <p className="truncate text-xs text-ink-500">
                      {doctor.qualifications}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating experience badge */}
              <div className="absolute right-3 top-6 rounded-xl bg-white/95 px-3.5 py-2.5 shadow-lift ring-1 ring-ink-100 backdrop-blur sm:-right-3 lg:-right-5">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-ink-500">
                  Experience
                </p>
                <p className="text-sm font-bold text-brand-700">
                  {doctor.experienceLabel}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom strip — quick contact line */}
        <div className="reveal mt-12 flex flex-col items-start gap-3 border-t border-ink-100 pt-6 text-sm text-ink-600 sm:flex-row sm:items-center sm:justify-between lg:mt-16">
          <p className="flex items-center gap-2">
            <span className="font-semibold text-ink-800">{clinicName}</span>
            <span className="text-ink-300">·</span>
            <span>{doctor.specialization}</span>
          </p>
          <p className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-brand-600" />
            <a
              href={telLink()}
              className="font-semibold text-ink-800 hover:text-brand-700"
            >
              {clinicConfig.contact.phone}
            </a>
            <span className="text-ink-300">·</span>
            <MapPin className="h-4 w-4 text-brand-600" />
            <span>{clinicConfig.location.city}, {clinicConfig.location.state}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
