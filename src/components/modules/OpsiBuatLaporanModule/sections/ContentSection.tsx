
const ContentSection = ()=> {
    return <div className="grid w-fit my-auto p-4 gap-y-4  mx-auto">
        <a href="/buat-laporan" className="flex w-full p-2  zjustify-between  items-center">
            <div className="w-32 h-32 min-h-32 min-w-32 bg-[#2653C7] rounded-lg flex justify-center items-center">
                <img src="/add-laporan.svg"></img>
            </div>
            <h1 className="text-center font-bold p-4 ">Isi Laporan Manual</h1>
        </a>
        <a href="/laporan-ai" className="flex justify-center  w-full p-2  items-center">
            <div className="w-32 h-32 min-h-32 min-w-32 bg-[#2653C7] rounded-lg flex justify-center items-center">
                <img src="/ai.svg"></img>
            </div>
            <h1 className=" text-center font-bold p-4">Isi Laporan dengan AI</h1>
        </a>
    </div>
}

export default ContentSection