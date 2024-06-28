"use client"
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa"

const HeaderSection = ()=> {
    const router = useRouter();
    const navigateBack = ()=> {
        router.back()
    }
    return <div className="flex  w-full fixed top-0 left-0 z-20 bg-[#EBF8FE] p-4  text-black overflow-x-hidden ">
        <div className="flex w-8">
        <FaArrowLeft onClick={navigateBack} className="my-auto"/>
        </div>
        <div className="grow flex items-center justify-center my-auto text-2xl font-semibold">
            <h1>Detail Laporan</h1>
        </div>
       <div className="w-8 h-4"></div>
    </div>
}
export default HeaderSection