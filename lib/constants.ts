import { 
  Bot, 
  PhoneCall, 
  Network, 
  MessageSquare, 
  Mail, 
  UserPlus, 
  Workflow, 
  Cpu, 
  LayoutDashboard,
  Building,
  ShoppingCart,
  Stethoscope,
  GraduationCap,
  Store,
  Briefcase,
  Users,
  Compass
} from "lucide-react";

export const SERVICES = [
  {
    id: "ai-chatbots",
    title: "AI Chatbots",
    description: "24/7 web agents that engage visitors and qualify leads in real-time.",
    benefit: "+35% Conversion",
    iconName: "Bot"
  },
  {
    id: "ai-voice-agents",
    title: "AI Voice Agents",
    description: "Natural voice bots that execute outbound dials and schedule appointments.",
    benefit: "Zero Support Wait",
    iconName: "PhoneCall"
  },
  {
    id: "crm-automation",
    title: "CRM Automation",
    description: "Instant data bridging between workflows and tools like HubSpot & Salesforce.",
    benefit: "99% Clean Data",
    iconName: "Network"
  },
  {
    id: "whatsapp-automation",
    title: "WhatsApp Automation",
    description: "Broadcasting pipelines and customer updates synced to mobile numbers.",
    benefit: "98% Open Rate",
    iconName: "MessageSquare"
  },
  {
    id: "email-automation",
    title: "Email Automation",
    description: "Context-aware campaigns and follow-ups responding in minutes.",
    benefit: "3.5x More Replies",
    iconName: "Mail"
  },
  {
    id: "lead-gen-automation",
    title: "Lead Gen Automation",
    description: "Autonomous lead extraction and automated cold outreach engines.",
    benefit: "15+ Leads / Week",
    iconName: "UserPlus"
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    description: "Connecting legacy software and databases through custom script wrappers.",
    benefit: "-12 Hrs / Week",
    iconName: "Workflow"
  },
  {
    id: "custom-ai-agents",
    title: "Custom AI Agents",
    description: "Specialized LLM cognitive architectures performing complex logical loops.",
    benefit: "100% Custom Rules",
    iconName: "Cpu"
  },
  {
    id: "business-dashboards",
    title: "Business Dashboards",
    description: "Real-time admin control portals tracking metrics and database records.",
    benefit: "Full Live Control",
    iconName: "LayoutDashboard"
  }
];

export const INDUSTRIES = [
  {
    id: "real-estate",
    industry: "Real Estate",
    problem: "Out-of-hours leads are missed.",
    solution: "AI qualifies buyers and books visits.",
    benefit: "3.5x Bookings increase",
    iconName: "Building"
  },
  {
    id: "ecommerce",
    industry: "E-commerce",
    problem: "Support ticket backlogs.",
    solution: "Chatbot answers shipping FAQs.",
    benefit: "60% Case reduction",
    iconName: "ShoppingCart"
  },
  {
    id: "healthcare",
    industry: "Healthcare Clinics",
    problem: "Hours wasted on phone reminders.",
    solution: "Auto voice and WhatsApp bookings.",
    benefit: "85% Less no-shows",
    iconName: "Stethoscope"
  },
  {
    id: "education",
    industry: "Education Institutes",
    problem: "Staff overloaded by basic admissions FAQs.",
    solution: "Admissions bot queries guidelines.",
    benefit: "90% Response speedup",
    iconName: "GraduationCap"
  },
  {
    id: "local-businesses",
    industry: "Local Businesses",
    problem: "Missed phone call revenue leakages.",
    solution: "Voice bot handles phone queries.",
    benefit: "Capture 100% demand",
    iconName: "Store"
  },
  {
    id: "agencies",
    industry: "Agencies",
    problem: "Slow, manual client onboarding.",
    solution: "Automation triggers folders & Slack.",
    benefit: "Setup under 3 minutes",
    iconName: "Briefcase"
  },
  {
    id: "coaches",
    industry: "Coaches & Consultants",
    problem: "Hours filtering calendar applicants.",
    solution: "Forms qualify profiles beforehand.",
    benefit: "100% Qualified sales calls",
    iconName: "Users"
  },
  {
    id: "saas",
    industry: "SaaS Companies",
    problem: "High drop-off on first-time login.",
    solution: "AI monitors inactivity and prompts guides.",
    benefit: "+22% User retention",
    iconName: "Compass"
  }
];

export const INTEGRATIONS = [
  { name: "WhatsApp", category: "Messaging" },
  { name: "Gmail", category: "Email" },
  { name: "Google Sheets", category: "Data" },
  { name: "Slack", category: "Communication" },
  { name: "Notion", category: "Productivity" },
  { name: "HubSpot", category: "CRM" },
  { name: "Zapier", category: "Automation" },
  { name: "Make.com", category: "Automation" },
  { name: "Calendly", category: "Scheduling" },
  { name: "Shopify", category: "E-commerce" },
  { name: "WordPress", category: "CMS" },
  { name: "Custom APIs", category: "Development" }
];

export const CASE_STUDIES = [
  {
    id: "real-estate-qualification",
    title: "Lead Qualification Engine",
    industry: "Real Estate",
    problem: "Losing 40% of out-of-office leads.",
    solution: "WhatsApp qualifier qualifies budgets and triggers calendar invites.",
    result: "42% Tour increase",
    toolsUsed: ["WhatsApp API", "Make.com", "HubSpot", "GPT-4o"]
  },
  {
    id: "ecommerce-support-agent",
    title: "Support Bot Automation",
    industry: "E-commerce",
    problem: "Repetitive shipping queries clogged support logs.",
    solution: "Shopify integration fetches tracking and handles refunds.",
    result: "68% Auto-resolutions",
    toolsUsed: ["Next.js", "Shopify API", "Pinecone DB", "LangChain"]
  },
  {
    id: "clinic-scheduler",
    title: "Clinic Voice Scheduler",
    industry: "Healthcare Clinics",
    problem: "15% No-show rate on clinic slots.",
    solution: "Voice AI schedules slots and triggers WhatsApp follow-ups.",
    result: "Under 3% No-shows",
    toolsUsed: ["Vapi", "Google Calendar", "Twilio", "Make.com"]
  },
  {
    id: "agency-onboarding",
    title: "Onboarding Orchestration",
    industry: "Marketing Agency",
    problem: "Onboarding manual steps delayed starts by 5 days.",
    solution: "Portal trigger builds Slack, folders, and dispatches briefs.",
    result: "2 min Onboarding",
    toolsUsed: ["React", "Zapier", "Slack API", "Prisma"]
  }
];

export const TESTIMONIALS = [
  {
    quote: "Qualifies leads and syncs CRM data instantly. What used to be a full day's work is now completely automated.",
    author: "Daniel Reyes",
    role: "Chief Operations Officer",
    company: "LuminaTech",
    badge: "3.5x Bookings"
  },
  {
    quote: "Our support ticket volume was slashed by 65% in the first month. The integration was completely seamless.",
    author: "Sarah Mitchell",
    role: "VP of Digital Transformation",
    company: "Nexora",
    badge: "-65% Support Load"
  },
  {
    quote: "This isn't a cheap chatbot. It connects directly with our custom API keys and database tables flawlessly.",
    author: "Priya Nair",
    role: "Head of Innovation",
    company: "Altara Global",
    badge: "99.8% Accuracy"
  }
];

export const PRICING_PLANS = [
  {
    name: "Starter Automation",
    price: "$990",
    period: "setup fee",
    description: "Automate lead capture and scheduling.",
    features: [
      "1 Custom Workflow",
      "Web Chatbot / Form Automation",
      "Google Sheets & Email sync",
      "2 Weeks post-launch support",
      "Standard error fallbacks"
    ],
    cta: "Book Call",
    popular: false
  },
  {
    name: "Growth Automation",
    price: "$2,490",
    period: "setup fee",
    description: "Optimize pipelines and CRM syncs.",
    features: [
      "3-5 Connected Workflows",
      "HubSpot / Salesforce Sync",
      "WhatsApp Outreach Flows",
      "Analytical ROI Dashboard",
      "4 Weeks support updates",
      "Human-in-the-loop validation"
    ],
    cta: "Book Call",
    popular: true
  },
  {
    name: "Custom AI System",
    price: "Custom",
    period: "project-based",
    description: "Enterprise cognitive agent architectures.",
    features: [
      "Unlimited AI Agent nodes",
      "Low-latency Voice Outreach bots",
      "Proprietary Database RAG systems",
      "Custom Admin control portal",
      "Dedicated Slack Priority SLA",
      "SLA runtime guarantees"
    ],
    cta: "Contact Team",
    popular: false
  }
];

export const FAQS = [
  {
    question: "What is an AI automation agency?",
    answer: "An AI automation agency builds connected cognitive workflows, custom AI chatbots, and voice bots to automate administrative operations, qualification loops, and database syncing."
  },
  {
    question: "Can AI automation work for my business?",
    answer: "Yes. If your staff spends time routing data between systems, qualifications, or answer repetitive FAQs, those tasks can be automated."
  },
  {
    question: "Do I need technical skills?",
    answer: "No. We handle development, configuration, database mapping, and provide video handoff guides and monitoring control dashboards."
  },
  {
    question: "Can you integrate with our current CRM?",
    answer: "Yes. We connect to HubSpot, Salesforce, Slack, Gmail, Notion, Shopify, Zapier, Make, and proprietary custom REST APIs."
  },
  {
    question: "Is our business data secure?",
    answer: "Yes. We enforce secure environment configs, Sandbox sandboxing, role-based database permissions, and human gateways."
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery Call",
    description: "We locate bottlenecks and manual operations wasting your hours."
  },
  {
    step: "02",
    title: "Automation Blueprint",
    description: "We map out visual workflow triggers, database models, and API integrations."
  },
  {
    step: "03",
    title: "Build & Integrate",
    description: "Our engineers build your agent engines and securely link your stack."
  },
  {
    step: "04",
    title: "Testing & Safeguards",
    description: "We test boundary exceptions, fallback limits, and human check-off boxes."
  },
  {
    step: "05",
    title: "Launch & Support",
    description: "We deploy live, train your employees, and monitor live API execution logs."
  }
];

export const SECURITY_FEATURES = [
  {
    title: "Secure API Vault",
    description: "System database keys are encrypted at rest."
  },
  {
    title: "Human Approval Gateways",
    description: "High-impact actions prompt a click verification."
  },
  {
    title: "Safe Fallback Loops",
    description: "Undetermined intents alert a staff member automatically."
  },
  {
    title: "Activity Auditories",
    description: "Every webhook state is logged to the admin dashboard."
  }
];
