"use client"

import AuthProvider from "@/components/context/AuthContext"
import GoToRegisterSection from "./sections/GoToRegisterSection"
import HeaderSection from "./sections/HeaderSection"
import LoginBoxSection from "./sections/LoginBoxSection"

const LoginModule = ()=> {
    return <AuthProvider>
                <div className="w-screen min-h-screen flex flex-col justify-center px-4 bg-[#EBF8FE]">
                    <div className="flex flex-col items-center mx-auto max-w-2xl w-full">
                        <HeaderSection/>
                        <LoginBoxSection/>
                        <GoToRegisterSection/>
                    </div>
                </div>
           </AuthProvider>
}

export default LoginModule