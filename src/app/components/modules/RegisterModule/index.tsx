"use client"
import GoToLoginSection from "./sections/GoToLoginSection"
import HeaderRegisterSection from "./sections/HeaderSection"
import RegisterBoxSection from "./sections/RegisterBoxSection"

export default function RegisterSection() {
    return (
        <div className="w-screen min-h-screen flex flex-col items-center justify-center px-4 bg-[#EBF8FE]">
            <HeaderRegisterSection/>
            <RegisterBoxSection/>
            <GoToLoginSection/>
        </div>
    )
}
