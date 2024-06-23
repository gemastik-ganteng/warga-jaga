import Navbar from "@/components/ui/navbar";
import ContentSection from "./sections/ContentSection";
import HeaderSection from "./sections/HeaderSection";

const LaporanSayaModule = () => {
  return (
    <div className="w-screen overflow-x-hidden min-h-screen flex flex-col px-4 py-4 bg-[#EBF8FE]">
      <Navbar />
      <HeaderSection />
      <div className="flex flex-col items-center max-w-3xl mx-auto w-full">
        <ContentSection />
      </div>
    </div>
  );
};

export default LaporanSayaModule;
