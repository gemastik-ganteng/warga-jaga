"use client";

import HeaderSection from "./section/HeaderSection";
import RiwayatTileSection from "./section/RiwayatTileSection";

const RiwayatKejadianModule = () => {
  return (
      <div className="w-screen min-h-screen flex flex-col justify-start bg-white">
        <HeaderSection />
        <RiwayatTileSection />
      </div>
  );
};

export default RiwayatKejadianModule;
