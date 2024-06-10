import { FaArrowLeft } from "react-icons/fa"

const HeaderSection = () => {
    return <div className="flex w-full">
        <div className="flex w-8">
            <FaArrowLeft className="my-auto"/>
        </div>

        <div className="flex grow text-2xl font-semibold justify-center">
            Progress Laporan
        </div>

        <div className="flex w-8"/>
    </div>
}

export default HeaderSection