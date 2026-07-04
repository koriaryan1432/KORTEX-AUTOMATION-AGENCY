import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(7, { message: "Phone number must be at least 7 characters." }),
  company: z.string().optional().or(z.literal("")),
  service: z.string().min(1, { message: "Please select a service." }),
  budget: z.string().min(1, { message: "Please select a budget range." }),
  message: z.string().min(5, { message: "Message must be at least 5 characters." }),
});

export const bookingFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(7, { message: "Phone number must be at least 7 characters." }),
  preferredDate: z.string().min(1, { message: "Please select a preferred date." }),
  preferredTime: z.string().min(1, { message: "Please select a preferred time." }),
  businessType: z.string().min(1, { message: "Please select your business type." }),
  message: z.string().optional().or(z.literal("")),
});

export const newsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type BookingFormData = z.infer<typeof bookingFormSchema>;
export type NewsletterFormData = z.infer<typeof newsletterSchema>;
