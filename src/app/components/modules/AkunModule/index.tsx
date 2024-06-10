"use client";

import BahasaSection from "./section/BahasaSection";
import ButtonSection from "./section/ButtonSection";
import HeaderSection from "./section/HeaderSection";
import PreferensiSection from "./section/PreferensiSection";
import ProfileSection from "./section/ProfileSection";

const AkunModule = () => {
  return (
      <div className="w-screen min-h-screen flex flex-col justify-start bg-white">
        <HeaderSection />
        <ProfileSection />
        <PreferensiSection />
        <BahasaSection />
        <ButtonSection />
      </div>
  );
};

export default AkunModule;
