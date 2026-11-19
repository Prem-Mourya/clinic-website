import { useEffect } from "react";

/**
 * Reveal-on-scroll: observes all elements with `.reveal` class
 * inside the document and toggles `.in-view` when they enter the
 * viewport. Honors prefers-reduced-motion via CSS.
 */
export function useScrollReveal(): void {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (els.length === 0) return;

    // Fallback for older browsers — just reveal everything.
    if (typeof IntersectionObserver === "undefined") {
      els.forEach((el) => el.classList.add("in-view"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/** Smoothly scroll to an in-page anchor by id (without the leading #). */
export function scrollToId(id: string): void {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 76; // navbar offset
  window.scrollTo({ top, behavior: "smooth" });
}
