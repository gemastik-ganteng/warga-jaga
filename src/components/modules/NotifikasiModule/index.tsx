"use client";

import HeaderSection from "./section/HeaderSection";
import NotifikasiSection from "./section/NotifikasiSection";

const NotifikasiModule = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-start bg-white">
      <HeaderSection />
      <div className="flex flex-col max-w-xl mx-auto w-full">
        <NotifikasiSection />
      </div>
    </div>
  );
};

export default NotifikasiModule;
