import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Mail,
  Navigation,
  ExternalLink,
} from "lucide-react";
import { clinicConfig } from "../config/clinicConfig";
import { telLink, whatsappHelloLink } from "../lib/links";

const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default function Contact() {
  const { contact, location, hours } = clinicConfig;

  // Highlight today's row using local time (clinic timezone = Asia/Kolkata
  // for the demo, but JS Date uses the device timezone — acceptable for demo).
  const todayName = WEEKDAYS[new Date().getDay()];

  return (
    <section id="contact" className="section bg-white">
      <div className="container-page">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow">Clinic information</p>
          <h2 className="heading-2 mt-3">
            Visit us, call us, or{" "}
            <span className="text-brand-600">message us</span>
          </h2>
          <p className="lead mt-4">
            Reach {clinicConfig.clinicName} through whichever channel suits you
            best. We're here to help.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.15fr]">
          {/* Left — contact cards */}
          <div className="reveal space-y-4" data-delay="100">
            {/* Address */}
            <div className="card flex gap-4 p-5">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                <MapPin className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-sm font-bold text-ink-900">
                  Clinic Address
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-700">
                  {location.addressLine1}
                  <br />
                  {location.addressLine2}
                </p>
                <a
                  href={location.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
                >
                  <Navigation className="h-4 w-4" />
                  Get directions
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Phone + WhatsApp */}
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={telLink()}
                className="card group flex flex-col gap-2 p-5 hover:-translate-y-0.5 hover:shadow-lift"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <Phone className="h-5 w-5" />
                </span>
                <span className="mt-1 text-xs font-semibold uppercase tracking-wide text-ink-500">
                  Call us
                </span>
                <span className="text-sm font-bold text-ink-900">
                  {contact.phone}
                </span>
                <span className="text-xs text-brand-700">Tap to call</span>
              </a>

              <a
                href={whatsappHelloLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="card group flex flex-col gap-2 p-5 hover:-translate-y-0.5 hover:shadow-lift"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#1ebe5a] ring-1 ring-[#25D366]/20 transition-colors group-hover:bg-[#25D366] group-hover:text-white">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <span className="mt-1 text-xs font-semibold uppercase tracking-wide text-ink-500">
                  WhatsApp
                </span>
                <span className="text-sm font-bold text-ink-900">
                  {contact.whatsappDisplay}
                </span>
                <span className="text-xs text-[#1ebe5a]">Chat with us</span>
              </a>
            </div>

            {/* Email */}
            <a
              href={`mailto:${contact.email}`}
              className="card group flex items-center gap-4 p-5 hover:-translate-y-0.5 hover:shadow-lift"
            >
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <Mail className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-wide text-ink-500">
                  Email
                </span>
                <span className="block truncate text-sm font-bold text-ink-900">
                  {contact.email}
                </span>
              </div>
            </a>

            {/* Hours */}
            <div className="card p-5">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                  <Clock className="h-4.5 w-4.5" />
                </span>
                <h3 className="font-display text-sm font-bold text-ink-900">
                  Opening Hours
                </h3>
              </div>
              <ul className="mt-3 divide-y divide-ink-100 text-sm">
                {hours.map((h) => {
                  const isToday = h.day === todayName;
                  return (
                    <li
                      key={h.day}
                      className={`flex flex-col gap-0.5 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-3 ${
                        isToday ? "rounded-lg bg-brand-50/60 px-3 py-3" : "px-1"
                      }`}
                    >
                      <span
                        className={`flex items-center gap-2 font-medium ${
                          isToday ? "text-brand-800" : "text-ink-700"
                        }`}
                      >
                        {h.day}
                        {isToday && (
                          <span className="rounded-full bg-brand-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                            Today
                          </span>
                        )}
                      </span>
                      <span
                        className={
                          h.closed
                            ? "text-xs font-medium text-ink-400"
                            : isToday
                            ? "text-sm font-semibold text-brand-800"
                            : "text-sm text-ink-700"
                        }
                      >
                        {h.hours}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Right — map */}
          <div className="reveal" data-delay="200">
            <div className="relative h-full min-h-[400px] overflow-hidden rounded-3xl ring-1 ring-ink-100 shadow-lift">
              <iframe
                title={`Map showing ${clinicConfig.clinicName} location`}
                src={location.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              {/* Floating address card on map */}
              <div className="pointer-events-none absolute inset-x-4 bottom-4">
                <div className="pointer-events-auto mx-auto max-w-md rounded-2xl bg-white/95 p-4 shadow-lift ring-1 ring-ink-100 backdrop-blur sm:ml-4 sm:mr-auto">
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-600 text-white">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-display text-sm font-bold text-ink-900">
                        {clinicConfig.clinicName}
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-ink-600">
                        {location.addressLine1}, {location.addressLine2}
                      </p>
                      <a
                        href={location.mapDirectionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-700 hover:text-brand-800"
                      >
                        <Navigation className="h-3.5 w-3.5" />
                        Open in Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
