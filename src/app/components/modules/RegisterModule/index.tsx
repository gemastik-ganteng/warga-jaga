"use client"
import { useState } from "react"
import GoToLoginSection from "./sections/GoToLoginSection"
import HeaderRegisterSection from "./sections/HeaderSection"
import RegisterBoxSection from "./sections/RegisterBoxSection"
import OTPSection from "./sections/OTPSection"
import IntroVerifikasiKTPSection from "./sections/IntroVerifikasiKTPSection"
import VerifikasiKTPSection from "./sections/VerifikasiKTPSection"
import BerhasilVerifikasiSection from "./sections/BerhasilVerifikasiSection"
import axios from "axios";
import { RegisterRequestDTO } from "@/types"

type RegisterPhase = {
    step: 'REGISTER' | 'OTP' | 'INTRO_VERIFIKASI_KTP' |'VERIFIKASI_KTP' | 'COMPLETE'
}

export default function RegisterSection() {
    const [phase, setPhase] = useState<RegisterPhase>({step: 'REGISTER'})

    const navigateTo = ( newStep: 'REGISTER' | 'OTP' | 'INTRO_VERIFIKASI_KTP' |'VERIFIKASI_KTP' | 'COMPLETE')=> {
        setPhase({
            step: newStep
        });
    }

   

    return (
        <div className="w-screen min-h-screen flex flex-col items-center justify-center px-4 bg-[#EBF8FE]">
            
            {
                phase.step === 'REGISTER' && <div className="flex flex-col w-full items-center">
                    <HeaderRegisterSection/>
                    <RegisterBoxSection onNavigateToNextStep={()=>{
                        console.log('HERE')
                        navigateTo('OTP')
                    }}/>
                    <GoToLoginSection/>
                </div>
            }

            {
                phase.step === 'OTP' && <div className="flex flex-col w-full items-center">
                    <HeaderRegisterSection/>
                    <OTPSection nextStep={()=> navigateTo('INTRO_VERIFIKASI_KTP')}/>
                </div>
            }
            {
                phase.step === 'INTRO_VERIFIKASI_KTP' && <IntroVerifikasiKTPSection nextStep={function (): void {
                    navigateTo('VERIFIKASI_KTP')
                } }/>
            }
            {
                phase.step === 'VERIFIKASI_KTP' && <VerifikasiKTPSection complete={()=>{
                    navigateTo('COMPLETE')
                }}/>
            }
            {
                phase.step === 'COMPLETE' && <BerhasilVerifikasiSection/>
            }
        </div>
    )
}
