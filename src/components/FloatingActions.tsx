import { useEffect, useState } from "react";
import { MessageCircle, CalendarCheck, X } from "lucide-react";
import { clinicConfig } from "../config/clinicConfig";
import { whatsappHelloLink } from "../lib/links";
import { scrollToId } from "../hooks/useScrollReveal";

export default function FloatingActions() {
  const [showHint, setShowHint] = useState(false);
  const [dismissedHint, setDismissedHint] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  // Show hint only after the user has scrolled past the hero
  useEffect(() => {
    if (dismissedHint) return;
    const onScroll = () => {
      const past = window.scrollY > window.innerHeight * 0.5;
      setScrolledPastHero(past);
      if (past) setShowHint(true);
      else setShowHint(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissedHint]);

  // Auto-hide hint after 8 seconds
  useEffect(() => {
    if (!showHint || dismissedHint) return;
    const t = setTimeout(() => setShowHint(false), 8000);
    return () => clearTimeout(t);
  }, [showHint, dismissedHint]);

  return (
    <>
      {/* Floating WhatsApp button (desktop + mobile) */}
      <div className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-2 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8">
        {/* Hint tooltip — only on lg+, only after scrolling past hero */}
        {showHint && !dismissedHint && scrolledPastHero && (
          <div className="hidden items-center gap-2 rounded-2xl bg-white p-3 pr-2 shadow-lift ring-1 ring-ink-100 lg:flex lg:max-w-[240px] animate-scale-in">
            <p className="text-xs leading-snug text-ink-700">
              Have a health question?
              <br />
              <span className="font-semibold text-ink-900">
                Chat with us on WhatsApp.
              </span>
            </p>
            <button
              type="button"
              onClick={() => setDismissedHint(true)}
              aria-label="Dismiss hint"
              className="flex h-6 w-6 flex-none items-center justify-center rounded-full text-ink-400 hover:bg-ink-50"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        )}

        <a
          href={whatsappHelloLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Message ${clinicConfig.clinicName} on WhatsApp`}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.6)] transition-all hover:scale-105 hover:bg-[#1ebe5a] sm:h-16 sm:w-16"
        >
          {/* Pulse ring */}
          <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]" />
          <MessageCircle className="relative h-7 w-7" strokeWidth={2.2} />
          {/* Small label on hover (desktop) */}
          <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-ink-950 px-3 py-1.5 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100 lg:block">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* Sticky mobile appointment CTA */}
      <div className="fixed inset-x-0 bottom-0 z-30 lg:hidden">
        {/* Gradient fade above bar */}
        <div className="pointer-events-none h-8 bg-gradient-to-t from-white to-transparent" />
        <div className="border-t border-ink-100 bg-white/95 px-4 pb-4 pt-2 backdrop-blur-md [padding-bottom:max(1rem,env(safe-area-inset-bottom))]">
          <div className="flex items-center gap-2">
            <a
              href={`tel:${clinicConfig.contact.phoneDial}`}
              className="flex h-12 flex-none items-center justify-center gap-1.5 rounded-full bg-brand-50 px-4 text-sm font-semibold text-brand-700 ring-1 ring-brand-200"
            >
              Call
            </a>
            <button
              type="button"
              onClick={() => scrollToId("appointment")}
              className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-brand-600 text-sm font-semibold text-white shadow-glow active:scale-[0.99]"
            >
              <CalendarCheck className="h-4 w-4" />
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
