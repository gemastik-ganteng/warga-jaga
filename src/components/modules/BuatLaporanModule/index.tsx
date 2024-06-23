"use client"

import LaporanProvider from "@/components/context/LaporanContext"
import HeaderSection from "./sections/HeaderSection"
import LaporanSection from "./sections/LaporanSection"
import AuthProvider from "@/components/context/AuthContext"

const BuatLaporanModule = ()=> {
    return <AuthProvider>
        <LaporanProvider>
        <div className="w-screen min-h-screen flex flex-col px-4 py-4 bg-[#EBF8FE]">
            <HeaderSection/>
            <LaporanSection/>
        </div>
    </LaporanProvider>
        </AuthProvider>
}

export default BuatLaporanModule