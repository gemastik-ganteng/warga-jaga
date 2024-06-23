"use client"
import Navbar from "@/components/ui/navbar"
import GreetingSection from "./sections/GreetingSection"
import HeaderSection from "./sections/HeaderSection"
import QuickActionSection from "./sections/QuickActionSection"
import StatistikLaporanSection from "./sections/StatistikLaporanSection"
import AuthProvider from "@/components/context/AuthContext"

const HomepageModule = () => {
    return <AuthProvider>
            <div className="w-screen min-h-screen bg-[#EBF8FE] px-4 flex flex-col">
                <div className="flex flex-col items-center mx-auto max-w-5xl w-full">
                <Navbar/>
                <HeaderSection/>
                <GreetingSection/>
                <QuickActionSection/>
                <StatistikLaporanSection/>
                </div>
            </div>
            </AuthProvider> 
    }

export default HomepageModule