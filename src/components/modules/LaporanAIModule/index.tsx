"use client"

import LaporanProvider from "@/components/context/LaporanContext"
import LaporanAIContentSection from "./sections/ContentSection"
import HeaderSection from "./sections/HeaderSection"

const LaporanAIModule = () => {
    return <LaporanProvider>
        <div  className="w-screen min-h-screen bg-[#EBF8FE] p-4 flex flex-col">
            <div className="flex flex-col w-full  ">
            <HeaderSection/>
            <LaporanAIContentSection/>
            </div>
        </div>
    </LaporanProvider>
}

export default LaporanAIModule