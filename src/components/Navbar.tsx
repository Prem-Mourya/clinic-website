import { useEffect, useState } from "react";
import { Menu, X, Phone, CalendarCheck, HeartPulse } from "lucide-react";
import { clinicConfig } from "../config/clinicConfig";
import { scrollToId } from "../hooks/useScrollReveal";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Doctor" },
  { id: "services", label: "Services" },
  { id: "why-us", label: "Why Choose Us" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNav = (id: string) => {
    setOpen(false);
    // Allow menu to close before scrolling for nicer UX
    setTimeout(() => scrollToId(id), 50);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl ring-1 ring-ink-100 shadow-soft"
          : "bg-white/0"
      }`}
    >
      <nav
        className="container-page flex h-16 items-center justify-between sm:h-[72px]"
        aria-label="Primary"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNav("home");
          }}
          className="group flex items-center gap-2.5"
        >
          {clinicConfig.logoImageUrl ? (
            <img
              src={clinicConfig.logoImageUrl}
              alt={`${clinicConfig.clinicName} logo`}
              className="h-9 w-9 rounded-xl object-cover"
            />
          ) : (
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white shadow-glow transition-transform group-hover:scale-105">
              <HeartPulse className="h-5 w-5" strokeWidth={2.4} />
            </span>
          )}
          <span className="flex flex-col leading-none">
            <span className="font-display text-base font-bold text-ink-900 sm:text-[17px]">
              {clinicConfig.clinicName}
            </span>
            <span className="mt-0.5 text-[11px] font-medium text-brand-700">
              {clinicConfig.doctor.specialization}
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(l.id);
                }}
                className="rounded-full px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={`tel:${clinicConfig.contact.phoneDial}`}
            className="btn-ghost px-3 py-2 text-sm"
            aria-label={`Call ${clinicConfig.contact.phone}`}
          >
            <Phone className="h-4 w-4" />
            <span className="hidden xl:inline">Call</span>
          </a>
          <a
            href="#appointment"
            onClick={(e) => {
              e.preventDefault();
              handleNav("appointment");
            }}
            className="btn-primary"
          >
            <CalendarCheck className="h-4 w-4" />
            Book Appointment
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-ink-800 ring-1 ring-ink-200 hover:bg-ink-50 lg:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        {/* Overlay */}
        <div
          className={`fixed inset-0 z-40 bg-ink-950/40 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        {/* Panel */}
        <div
          className={`fixed inset-y-0 right-0 z-50 flex w-[88%] max-w-sm flex-col bg-white shadow-lift transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-ink-100 px-5 py-4">
            <span className="font-display text-lg font-bold text-ink-900">
              Menu
            </span>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-ink-700 ring-1 ring-ink-200 hover:bg-ink-50"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <ul className="flex flex-col gap-1 px-3 py-4">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(l.id);
                  }}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-ink-800 hover:bg-brand-50 hover:text-brand-700"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto space-y-2 border-t border-ink-100 p-4">
            <a
              href={`tel:${clinicConfig.contact.phoneDial}`}
              className="btn-secondary w-full"
            >
              <Phone className="h-4 w-4" />
              Call {clinicConfig.contact.phone}
            </a>
            <a
              href="#appointment"
              onClick={(e) => {
                e.preventDefault();
                handleNav("appointment");
              }}
              className="btn-primary w-full"
            >
              <CalendarCheck className="h-4 w-4" />
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
