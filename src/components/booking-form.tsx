import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight } from "lucide-react";
import { Controller, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  bookingRequestSchema,
  bookingServices,
  createBookingWhatsAppUrl,
  getBookingMinimumDate,
  type BookingRequest,
} from "@/lib/booking";

export function BookingForm() {
  const [notice, setNotice] = useState("");
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<BookingRequest>({
    resolver: zodResolver(bookingRequestSchema),
    defaultValues: { name: "", phone: "", service: undefined, preferredDate: "", details: "" },
  });

  const submitBooking = (values: BookingRequest) => {
    const checkedBooking = bookingRequestSchema.safeParse(values);
    if (!checkedBooking.success) return;

    const whatsappWindow = window.open(createBookingWhatsAppUrl(checkedBooking.data), "_blank");
    if (whatsappWindow) {
      whatsappWindow.opener = null;
    } else {
      window.location.assign(createBookingWhatsAppUrl(checkedBooking.data));
    }
    setNotice("Your request is ready in WhatsApp. Review it there and press send.");
  };

  return (
    <form className="booking-form" noValidate onSubmit={handleSubmit(submitBooking)}>
      <div className="booking-field">
        <Label htmlFor="booking-name">Your name</Label>
        <Input
          id="booking-name"
          autoComplete="name"
          maxLength={100}
          placeholder="Name and surname"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "booking-name-error" : undefined}
          {...register("name")}
        />
        {errors.name && <p className="booking-error" id="booking-name-error">{errors.name.message}</p>}
      </div>

      <div className="booking-field">
        <Label htmlFor="booking-phone">Phone number</Label>
        <Input
          id="booking-phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          maxLength={25}
          placeholder="e.g. 076 123 4567"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "booking-phone-error" : undefined}
          {...register("phone")}
        />
        {errors.phone && <p className="booking-error" id="booking-phone-error">{errors.phone.message}</p>}
      </div>

      <div className="booking-field">
        <Label htmlFor="booking-service">Service</Label>
        <Controller
          control={control}
          name="service"
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger
                id="booking-service"
                aria-invalid={Boolean(errors.service)}
                aria-describedby={errors.service ? "booking-service-error" : undefined}
              >
                <SelectValue placeholder="Choose a service" />
              </SelectTrigger>
              <SelectContent>
                {bookingServices.map((service) => <SelectItem key={service} value={service}>{service}</SelectItem>)}
              </SelectContent>
            </Select>
          )}
        />
        {errors.service && <p className="booking-error" id="booking-service-error">{errors.service.message}</p>}
      </div>

      <div className="booking-field">
        <Label htmlFor="booking-date">Preferred date</Label>
        <Input
          id="booking-date"
          type="date"
          min={getBookingMinimumDate()}
          aria-invalid={Boolean(errors.preferredDate)}
          aria-describedby={errors.preferredDate ? "booking-date-error" : undefined}
          {...register("preferredDate")}
        />
        {errors.preferredDate && <p className="booking-error" id="booking-date-error">{errors.preferredDate.message}</p>}
      </div>

      <div className="booking-field booking-field-wide">
        <Label htmlFor="booking-details">Project details <span>(optional)</span></Label>
        <Textarea
          id="booking-details"
          maxLength={1000}
          placeholder="Tell us a little about the work you have in mind."
          aria-invalid={Boolean(errors.details)}
          aria-describedby={errors.details ? "booking-details-error" : undefined}
          {...register("details")}
        />
        {errors.details && <p className="booking-error" id="booking-details-error">{errors.details.message}</p>}
      </div>

      <div className="booking-submit-row">
        <Button type="submit" size="lg">Continue in WhatsApp <ArrowUpRight aria-hidden="true" /></Button>
        {notice && <p className="booking-notice" role="status">{notice}</p>}
      </div>
    </form>
  );
}