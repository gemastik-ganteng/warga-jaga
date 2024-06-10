"use client";

import HeaderSection from "./section/HeaderSection";
import ProfileSection from "./section/ProfileSection";

const AkunModule = () => {
  return (
      <div className="w-screen min-h-screen flex flex-col justify-start bg-white">
        <HeaderSection />
        <ProfileSection />
      </div>
  );
};

export default AkunModule;
