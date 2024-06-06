"use client"

import GoToRegisterSection from "./sections/GoToRegisterSection"
import HeaderSection from "./sections/HeaderSection"
import LoginBoxSection from "./sections/LoginBoxSection"

const LoginModule = ()=> {
    return <div className="w-screen min-h-screen flex flex-col justify-center px-4 bg-[#EBF8FE]">
        <HeaderSection/>
        <LoginBoxSection/>
        <GoToRegisterSection/>
    </div>
}

export default LoginModule