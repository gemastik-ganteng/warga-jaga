"use client"
import { useRouter } from "next/navigation"
import { FaArrowLeft } from "react-icons/fa"

const HeaderSection = () => {
    const router = useRouter()

    const navigateBack = () => {
        router.back()
    }

    return <div className="flex w-full">
        <div className="flex w-8">
            <FaArrowLeft onClick={navigateBack} className="my-auto"/>
        </div>

        <div className="grow flex justify-center">
            <h1 className="text-2xl font-semibold">Isi dengan AI</h1>
        </div>

        <div className="flex w-8"/>
    </div>
}

export default HeaderSection