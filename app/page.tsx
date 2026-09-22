"use client";
import IntroOverlay from "@/components/sections/IntroOverlay";
import HeroSection from "@/components/sections/HeroSection";
import FormalInvitation from "@/components/sections/FormalInvitation";
import Celebrations from "@/components/sections/Celebrations";
import ScheduleTimeline from "@/components/sections/ScheduleTimeline";
import DressCode from "@/components/sections/DressCode";

import CountdownTimer from "@/components/sections/CountdownTimer";
import Footer from "@/components/sections/Footer";
import Maintenance from "@/components/sections/Maintenance";
import SectionDivider from "@/components/ui/SectionDivider";
import { weddingConfig } from "@/lib/wedding-config";

export default function Home() {
  if (weddingConfig.maintenanceMode) {
    return <Maintenance />;
  }

  return (
    <main className="flex flex-col">
      <IntroOverlay />
      <HeroSection />
      <FormalInvitation />
      <CountdownTimer />
      <Celebrations />
      <SectionDivider />
      <ScheduleTimeline />
      <SectionDivider />
      <DressCode />
      <Footer />
    </main>
  );
}