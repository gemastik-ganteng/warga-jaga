import Navbar from "@/components/ui/navbar"
import ContentSection from "./sections/ContentSection"
import HeaderSection from "./sections/HeaderSection"

const DetailLaporanModule = ()=> {
    return <div className="w-screen overflow-x-hidden min-h-screen flex flex-col px-4 py-4 bg-[#EBF8FE] pb-24">
        <Navbar/>
        <HeaderSection/>
        <div className="flex flex-col max-w-xl mx-auto w-full">
          <ContentSection/>
        </div>
    </div>
}

export default DetailLaporanModule