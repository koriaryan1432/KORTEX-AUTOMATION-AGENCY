import React from "react";
import Hero from "@/components/sections/Hero";
import ProblemSection from "@/components/sections/ProblemSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import WorkflowSection from "@/components/sections/WorkflowSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import IntegrationsSection from "@/components/sections/IntegrationsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import SecuritySection from "@/components/sections/SecuritySection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ServicesSection />
      <WhyChooseUs />
      <WorkflowSection />
      <IndustriesSection />
      <IntegrationsSection />
      <ProcessSection />
      <SecuritySection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
