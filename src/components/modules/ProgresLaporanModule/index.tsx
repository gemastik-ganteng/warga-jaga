import HeaderSection from "./sections/HeaderSection"
import DescriptionSection from "./sections/DescriptionSection"
import DokumenPendukungSection from "./sections/DokumenPendukungSection"
import StatusLaporanSection from "./sections/StatusLaporanSection"
import AuthorityProfileSection from "./sections/AuthorityProfileSection"
import axios from "axios"
import { Laporan } from "@/types"

interface ProgresLaporanProps {
    id: string
}

const ProgresLaporanModule = async ({ id }: ProgresLaporanProps) => {
    // const id = pa
    let laporan;
    let data: Laporan | undefined = undefined;
    let kumpulanFoto: string[] = [];
    let kumpulanFotoResponse;
    console.log("::::",id)

    try{
        laporan = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/reports/${id}`)
        console.log("laporan.data: ",laporan.data)
        laporan = laporan.data
        // console.log(data?.files)
    }
    catch{
    }
    console.log("---",laporan)

    return <div className="flex flex-col w-screen min-h-screen bg-[#EBF8FE] p-4">
        <HeaderSection/>
        <DescriptionSection laporan={laporan}/>
        <DokumenPendukungSection id={laporan._id}/>
        <StatusLaporanSection/>
        <AuthorityProfileSection/>
    </div>
}

export default ProgresLaporanModule