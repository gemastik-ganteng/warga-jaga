import ContentSection from "./sections/ContentSection";
import HeaderSection from "./sections/HeaderSection";

const HelpModule = () => {
  return (
    <div className="w-screen min-h-screen bg-[#EBF8FE] p-4 flex flex-col">
      <HeaderSection />
      <div className="flex flex-col items-center max-w-3xl mx-auto w-full">
        <ContentSection />
      </div>
    </div>
  );
};

export default HelpModule;
