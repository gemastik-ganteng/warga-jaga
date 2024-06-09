type LaporanThumbnail = {
    title: string,
    url: string
}

const thumbnails: LaporanThumbnail[] = [
    {
        title: "Laporan Pembegalan",
        url: "./bukti.png"
    },
    {
        title: "Laporan Kekerasan",
        url: "./bukti.png"
    },
    {
        title: "Laporan Pencurian",
        url: "./bukti.png"
    },
]


const AktivitasTerkiniSection = ()=>{
    return <div className="flex flex-col w-full">
        <h1 className="text-center text-xl font-bold"> Aktivitas Terkini</h1>
        <div className="flex justify-start  overflow-x-scroll  my-4 space-x-4">
            {
                thumbnails.map((data, index)=>(
                    <div key={index} className="w-[12rem] h-[6rem] rounded-xl ">
                        <img src={data.url} className="w-full h-full" alt="" />
                    </div>
                ))
            }
        </div>
    </div>
}

export default AktivitasTerkiniSection