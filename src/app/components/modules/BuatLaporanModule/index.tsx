"use client"
import { LaporanProvider } from "@/components/context/LaporanContext"
import HeaderSection from "./sections/HeaderSection"
import LaporanSection from "./sections/LaporanSection"

const BuatLaporanModule = ()=> {
    return <LaporanProvider>
        <div className="w-screen min-h-screen flex flex-col px-4 py-4 bg-[#EBF8FE]">
            <HeaderSection/>
            <LaporanSection/>
        </div>
    </LaporanProvider>
}

export default BuatLaporanModule