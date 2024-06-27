import axios from "axios";
import ContentSection from "./sections/ContentSection";
import HeaderSection from "./sections/HeaderSection";

const DaftarLaporanModule = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/reports`)
  const report = res.data
  console.log("isa", report)
  return (
    <div className="w-screen min-h-screen flex flex-col justify-start bg-white">
      <HeaderSection />
      <div className="flex flex-col items-center max-w-5xl mx-auto w-full">
        <ContentSection riwayatKejadianList={report}/>
      </div>
    </div>
  );
};

export default DaftarLaporanModule;
