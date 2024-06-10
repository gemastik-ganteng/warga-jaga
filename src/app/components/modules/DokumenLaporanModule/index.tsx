import Navbar from "@/components/ui/navbar"
import DokumenBuktiSection from "./sections/DokumenBuktiSection"
import HeaderSection from "./sections/HeaderSection"
import KontakPJSection from "./sections/KontakPJSection"
import PenanggungJawabSection from "./sections/PenanggungJawabSection"

const DokumenLaporanModule = () => {
    return <div className="flex flex-col bg-[#EBF8FE] w-screen min-h-screen p-4">
        <Navbar/>
        <HeaderSection/>
        <PenanggungJawabSection/>
        <KontakPJSection/>
        <DokumenBuktiSection/>
    </div>
}

export default DokumenLaporanModule