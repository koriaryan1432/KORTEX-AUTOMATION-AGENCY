import nodemailer from "nodemailer";

interface LeadNotificationInput {
  name: string;
  email: string;
  phone: string;
  company?: string | null;
  service: string;
  budget: string;
  message: string;
}

interface BookingNotificationInput {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  businessType: string;
  message?: string | null;
}

export async function sendLeadNotification(lead: LeadNotificationInput) {
  console.log("📨 [Notification] New Lead Registered:", lead);

  // Ready for production credentials
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = parseInt(process.env.SMTP_PORT || "587");
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const toEmail = process.env.NOTIFICATION_EMAIL || "koriaryan.dev@gmail.com";

  if (!smtpHost || !smtpUser || !smtpPass) {
    console.warn("⚠️ SMTP credentials not fully configured in environment. Skipping email sending, logging details to console instead.");
    return { success: true, mocked: true };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: `"AI Agency System" <${smtpUser}>`,
      to: toEmail,
      subject: `🚨 New Lead: ${lead.name} (${lead.company || "No Company"})`,
      html: `
        <h2>New Lead Details</h2>
        <p><strong>Name:</strong> ${lead.name}</p>
        <p><strong>Email:</strong> ${lead.email}</p>
        <p><strong>Phone:</strong> ${lead.phone}</p>
        <p><strong>Company:</strong> ${lead.company || "N/A"}</p>
        <p><strong>Interested In:</strong> ${lead.service}</p>
        <p><strong>Budget Range:</strong> ${lead.budget}</p>
        <p><strong>Message:</strong></p>
        <blockquote style="background: #f4f4f4; padding: 10px; border-left: 5px solid #00f0ff;">
          ${lead.message}
        </blockquote>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("📨 Email sent successfully:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("❌ Error sending email notification:", error);
    return { success: false, error };
  }
}

export async function sendBookingNotification(booking: BookingNotificationInput) {
  console.log("📨 [Notification] New Booking Call Registered:", booking);

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = parseInt(process.env.SMTP_PORT || "587");
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const toEmail = process.env.NOTIFICATION_EMAIL || "koriaryan.dev@gmail.com";

  if (!smtpHost || !smtpUser || !smtpPass) {
    console.warn("⚠️ SMTP credentials not fully configured in environment. Skipping email booking notification.");
    return { success: true, mocked: true };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: `"AI Agency System" <${smtpUser}>`,
      to: toEmail,
      subject: `📅 New Call Booked: ${booking.name}`,
      html: `
        <h2>New Meeting Request Details</h2>
        <p><strong>Name:</strong> ${booking.name}</p>
        <p><strong>Email:</strong> ${booking.email}</p>
        <p><strong>Phone:</strong> ${booking.phone}</p>
        <p><strong>Preferred Date:</strong> ${booking.preferredDate}</p>
        <p><strong>Preferred Time:</strong> ${booking.preferredTime}</p>
        <p><strong>Business Type:</strong> ${booking.businessType}</p>
        <p><strong>Message/Notes:</strong></p>
        <blockquote style="background: #f4f4f4; padding: 10px; border-left: 5px solid #a855f7;">
          ${booking.message || "N/A"}
        </blockquote>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("📨 Booking Email sent successfully:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("❌ Error sending booking notification:", error);
    return { success: false, error };
  }
}
