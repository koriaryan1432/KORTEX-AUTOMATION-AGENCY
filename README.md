# Kortex Automation | Premium AI Automation Agency Website

Kortex Automation is a premium, fully responsive, and animated full-stack AI Automation Agency platform built using **Next.js 16**, **Tailwind CSS v4**, **Framer Motion**, and **Prisma ORM** with **SQLite** for development.

## 🚀 Key Features

*   **Design Aesthetics**: Futuristic Premium Dark SaaS design, smooth layout grids, glowing borders, custom typography, and glassmorphic cards.
*   **Animated Interactive Sections**:
    *   **Hero**: Real-time simulated node execution lines and terminal log stream.
    *   **Workflow**: Multi-stage logical loop timelines switcher.
    *   **Industries & Solutions**: Interactive market problem/solution visual switcher.
    *   **Integrations**: Infinite scrolling Category logo marquee.
    *   **Process**: Vertical timeline stepper.
*   **Functional Backend API Endpoints**:
    *   **Contact Lead Capturing**: Zod-validated input schema, database logging, and Nodemailer-ready email notifications layout.
    *   **Meeting Booking System**: Zod-validated schedules, date/time range parsing, and database reservation engine.
    *   **Newsletter Magnet**: Deduplication, AJAX responses, and dashboard sync.
*   **Operations Control Dashboard (`/admin`)**:
    *   View all Leads, Bookings, and Subscribers.
    *   Filter Leads by status and search by name/email/company.
    *   Update lead status (NEW, CONTACTED, CALL_BOOKED, PROPOSAL_SENT, CLOSED, LOST) dynamically in the database.
    *   Save custom follow-up notes for each lead.

---

## 🛠️ Tech Stack & Dependencies

*   **Frontend**: Next.js App Router, React, TypeScript, Tailwind CSS v4, Framer Motion, Lucide React
*   **Backend**: Next.js API Routes, Prisma ORM
*   **Database**: SQLite (local development) / PostgreSQL (production-ready)
*   **Form Validation**: Zod
*   **Notification Engine**: Nodemailer (SMTP)

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory (based on `.env.example`):

```env
# Database Connection URL (SQLite)
DATABASE_URL="file:./dev.db"

# SMTP Mail Settings (Nodemailer notifications to owner)
# If omitted, notifications are mocked and logged to the console
SMTP_HOST="smtp.example.com"
SMTP_PORT=587
SMTP_USER="username@example.com"
SMTP_PASS="your-password"
NOTIFICATION_EMAIL="owner@example.com"
```

---

## 📦 Setup & Installation

### 1. Install Packages
```bash
npm install
```

### 2. Generate Prisma Client & Migrate Database
Run the initial database setup migrations:
```bash
npx prisma migrate dev --name init
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the client-facing website.
To view the **Admin Control Panel**, navigate to [http://localhost:3000/admin](http://localhost:3000/admin) and log in with the placeholder password: `admin123`.

---

## 🏗️ Production Build & Verification

To verify that the Next.js compiler builds successfully without type checking errors:

```bash
npm run build
```

---

## 🚀 Deployment

The easiest way to deploy this platform is to use the **Vercel Platform**:

1.  Push the code to your GitHub repository.
2.  Import the repository inside Vercel.
3.  Configure the Environment Variables (`DATABASE_URL`, `SMTP_HOST`, etc.).
4.  Add a production database (e.g. Supabase or Neon PostgreSQL).
    *   To switch Prisma to PostgreSQL in production, update `datasource db { provider = "postgresql" }` in `prisma/schema.prisma` and run `npx prisma db push`.
5.  Click Deploy.
