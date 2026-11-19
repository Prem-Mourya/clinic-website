import { useMemo, useState } from "react";
import {
  User,
  Phone,
  Calendar,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  CalendarCheck,
} from "lucide-react";
import { clinicConfig } from "../config/clinicConfig";
import { appointmentWhatsappLink } from "../lib/links";

type FormState = {
  name: string;
  phone: string;
  date: string;
  time: string;
  reason: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const INITIAL: FormState = { name: "", phone: "", date: "", time: "", reason: "" };

const TIME_SLOTS = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
  "07:00 PM",
  "07:30 PM",
  "08:00 PM",
  "08:30 PM",
];

export default function Appointment() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const today = useMemo(() => {
    const d = new Date();
    return d.toISOString().split("T")[0];
  }, []);

  const update =
    (field: keyof FormState) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
      setSuccess(false);
    };

  const validate = (data: FormState): FieldErrors => {
    const next: FieldErrors = {};
    if (!data.name.trim()) {
      next.name = "Please enter your name.";
    } else if (data.name.trim().length < 2) {
      next.name = "Name looks too short.";
    }

    if (!data.phone.trim()) {
      next.phone = "Phone number is required.";
    } else {
      const digits = data.phone.replace(/[^\d]/g, "");
      if (digits.length < 10 || digits.length > 13) {
        next.phone = "Please enter a valid phone number.";
      }
    }

    if (!data.date) next.date = "Please choose a preferred date.";
    if (!data.time) next.time = "Please choose a preferred time.";
    return next;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      // focus first errored field
      const firstKey = Object.keys(found)[0];
      const el = document.getElementById(`appt-${firstKey}`);
      el?.focus();
      return;
    }

    setSubmitting(true);
    // Build the WhatsApp URL and open it. Short timeout to ensure the
    // success state shows before the user is redirected.
    const url = appointmentWhatsappLink({
      name: form.name.trim(),
      phone: form.phone.trim(),
      date: form.date,
      time: form.time,
      reason: form.reason.trim(),
    });

    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
      setSubmitting(false);
      setSuccess(true);
      setForm(INITIAL);
    }, 450);
  };

  return (
    <section id="appointment" className="section relative overflow-hidden bg-ink-50/60">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl" />
      <div className="container-page relative">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
          {/* Left — info */}
          <div className="reveal">
            <p className="eyebrow">Appointment booking</p>
            <h2 className="heading-2 mt-3">
              Book your visit in{" "}
              <span className="text-brand-600">under a minute</span>
            </h2>
            <p className="lead mt-4 max-w-lg">
              Fill in the details below and your appointment request is sent
              straight to the clinic's WhatsApp. We'll confirm your slot during
              working hours.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                {
                  icon: CheckCircle2,
                  title: "Direct to the clinic",
                  desc: "Your request reaches the clinic instantly on WhatsApp — no middlemen, no waiting on hold.",
                },
                {
                  icon: CalendarCheck,
                  title: "Pick a slot that suits you",
                  desc: "Choose your preferred date and time; the clinic will confirm or suggest the closest available slot.",
                },
                {
                  icon: MessageSquare,
                  title: "Share your concern upfront",
                  desc: "Adding a reason for your visit helps the doctor prepare and serve you better.",
                },
              ].map((it) => (
                <li key={it.title} className="flex gap-3.5">
                  <span className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                    <it.icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-ink-900">
                      {it.title}
                    </p>
                    <p className="mt-0.5 text-sm leading-relaxed text-ink-600">
                      {it.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50/70 p-4">
              <p className="flex items-start gap-2 text-sm text-amber-900">
                <AlertCircle className="mt-0.5 h-4 w-4 flex-none" />
                <span>
                  {clinicConfig.contact.emergencyNote}
                </span>
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal" data-delay="150">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl bg-white p-6 shadow-lift ring-1 ring-ink-100 sm:p-8"
            >
              <div className="flex items-center gap-3 border-b border-ink-100 pb-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 text-white">
                  <CalendarCheck className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink-900">
                    Request an appointment
                  </h3>
                  <p className="text-xs text-ink-500">
                    Sent securely to {clinicConfig.clinicName}'s WhatsApp
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {/* Name */}
                <Field
                  id="appt-name"
                  label="Patient Name"
                  icon={<User className="h-4 w-4" />}
                  error={errors.name}
                  colSpan="full"
                >
                  <input
                    id="appt-name"
                    type="text"
                    autoComplete="name"
                    placeholder="e.g. Rahul Sharma"
                    value={form.name}
                    onChange={update("name")}
                    className={inputCls(!!errors.name)}
                  />
                </Field>

                {/* Phone */}
                <Field
                  id="appt-phone"
                  label="Phone Number"
                  icon={<Phone className="h-4 w-4" />}
                  error={errors.phone}
                >
                  <input
                    id="appt-phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="98765 43210"
                    value={form.phone}
                    onChange={update("phone")}
                    className={inputCls(!!errors.phone)}
                  />
                </Field>

                {/* Date */}
                <Field
                  id="appt-date"
                  label="Preferred Date"
                  icon={<Calendar className="h-4 w-4" />}
                  error={errors.date}
                >
                  <input
                    id="appt-date"
                    type="date"
                    min={today}
                    value={form.date}
                    onChange={update("date")}
                    className={inputCls(!!errors.date)}
                  />
                </Field>

                {/* Time */}
                <Field
                  id="appt-time"
                  label="Preferred Time"
                  icon={<Clock className="h-4 w-4" />}
                  error={errors.time}
                  colSpan="full"
                >
                  <select
                    id="appt-time"
                    value={form.time}
                    onChange={update("time")}
                    className={inputCls(!!errors.time)}
                  >
                    <option value="">Select a time slot…</option>
                    {TIME_SLOTS.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </Field>

                {/* Reason */}
                <Field
                  id="appt-reason"
                  label="Reason for Visit"
                  icon={<MessageSquare className="h-4 w-4" />}
                  error={errors.reason}
                  colSpan="full"
                >
                  <textarea
                    id="appt-reason"
                    rows={3}
                    placeholder="Briefly describe your symptoms or concern (optional)"
                    value={form.reason}
                    onChange={update("reason")}
                    className={`${inputCls(!!errors.reason)} resize-none`}
                  />
                </Field>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="btn-primary mt-6 w-full py-3.5 text-[15px]"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Preparing WhatsApp…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Appointment Request
                  </>
                )}
              </button>

              {success && (
                <div
                  role="status"
                  className="mt-4 flex items-start gap-2 rounded-xl border border-brand-200 bg-brand-50 p-3.5 text-sm text-brand-800"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none" />
                  <span>
                    WhatsApp should have opened with your appointment details
                    pre-filled. If it didn't, please message us at{" "}
                    <a
                      href={`https://wa.me/${clinicConfig.contact.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold underline underline-offset-2"
                    >
                      {clinicConfig.contact.whatsappDisplay}
                    </a>
                    .
                  </span>
                </div>
              )}

              <p className="mt-4 text-center text-[11px] text-ink-400">
                By submitting, you agree to be contacted by the clinic about
                your appointment. Your information is shared only with the
                clinic.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function inputCls(error: boolean) {
  return [
    "w-full rounded-xl border bg-white px-3.5 py-3 text-sm text-ink-900 placeholder:text-ink-400",
    "transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-brand-100",
    error
      ? "border-red-300 focus:border-red-400"
      : "border-ink-200 hover:border-ink-300 focus:border-brand-500",
  ].join(" ");
}

function Field({
  id,
  label,
  icon,
  error,
  colSpan,
  children,
}: {
  id: string;
  label: string;
  icon: React.ReactNode;
  error?: string;
  colSpan?: "full";
  children: React.ReactNode;
}) {
  return (
    <div className={colSpan === "full" ? "sm:col-span-2" : ""}>
      <label
        htmlFor={id}
        className="mb-1.5 flex items-center gap-1.5 text-sm font-semibold text-ink-800"
      >
        <span className="text-brand-600">{icon}</span>
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1 flex items-center gap-1 text-xs text-red-600">
          <AlertCircle className="h-3.5 w-3.5" />
          {error}
        </p>
      )}
    </div>
  );
}
