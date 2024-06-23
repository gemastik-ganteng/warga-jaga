import Navbar from "@/components/ui/navbar";
import DokumenBuktiSection from "./sections/DokumenBuktiSection";
import HeaderSection from "./sections/HeaderSection";
import KontakPJSection from "./sections/KontakPJSection";
import PenanggungJawabSection from "./sections/PenanggungJawabSection";

const DokumenLaporanModule = () => {
  return (
    <div className="flex flex-col bg-[#EBF8FE] w-screen min-h-screen p-4 md:pb-24">
      <Navbar />
      <HeaderSection />
      <div className="flex flex-col items-center max-w-3xl mx-auto w-full">
        <PenanggungJawabSection />
        <KontakPJSection />
        <DokumenBuktiSection />
      </div>
    </div>
  );
};

export default DokumenLaporanModule;
