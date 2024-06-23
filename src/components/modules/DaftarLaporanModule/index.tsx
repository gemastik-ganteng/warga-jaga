import ContentSection from "./sections/ContentSection";
import HeaderSection from "./sections/HeaderSection";

const DaftarLaporanModule = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-start bg-white">
      <HeaderSection />
      <div className="flex flex-col items-center max-w-5xl mx-auto w-full">
        <ContentSection />
      </div>
    </div>
  );
};

export default DaftarLaporanModule;
