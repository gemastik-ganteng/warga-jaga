import HeaderSection from "./sections/HeaderSection"
import DescriptionSection from "./sections/DescriptionSection"
import DokumenPendukungSection from "./sections/DokumenPendukungSection"
import StatusLaporanSection from "./sections/StatusLaporanSection"
import AuthorityProfileSection from "./sections/AuthorityProfileSection"

const ProgresLaporanModule = () => {
    return <div className="flex flex-col w-screen min-h-screen bg-[#EBF8FE] p-4">
        <HeaderSection/>
        <DescriptionSection/>
        <DokumenPendukungSection/>
        <StatusLaporanSection/>
        <AuthorityProfileSection/>
    </div>
}

export default ProgresLaporanModule