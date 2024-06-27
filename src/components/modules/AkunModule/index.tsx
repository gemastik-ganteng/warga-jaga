"use client";

import Navbar from "@/components/ui/navbar";
import BahasaSection from "./section/BahasaSection";
import ButtonSection from "./section/ButtonSection";
import HeaderSection from "./section/HeaderSection";
import PreferensiSection from "./section/PreferensiSection";
import ProfileSection from "./section/ProfileSection";
import AuthProvider from "@/components/context/AuthContext";

const AkunModule = () => {
  return (
    <AuthProvider>
      <div className="w-screen min-h-screen flex flex-col justify-start bg-white pb-24">
        <Navbar />
        <HeaderSection />
        <div className="flex flex-col items-center max-w-xl mx-auto w-full">
          <ProfileSection />
          <PreferensiSection />
          <BahasaSection />
          <ButtonSection />
        </div>
      </div>
    </AuthProvider>
  );
};

export default AkunModule;
