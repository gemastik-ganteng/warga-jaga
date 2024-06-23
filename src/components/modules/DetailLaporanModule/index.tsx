import Navbar from "@/components/ui/navbar"
import ContentSection from "./sections/ContentSection"
import HeaderSection from "./sections/HeaderSection"

interface DetailLaporanProps {
    id: string
}

const DetailLaporanModule = ({ id }: DetailLaporanProps)=> {
    return <div className="w-screen overflow-x-hidden min-h-screen flex flex-col px-4 py-4 bg-[#EBF8FE] pb-24">
        <Navbar/>
        <HeaderSection/>
        <ContentSection id={id}/>
    </div>
}

export default DetailLaporanModule