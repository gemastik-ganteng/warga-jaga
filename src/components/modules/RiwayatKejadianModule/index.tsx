"use client";

import HeaderSection from "./section/HeaderSection";
import RiwayatTileSection from "./section/RiwayatTileSection";

const RiwayatKejadianModule = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-start bg-white">
      <HeaderSection />
      <div className="flex flex-col items-center max-w-5xl mx-auto w-full">
        <RiwayatTileSection />
      </div>
    </div>
  );
};

export default RiwayatKejadianModule;
