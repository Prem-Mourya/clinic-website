/**
 * ============================================================
 *  CLINIC CONFIG — Single source of truth for the website.
 * ============================================================
 *
 *  To customize this demo for a new clinic, edit the values
 *  below — every section reads from this file. Items marked
 *  [REPLACE] should be updated before launching for a real
 *  clinic.
 *
 *  Tip: you can also override the WhatsApp number, phone,
 *  address, map link, and services without touching any
 *  component code.
 * ============================================================
 */

export type Service = {
  id: string;
  title: string;
  description: string;
  /** Lucide icon name; resolved in the Services component. */
  icon: string;
};

export type Testimonial = {
  id: string;
  /** SAMPLE — clearly marked in UI; replace with real reviews. */
  sample: boolean;
  name: string;
  location: string;
  rating: number; // 1..5
  quote: string;
};

export type Faq = {
  id: string;
  question: string;
  answer: string;
};

export type DayHours = { day: string; hours: string; closed?: boolean };

export const clinicConfig = {
  // [REPLACE] — Display name & branding
  clinicName: "Usha Clinic",
  tagline: "Trusted General Physician & Family Healthcare",
  logoMark: "UC", // shown in navbar square if no logo image is set
  logoImageUrl: null as string | null, // e.g. "/images/logo.png" — overrides logoMark

  // [REPLACE] — Doctor information
  doctor: {
    name: "Dr. Aman Rajan",
    qualifications: "MBBS, MD (General Medicine)",
    specialization: "General Physician",
    yearsExperience: 12, // 0 means "show as fresh"; keep as a number
    experienceLabel: "12+ years caring for families",
    photoUrl: "/images/doctor-portrait.png",
    photoAlt: "Portrait of the consulting doctor in a white coat",
    intro:
      "Dr. Aman Rajan is a general physician who believes healthcare should feel personal, calm, and unhurried. " +
      "He takes the time to listen carefully, explain diagnoses in plain language, and build long-term relationships with every patient and family he treats.",
    approach:
      "Every consultation starts with listening. Whether it's a routine checkup or a complex concern, the goal is the same — clear explanations, an honest assessment, and a treatment plan you actually understand and can follow.",
    // [REPLACE] Registration details only if you want to display them.
    registrationNumber: null as string | null,
  },

  // [REPLACE] — Contact details
  contact: {
    phone: "+91 98765 43210", // display string
    phoneDial: "+919876543210", // tel: href
    whatsappNumber: "919876543210", // wa.me/<number>, no + or spaces
    whatsappDisplay: "+91 98765 43210",
    email: "hello@ushaclinic.example",
    emergencyNote: "For medical emergencies, please call 108 or visit the nearest emergency room.",
  },

  // [REPLACE] — Clinic address & map
  location: {
    addressLine1: "123 Main Road, Near City Park",
    addressLine2: "Bengaluru, Karnataka 560001",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560001",
    /**
     * Embed-friendly Google Maps URL. To replace:
     * 1) Open Google Maps, search the clinic.
     * 2) Share → Embed a map → copy the `src` URL.
     */
    mapEmbedUrl:
      "https://www.google.com/maps?q=Bengaluru,Karnataka&output=embed",
    /** Opens driving directions in Google Maps on the user's device. */
    mapDirectionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Bengaluru+Karnataka+560001",
  },

  // [REPLACE] — Opening hours
  hours: [
    { day: "Monday", hours: "9:00 AM – 1:00 PM, 5:00 PM – 9:00 PM" },
    { day: "Tuesday", hours: "9:00 AM – 1:00 PM, 5:00 PM – 9:00 PM" },
    { day: "Wednesday", hours: "9:00 AM – 1:00 PM, 5:00 PM – 9:00 PM" },
    { day: "Thursday", hours: "9:00 AM – 1:00 PM, 5:00 PM – 9:00 PM" },
    { day: "Friday", hours: "9:00 AM – 1:00 PM, 5:00 PM – 9:00 PM" },
    { day: "Saturday", hours: "9:00 AM – 1:00 PM" },
    { day: "Sunday", hours: "Closed", closed: true },
  ] as DayHours[],

  // [REPLACE] — Social links (set to null to hide)
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: null as string | null,
    youtube: null as string | null,
  },

  // [REPLACE] — Services offered
  services: [
    {
      id: "general-consultation",
      title: "General Consultation",
      description:
        "Comprehensive diagnosis and treatment for everyday health concerns, with clear explanations and a calm, unhurried approach.",
      icon: "stethoscope",
    },
    {
      id: "fever-infection",
      title: "Fever & Infection Care",
      description:
        "Prompt evaluation of fever, cold, and infections — accurate diagnosis, the right medication, and follow-up until you fully recover.",
      icon: "thermometer",
    },
    {
      id: "diabetes",
      title: "Diabetes Management",
      description:
        "Long-term diabetes care — lifestyle guidance, medication review, and routine monitoring to keep blood sugar steady and complications away.",
      icon: "activity",
    },
    {
      id: "blood-pressure",
      title: "Blood Pressure Management",
      description:
        "Hypertension evaluation and ongoing care — helping you understand your readings, medication, and the lifestyle changes that actually work.",
      icon: "heart-pulse",
    },
    {
      id: "preventive-checkups",
      title: "Preventive Health Checkups",
      description:
        "Routine screening packages to catch risks early — full body checkups tailored to your age, family history, and lifestyle.",
      icon: "shield-plus",
    },
    {
      id: "seasonal-illness",
      title: "Seasonal Illness Consultation",
      description:
        "Quick relief for flu, allergies, and seasonal infections — including preventive advice for the whole family.",
      icon: "wind",
    },
  ] as Service[],

  // SAMPLE TESTIMONIALS — clearly labeled in UI as samples.
  // Replace with verified patient reviews before launch.
  testimonials: [
    {
      id: "t1",
      sample: true,
      name: "Sample Patient",
      location: "Sample review — replace with verified patient feedback",
      rating: 5,
      quote:
        "This is a sample testimonial used only for the demo. After onboarding, replace it with real reviews collected from your patients.",
    },
    {
      id: "t2",
      sample: true,
      name: "Sample Patient",
      location: "Sample review — replace with verified patient feedback",
      rating: 5,
      quote:
        "Sample testimonials help you preview the layout. Always obtain written consent before publishing a patient's name or feedback.",
    },
    {
      id: "t3",
      sample: true,
      name: "Sample Patient",
      location: "Sample review — replace with verified patient feedback",
      rating: 5,
      quote:
        "You can also link genuine reviews from Google Business Profile instead of using static testimonials here.",
    },
  ] as Testimonial[],

  faqs: [
    {
      id: "f1",
      question: "How can I book an appointment?",
      answer:
        "You can book an appointment in three ways: use the appointment form on this page (it sends your details straight to the clinic's WhatsApp), call the clinic directly, or send a WhatsApp message during working hours.",
    },
    {
      id: "f2",
      question: "What are the clinic timings?",
      answer:
        "The clinic is open Monday to Friday, 9:00 AM to 1:00 PM and 5:00 PM to 9:00 PM. Saturday morning session runs from 9:00 AM to 1:00 PM. Sundays are closed. Timings may change on public holidays.",
    },
    {
      id: "f3",
      question: "Where is the clinic located?",
      answer:
        "The clinic is centrally located with easy access by public transport and car. Use the 'Get Directions' button in the contact section to open turn-by-turn directions in Google Maps.",
    },
    {
      id: "f4",
      question: "How can I contact the doctor?",
      answer:
        "For appointments and general queries, call the clinic number or message us on WhatsApp during working hours. For medical emergencies, please call 108 or visit the nearest emergency room.",
    },
    {
      id: "f5",
      question: "Do I need an appointment before visiting?",
      answer:
        "Appointments are recommended to minimize your waiting time, but walk-in patients are welcome. Severe or urgent cases are always prioritized.",
    },
  ] as Faq[],

  // Hero content
  hero: {
    headline: "Your Health Deserves Personal Attention.",
    subheading:
      "Professional healthcare, personalized attention, and compassionate medical guidance for you and your family.",
    primaryCta: "Book an Appointment",
    secondaryCta: "Contact Clinic",
    // Trust strip — generic and accurate; no fabricated numbers.
    trust: [
      { label: "Consultation", value: "By appointment & walk-in" },
      { label: "Patient Care", value: "Personalized, unhurried" },
      { label: "Accessibility", value: "Easy location, central area" },
    ],
    // Image credit: replace with your own clinic photography.
    imageUrl: "/images/consultation.jpg",
    imageAlt: "Doctor consulting a patient in a clean, well-lit clinic room",
  },

  // Footer
  footer: {
    medicalDisclaimer:
      "The information on this website is for general awareness only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified physician regarding any medical condition. In an emergency, call 108 or visit the nearest emergency room.",
    copyrightYear: new Date().getFullYear(),
  },
} as const;

export type ClinicConfig = typeof clinicConfig;
