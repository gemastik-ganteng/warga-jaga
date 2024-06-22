const STATUS: number = 2

const statuses = [
    {description: "Tahap 1 : Penerimaan Laporan"},
    {description: "Tahap 2 : Pengecekan Berkas"},
    {description: "Tahap 3 : Pemrosesan Laporan"}
]

const StatusLaporanSection = () => {
    return <div className="px-4 flex flex-col space-y-2 mt-3">
        <div className="text-lg">Riwayat Status Laporan</div>
        {statuses.map((status, id) => {
            return <div className={`h-10 text-center flex rounded-lg text-white border-2 border-blue-400 ${(id >= STATUS) ? `bg-slate-300` : `bg-blue-300`}`}>
                <div className="my-auto mx-auto text-slate-50 font-medium" key={id}>{status.description}</div>
            </div>
        })}
    </div>
}

export default StatusLaporanSection