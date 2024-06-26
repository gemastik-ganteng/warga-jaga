"use client"
import Navbar from "@/components/ui/navbar";
import ContentSection from "./sections/ContentSection";
import HeaderSection from "./sections/HeaderSection";
import AuthProvider from "@/components/context/AuthContext";

const LaporanSayaModule = () => {
  return (
    <div className="w-screen overflow-x-hidden min-h-screen flex flex-col px-4 py-4 bg-[#EBF8FE]">
      <Navbar />
      <HeaderSection />
      <div className="flex flex-col items-center max-w-3xl mx-auto w-full">
        <AuthProvider>
        <ContentSection/>
        </AuthProvider>
      </div>
    </div>
  );
};

export default LaporanSayaModule;
