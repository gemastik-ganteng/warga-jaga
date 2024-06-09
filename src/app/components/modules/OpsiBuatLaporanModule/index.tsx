import ContentSection from "./sections/ContentSection"
import HeaderSection from "./sections/HeaderSection"

const OpsiBuatLaporanModule = ()=> {
    return <div className="w-screen overflow-x-hidden min-h-screen flex flex-col px-4 py-4 bg-[#EBF8FE]">
        <HeaderSection/>
        <ContentSection/>
    </div>
}

export default OpsiBuatLaporanModule