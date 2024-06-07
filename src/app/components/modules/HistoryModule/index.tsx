"use client";

import DataTerkiniSection from "./section/DataTerkiniSection";
import HeaderSection from "./section/HeaderSection";
import HeroSection from "./section/HeroSection";

const HistoryModule = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-center bg-white">
      <HeaderSection />
      <HeroSection />
      <DataTerkiniSection />
    </div>
  );
};

export default HistoryModule;