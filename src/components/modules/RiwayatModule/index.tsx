"use client";

import Navbar from "@/components/ui/navbar";
import DataTerkiniSection from "./section/DataTerkiniSection";
import HeaderSection from "./section/HeaderSection";
import HeroSection from "./section/HeroSection";

const HistoryModule = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-center pb-20 bg-white">
      <Navbar />
      <HeaderSection />
      <div className="flex flex-col items-center max-w-5xl mx-auto w-full">
        <HeroSection />
        <DataTerkiniSection />
      </div>
    </div>
  );
};

export default HistoryModule;
