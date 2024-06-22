const StatistikLaporanSection = ()=> {
    return <div className="flex flex-col w-full items-center p-4 mt-10">
        <h1 className="text-xl text-[#2653C7] font-bold">Statistik Laporan</h1>
        <div className="grid grid-cols-3 p-4 gap-4">
        <a style={{
                    background: "radial-gradient(50% 50% at 50% 50%, rgba(198, 210, 241, 0.6), rgba(153, 174, 228, 0.1))"
                }} className="w-full aspect-square rounded-lg  flex flex-col text-center items-center p-3">
                <h1 className="text-[40px] text-[#2653C7] font-bold">10</h1>
                <h1>Laporan dibuat</h1>
            </a>
            <a style={{
                    background: "radial-gradient(50% 50% at 50% 50%, rgba(198, 210, 241, 0.6), rgba(153, 174, 228, 0.1))"
                }} className="w-full aspect-square rounded-lg  flex flex-col text-center items-center p-3">
                <h1 className="text-[40px] text-[#2653C7] font-bold">10</h1>
                <h1>Laporan Selesai</h1>
            </a>
            <a style={{
                    background: "radial-gradient(50% 50% at 50% 50%, rgba(198, 210, 241, 0.6), rgba(153, 174, 228, 0.1))"
                }} className="w-full aspect-square rounded-lg  flex flex-col text-center items-center p-3">
                <h1 className="text-[40px] text-[#2653C7] font-bold">10</h1>
                <h1>Laporan dibuat</h1>
            </a>
        </div>
    </div>
}

export default StatistikLaporanSection