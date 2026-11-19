import {
  Stethoscope,
  GraduationCap,
  HeartHandshake,
  Quote,
  BadgeCheck,
  CalendarClock,
  Languages,
} from "lucide-react";
import { clinicConfig } from "../config/clinicConfig";

const HIGHLIGHTS = [
  { icon: GraduationCap, label: "Qualification", value: "" }, // value filled below
  { icon: Stethoscope, label: "Specialization", value: "" },
  { icon: CalendarClock, label: "Experience", value: "" },
  { icon: HeartHandshake, label: "Approach", value: "Patient-first" },
];

export default function About() {
  const { doctor, clinicName } = clinicConfig;

  const highlights = HIGHLIGHTS.map((h, i) => {
    switch (i) {
      case 0:
        return { ...h, value: doctor.qualifications };
      case 1:
        return { ...h, value: doctor.specialization };
      case 2:
        return { ...h, value: doctor.experienceLabel };
      default:
        return h;
    }
  });

  return (
    <section id="about" className="section relative bg-white">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left — portrait */}
          <div className="reveal relative mx-auto w-full max-w-md lg:mx-0">
            <div className="absolute -inset-2 -z-10 rounded-[2rem] bg-gradient-to-tr from-brand-100 via-brand-50 to-transparent" />
            <div className="overflow-hidden rounded-[1.75rem] ring-1 ring-ink-100 shadow-lift">
              <img
                src={doctor.photoUrl}
                alt={doctor.photoAlt}
                className="aspect-[4/5] w-full object-cover"
                width={600}
                height={750}
                loading="lazy"
              />
            </div>
            {/* Floating quote card */}
            <div className="absolute -bottom-6 right-0 max-w-[80%] rounded-2xl bg-white p-4 shadow-lift ring-1 ring-ink-100 sm:-right-6">
              <Quote className="h-5 w-5 text-brand-500" />
              <p className="mt-1.5 text-xs font-medium leading-relaxed text-ink-700 sm:text-sm">
                Every patient deserves to be heard before they are treated.
              </p>
            </div>
          </div>

          {/* Right — content */}
          <div>
            <div className="reveal">
              <p className="eyebrow">About the doctor</p>
              <h2 className="heading-2 mt-3">
                Caring for families with{" "}
                <span className="text-brand-600">expertise & empathy</span>
              </h2>
              <p className="lead mt-4 max-w-2xl">
                {doctor.intro}
              </p>
            </div>

            {/* Highlights grid */}
            <div className="reveal mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4" data-delay="100">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="rounded-2xl bg-white p-4 ring-1 ring-ink-100 shadow-soft transition-transform hover:-translate-y-0.5"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                    <h.icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <p className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-ink-500">
                    {h.label}
                  </p>
                  <p className="mt-0.5 text-sm font-bold leading-snug text-ink-900">
                    {h.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Approach block */}
            <div className="reveal mt-8 rounded-2xl border border-brand-100 bg-brand-50/50 p-5 sm:p-6" data-delay="200">
              <div className="flex items-center gap-2.5">
                <HeartHandshake className="h-5 w-5 text-brand-600" />
                <h3 className="font-display text-lg font-bold text-ink-900">
                  Personal approach to patient care
                </h3>
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-700 sm:text-base">
                {doctor.approach}
              </p>
            </div>

            {/* Quick facts */}
            <div className="reveal mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm" data-delay="300">
              <div className="flex items-center gap-2 text-ink-700">
                <BadgeCheck className="h-4 w-4 text-brand-600" />
                <span className="font-medium">Registered medical practitioner</span>
              </div>
              <div className="flex items-center gap-2 text-ink-700">
                <Languages className="h-4 w-4 text-brand-600" />
                <span className="font-medium">English, Hindi & regional language</span>
              </div>
              <div className="flex items-center gap-2 text-ink-700">
                <Stethoscope className="h-4 w-4 text-brand-600" />
                <span className="font-medium">Family healthcare for all ages</span>
              </div>
            </div>

            <p className="reveal mt-6 text-xs text-ink-400" data-delay="400">
              Profile information shown is for the {clinicName} demo and should
              be verified before launch. Replace this section with the doctor's
              real qualifications, registration number, and photograph before
              the clinic goes live.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
