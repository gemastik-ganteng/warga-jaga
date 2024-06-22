import Navbar from "@/components/ui/navbar"
import ContentSection from "./sections/ContentSection"
import HeaderSection from "./sections/HeaderSection"

const DetailLaporanModule = ()=> {
    return <div className="w-screen overflow-x-hidden min-h-screen flex flex-col px-4 py-4 bg-[#EBF8FE] pb-24">
        <Navbar/>
        <HeaderSection/>
        <ContentSection/>
    </div>
}

export default DetailLaporanModule