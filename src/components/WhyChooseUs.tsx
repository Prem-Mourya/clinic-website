import {
  UserRound,
  HeartHandshake,
  CalendarCheck,
  Stethoscope,
  MapPin,
  Clock,
  ShieldCheck,
} from "lucide-react";

const FEATURES = [
  {
    icon: UserRound,
    title: "Personalized Attention",
    description:
      "Every consultation is unhurried. You get the time to explain your concerns, ask questions, and leave with a plan you actually understand.",
  },
  {
    icon: HeartHandshake,
    title: "Patient-Centered Care",
    description:
      "Treatment is tailored to your lifestyle, age, and history — not a one-size-fits-all prescription. Your comfort and confidence come first.",
  },
  {
    icon: CalendarCheck,
    title: "Convenient Appointment Booking",
    description:
      "Book through the website, send a WhatsApp message, or just call. Your appointment request lands directly with the clinic — no waiting on hold.",
  },
  {
    icon: Stethoscope,
    title: "Professional Medical Consultation",
    description:
      "Diagnosis and treatment by a qualified general physician following current medical best practices and standard clinical protocols.",
  },
  {
    icon: MapPin,
    title: "Accessible Clinic Location",
    description:
      "Centrally located, easy to reach by public transport and car, with clear directions available one tap away on Google Maps.",
  },
  {
    icon: Clock,
    title: "Flexible Consultation Hours",
    description:
      "Morning and evening sessions designed around working families. Walk-ins welcome — urgent cases are always prioritized.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-b opacity-40" />
      <div className="container-page relative">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* Left — image + stat overlay */}
          <div className="reveal relative mx-auto w-full max-w-md lg:mx-0">
            <div className="overflow-hidden rounded-[1.75rem] ring-1 ring-ink-100 shadow-lift">
              <img
                src="/images/clinic-interior.jpg"
                alt="Modern, clean clinic interior with a welcoming reception area"
                className="aspect-[4/5] w-full object-cover"
                width={600}
                height={750}
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 right-4 rounded-2xl bg-white p-4 shadow-lift ring-1 ring-ink-100 sm:right-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-medium text-ink-500">
                    Quality of care
                  </p>
                  <p className="text-sm font-bold text-ink-900">
                    Evidence-based, ethical
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — content */}
          <div>
            <div className="reveal">
              <p className="eyebrow">Why choose our clinic</p>
              <h2 className="heading-2 mt-3">
                A clinic designed around{" "}
                <span className="text-brand-600">your comfort</span>
              </h2>
              <p className="lead mt-4 max-w-2xl">
                Modern healthcare works best when patients feel respected,
                informed, and genuinely cared for. Here's what you can expect on
                every visit.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {FEATURES.map((f, i) => (
                <div
                  key={f.title}
                  className="reveal group flex gap-3.5 rounded-2xl border border-ink-100 bg-white p-4 transition-all hover:border-brand-200 hover:shadow-card sm:p-5"
                  data-delay={(i % 2) * 100 + 50}
                >
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <f.icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-ink-900">
                      {f.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-600">
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
