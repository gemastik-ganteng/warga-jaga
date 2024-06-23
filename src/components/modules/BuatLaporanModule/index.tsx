"use client";

import LaporanProvider from "@/components/context/LaporanContext";
import HeaderSection from "./sections/HeaderSection";
import LaporanSection from "./sections/LaporanSection";

const BuatLaporanModule = () => {
  return (
    <LaporanProvider>
      <div className="w-screen min-h-screen flex flex-col px-4 py-4 bg-[#EBF8FE]">
        <HeaderSection />
        <div className="flex flex-col items-center max-w-xl mx-auto w-full">
          <LaporanSection />
        </div>
      </div>
    </LaporanProvider>
  );
};

export default BuatLaporanModule;
