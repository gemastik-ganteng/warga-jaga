"use client"
import { useRouter } from "next/navigation"
import { FaArrowLeft } from "react-icons/fa"

const HeaderSection = () => {
    const router = useRouter()
    
    const navigateBack = () => {
        router.back()
    }

    return <div className="w-full flex">
        <div className="w-8 flex">
            <FaArrowLeft className="my-auto" onClick={navigateBack}/>
        </div>

        <div className="grow flex text-2xl font-semibold justify-center">
            Progress Laporan
        </div>

        <div className="w-8"/>
    </div>
}

export default HeaderSection