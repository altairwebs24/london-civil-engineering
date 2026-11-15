import { z } from "zod";

import { whatsappUrl } from "@/lib/site-media";

const serviceOptions = [
  "Construction & engineering",
  "Plans & technical drawings",
  "Storm-water services",
  "General project enquiry",
] as const;

export const bookingServices = serviceOptions;

function localDateString(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export const bookingRequestSchema = z.object({
  name: z.string().trim().min(2, "Enter your name.").max(100, "Name must be 100 characters or less."),
  phone: z
    .string()
    .trim()
    .min(1, "Enter a phone number.")
    .max(25, "Phone number must be 25 characters or less.")
    .regex(/^[+()\-\s\d]+$/, "Use only numbers and common phone punctuation.")
    .refine((value) => {
      const digits = value.replace(/\D/g, "").length;
      return digits >= 7 && digits <= 15;
    }, "Enter a phone number with 7 to 15 digits."),
  service: z.enum(serviceOptions, { error: "Choose a service." }),
  preferredDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Choose a valid date.")
    .refine((value) => {
      const parsedDate = new Date(`${value}T00:00:00Z`);
      return !Number.isNaN(parsedDate.getTime()) && parsedDate.toISOString().slice(0, 10) === value;
    }, "Choose a valid date.")
    .refine((value) => value >= localDateString(), "Choose today or a future date."),
  details: z.string().trim().max(1000, "Project details must be 1,000 characters or less."),
});

export type BookingRequest = z.infer<typeof bookingRequestSchema>;

export function getBookingMinimumDate() {
  return localDateString();
}

export function createBookingWhatsAppUrl(booking: BookingRequest) {
  const message = [
    "Hello London Group, I’d like to request a project consultation.",
    `Name: ${booking.name}`,
    `Phone: ${booking.phone}`,
    `Service: ${booking.service}`,
    `Preferred date: ${booking.preferredDate}`,
    booking.details ? `Project details: ${booking.details}` : undefined,
  ]
    .filter((line): line is string => Boolean(line))
    .join("\n");

  const url = new URL(whatsappUrl);
  url.searchParams.set("text", message);
  return url.toString();
}