import { FaArrowLeft } from "react-icons/fa"

const HeaderSection = ()=> {
    return <div className="grid grid-cols-3  w-full  text-black">
        <div className="flex w-full h-full">
        <FaArrowLeft className="my-auto"/>
        </div>
        <div className=" self-center my-auto text-2xl font-bold">
            <h1>Buat Laporan</h1>
        </div>
        <div>

        </div>
    </div>
}
export default HeaderSection