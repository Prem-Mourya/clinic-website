# Premium Clinic Website — Sales Demo

A premium, production-quality clinic website template designed for selling
websites to local doctors, general physicians, and small healthcare
practices in India.

Built as a **reusable demo**: customize a single configuration file to
transform the site for any clinic.

---

## Quick start

```bash
npm install
npm run dev      # Start dev server at http://localhost:5173
npm run build    # Production build into /dist
npm run preview  # Preview the production build
```

---

## How to customize for a new clinic

**Edit one file: `src/config/clinicConfig.ts`.**

Everything visible on the website — clinic name, doctor name, qualifications,
address, phone, WhatsApp number, services, hours, testimonials, FAQs, social
links, hero content, and medical disclaimer — is driven from this config.

Every field that should be replaced before launch is tagged with `[REPLACE]`.

### Common customizations

| What to change | Where in `clinicConfig.ts` |
| --- | --- |
| Clinic name & logo | `clinicName`, `logoMark`, `logoImageUrl` |
| Doctor name, qualifications, photo | `doctor.*` |
| Phone & WhatsApp number | `contact.phone`, `contact.phoneDial`, `contact.whatsappNumber` |
| Clinic address & Google Map | `location.*` (replace `mapEmbedUrl` & `mapDirectionsUrl`) |
| Opening hours | `hours[]` |
| Services offered | `services[]` (icons are Lucide icon names) |
| Sample testimonials → real reviews | `testimonials[]` (or replace with Google reviews link) |
| FAQ items | `faqs[]` |
| Social media links | `social.*` (set to `null` to hide) |
| Hero image / headline | `hero.*` |
| Medical disclaimer | `footer.medicalDisclaimer` |

### Replacing images

Drop new images into `public/images/` and update the paths in
`clinicConfig.ts`:

- `doctor.photoUrl` — doctor portrait (recommend 800×1000 portrait)
- `hero.imageUrl` — hero image (recommend 800×1000 portrait)
- The clinic interior image used in the Why Choose Us section is
  referenced directly in `src/components/WhyChooseUs.tsx` (look for
  `/images/clinic-interior.jpg`)

---

## How the WhatsApp appointment flow works

When a patient fills in the appointment form:

1. The form validates name, phone, date, and time on the client side.
2. On submit, a structured WhatsApp message is built:
   ```
   *Appointment Request*
   Usha Clinic — Dr. Aman Rajan

   *Name:* Rahul Sharma
   *Phone:* 98765 43210
   *Preferred date:* 2026-11-20
   *Preferred time:* 09:30 AM
   *Reason for visit:* Fever and body ache
   ```
3. `https://wa.me/<whatsappNumber>?text=<encoded message>` opens in a new tab.
4. The clinic receives the message in WhatsApp — no backend required.

To change the destination WhatsApp number, update
`contact.whatsappNumber` in the config (use the international format
without `+` or spaces, e.g. `919876543210`).

---

## Tech stack

- **React 19** + **TypeScript**
- **Vite** (fast dev server + build)
- **Tailwind CSS 3** (custom medical teal theme in `tailwind.config.js`)
- **Lucide React** for icons (plus 4 custom brand icons in
  `src/components/BrandIcons.tsx` since Lucide v1 removed social icons)
- **No backend** — pure static site, deployable to any static host
  (Vercel, Netlify, Cloudflare Pages, GitHub Pages, S3 + CloudFront, etc.)

---

## Project structure

```
clinic-website/
├── public/
│   ├── favicon.svg
│   └── images/                      # All site images live here
│       ├── doctor-portrait.png
│       ├── consultation.jpg
│       └── clinic-interior.jpg
├── src/
│   ├── config/
│   │   └── clinicConfig.ts          # ★ Single source of truth — edit this
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── Appointment.tsx          # WhatsApp-powered booking form
│   │   ├── Testimonials.tsx         # Clearly marked SAMPLE reviews
│   │   ├── Faq.tsx                  # Accordion
│   │   ├── Contact.tsx              # Map + hours + click-to-call
│   │   ├── Footer.tsx               # Disclaimer + sitemap + social
│   │   ├── FloatingActions.tsx     # Floating WhatsApp + sticky mobile CTA
│   │   └── BrandIcons.tsx           # Inline SVG social icons
│   ├── hooks/
│   │   └── useScrollReveal.ts       # Smooth scroll + reveal animations
│   ├── lib/
│   │   └── links.ts                 # WhatsApp + tel: helpers
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css                    # Tailwind base + custom utilities
├── index.html                      # SEO meta + structured data + fonts
├── tailwind.config.js
└── tsconfig.json
```

---

## Sales pitch checklist (for you)

When demoing to a doctor:

1. **Open the site on your laptop** — hero makes the first impression.
2. **Click "Book Appointment"** in the navbar — scrolls smoothly to the form.
3. **Fill in a sample name + phone + date + time** and click
   "Send Appointment Request" — show how WhatsApp opens with a pre-filled
   structured message (no backend, no monthly fee for booking software).
4. **Scroll to the Contact section** — click "Get directions" to show how
   patients can navigate via Google Maps.
5. **Tap "Call"** — opens the phone dialer on mobile.
6. **Resize to mobile width** (or open on your phone) — show the sticky
   bottom CTA + floating WhatsApp button.
7. **Open `src/config/clinicConfig.ts`** in your editor — show how a
   single file controls everything (clinic name, doctor info, services,
   hours, etc.). Emphasize: "If you sign up today, I'll customize this
   file with your details and you'll be live in 24 hours."

---

## Accessibility

- Semantic HTML5 (`header`, `main`, `section`, `article`, `figure`, `footer`).
- Skip-to-content link for keyboard users.
- Visible focus rings on every interactive element.
- ARIA labels on icon-only buttons.
- `aria-expanded` on accordion triggers.
- Form inputs have associated `<label>` elements.
- Color contrast meets WCAG AA.
- Respects `prefers-reduced-motion`.

---

## Performance

- Production build is ~290 KB JS (87 KB gzipped) + 40 KB CSS (7 KB gzipped).
- Fonts preconnected and loaded with `display=swap`.
- Hero image uses `loading="eager"` + `fetchPriority="high"`.
- All other images use `loading="lazy"`.
- No runtime dependencies beyond React + Lucide.

---

## Before launching for a real clinic

- [ ] Replace `doctor.name`, `doctor.qualifications`, `doctor.specialization`
      with verified information.
- [ ] Replace `doctor.photoUrl` with the actual doctor's photograph
      (with their written consent).
- [ ] Replace `contact.phone`, `contact.phoneDial`, `contact.whatsappNumber`
      with the clinic's real numbers.
- [ ] Replace `location.*` with the real address and Google Maps embed.
- [ ] Replace `hours[]` with the actual opening hours.
- [ ] Review `services[]` — adjust titles and descriptions to match the
      clinic's actual offerings.
- [ ] Replace `testimonials[]` with verified patient reviews (with consent),
      or remove the section entirely and link to Google Business Profile reviews.
- [ ] Verify `faqs[]` reflect the clinic's real policies.
- [ ] Update `social.*` links (or set to `null` to hide).
- [ ] Update the medical disclaimer with the clinic's legal jurisdiction.
- [ ] Update `<title>` and meta tags in `index.html`.
- [ ] Update the structured-data (`MedicalClinic` JSON-LD) in `index.html`.
- [ ] Get the doctor's registration number and add it to
      `doctor.registrationNumber` if displaying.

---

## License for the demo

This is a sales demo. You own the customization work; the underlying
template is yours to reuse for any clinic customer.
