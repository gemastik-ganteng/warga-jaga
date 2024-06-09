import LaporanAIContentSection from "./sections/ContentSection"
import HeaderSection from "./sections/HeaderSection"

const LaporanAIModule = () => {
    return <div className="w-screen min-h-screen bg-[#EBF8FE] p-4 flex flex-col">
        <HeaderSection/>
        <LaporanAIContentSection/>
    </div>
}

export default LaporanAIModule