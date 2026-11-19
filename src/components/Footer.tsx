import {
  HeartPulse,
  Phone,
  MessageCircle,
  MapPin,
  Mail,
  ShieldAlert,
  ArrowUpRight,
} from "lucide-react";
import { clinicConfig } from "../config/clinicConfig";
import { telLink, whatsappHelloLink } from "../lib/links";
import { scrollToId } from "../hooks/useScrollReveal";
import { SOCIAL_ICONS } from "./BrandIcons";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Doctor" },
  { id: "services", label: "Services" },
  { id: "why-us", label: "Why Choose Us" },
  { id: "appointment", label: "Book Appointment" },
  { id: "contact", label: "Contact" },
  { id: "faq", label: "FAQ" },
];

const SOCIAL_LIST = [
  { key: "facebook", label: "Facebook" },
  { key: "instagram", label: "Instagram" },
  { key: "twitter", label: "Twitter" },
  { key: "youtube", label: "YouTube" },
] as const;

export default function Footer() {
  const { clinicName, doctor, contact, location, social, footer } = clinicConfig;

  return (
    <footer className="bg-ink-950 text-ink-200">
      {/* Top CTA strip */}
      <div className="border-b border-white/10 bg-gradient-to-br from-brand-700 to-brand-800">
        <div className="container-page flex flex-col items-center justify-between gap-5 py-8 text-white sm:flex-row">
          <div>
            <h3 className="font-display text-xl font-bold sm:text-2xl">
              Ready to book your visit?
            </h3>
            <p className="mt-1 text-sm text-brand-100">
              Send a quick WhatsApp message and we'll confirm your slot.
            </p>
          </div>
          <div className="flex gap-3">
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
            <a
              href={whatsappHelloLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp px-5 py-3 text-sm"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-page grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">
              <HeartPulse className="h-5 w-5" strokeWidth={2.4} />
            </span>
            <div>
              <p className="font-display text-base font-bold text-white">
                {clinicName}
              </p>
              <p className="text-xs text-ink-400">{doctor.specialization}</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink-400">
            {clinicConfig.tagline}. Personalized medical care for individuals and
            families, with a calm and unhurried approach.
          </p>
          {/* Social */}
          <div className="mt-5 flex items-center gap-2">
            {SOCIAL_LIST.filter((s) => social[s.key]).map((s) => {
              const Icon = SOCIAL_ICONS[s.key];
              return (
                <a
                  key={s.key}
                  href={social[s.key] as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-ink-300 ring-1 ring-white/10 transition-colors hover:bg-brand-600 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId(l.id);
                  }}
                  className="text-ink-300 transition-colors hover:text-brand-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white">
            Services
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {clinicConfig.services.slice(0, 5).map((s) => (
              <li key={s.id}>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId("services");
                  }}
                  className="text-ink-300 transition-colors hover:text-brand-300"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white">
            Get in touch
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 flex-none text-brand-400" />
              <span className="text-ink-300">
                {location.addressLine1}, {location.addressLine2}
              </span>
            </li>
            <li>
              <a
                href={telLink()}
                className="flex items-center gap-2.5 text-ink-300 hover:text-brand-300"
              >
                <Phone className="h-4 w-4 flex-none text-brand-400" />
                {contact.phone}
              </a>
            </li>
            <li>
              <a
                href={whatsappHelloLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-ink-300 hover:text-brand-300"
              >
                <MessageCircle className="h-4 w-4 flex-none text-brand-400" />
                {contact.whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2.5 text-ink-300 hover:text-brand-300"
              >
                <Mail className="h-4 w-4 flex-none text-brand-400" />
                {contact.email}
              </a>
            </li>
          </ul>
          <a
            href={location.mapDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 hover:text-brand-200"
          >
            Get directions
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* Medical disclaimer */}
      <div className="border-t border-white/10 bg-ink-950">
        <div className="container-page py-6 pb-24 lg:pb-6">
          <div className="flex items-start gap-2.5 rounded-xl bg-white/[0.03] p-4 text-xs leading-relaxed text-ink-400 ring-1 ring-white/5">
            <ShieldAlert className="mt-0.5 h-4 w-4 flex-none text-amber-400" />
            <p>
              <strong className="font-semibold text-ink-200">
                Medical disclaimer:
              </strong>{" "}
              {footer.medicalDisclaimer}
            </p>
          </div>

          <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs text-ink-500 sm:flex-row">
            <p>
              © {footer.copyrightYear} {clinicName}. All rights reserved.
            </p>
            <p className="flex items-center gap-1.5">
              <span>Demo website — sample content, replace before launch.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
