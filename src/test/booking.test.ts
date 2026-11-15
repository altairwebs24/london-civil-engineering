import { afterEach, describe, expect, it, vi } from "vitest";

import {
  bookingRequestSchema,
  createBookingWhatsAppUrl,
  getBookingMinimumDate,
} from "@/lib/booking";

describe("WhatsApp booking requests", () => {
  afterEach(() => vi.useRealTimers());

  it("opens a prefilled WhatsApp draft for the supplied business number", () => {
    const url = new URL(createBookingWhatsAppUrl({
      name: "Sam Test",
      phone: "076 123 4567",
      service: "Storm-water services",
      preferredDate: "2026-12-12",
      details: "Drainage assessment",
    }));

    expect(`${url.origin}${url.pathname}`).toBe("https://wa.me/27766889366");
    expect(url.searchParams.get("text")).toContain("Service: Storm-water services");
    expect(url.searchParams.get("text")).toContain("Project details: Drainage assessment");
  });

  it("accepts a valid request and requires today or a later date", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-11-15T07:00:00Z"));

    const baseRequest = {
      name: "Sam Test",
      phone: "076 123 4567",
      service: "Construction & engineering",
      details: "",
    };

    expect(getBookingMinimumDate()).toBe("2026-11-15");
    expect(bookingRequestSchema.safeParse({ ...baseRequest, preferredDate: "2026-11-15" }).success).toBe(true);
    expect(bookingRequestSchema.safeParse({ ...baseRequest, preferredDate: "2026-11-14" }).success).toBe(false);
  });

  it("rejects unsafe or oversized form values before building a WhatsApp link", () => {
    const result = bookingRequestSchema.safeParse({
      name: "",
      phone: "076abc123",
      service: "Unknown service",
      preferredDate: "2026-99-45",
      details: "x".repeat(1001),
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues.length).toBeGreaterThanOrEqual(4);
    }
  });
});