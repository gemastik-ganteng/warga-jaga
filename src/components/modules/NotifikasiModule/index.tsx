"use client";

import HeaderSection from "./section/HeaderSection";
import NotifikasiSection from "./section/NotifikasiSection";

const NotifikasiModule = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-start bg-white">
      <HeaderSection />
      <NotifikasiSection />
    </div>
  );
};

export default NotifikasiModule;
