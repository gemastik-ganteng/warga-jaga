import { Laporan } from "@/types"

const laporanContent = {
    "deskripsiKejadian": "Perampokan handphone oleh pelaku tidak dikenal. Iphone 15 saya warna biru tiba-tiba dibegal di depan kosan saya di kukusan bahasa, beji, depok depan alfamart oleh pelaku naik motor NMAX plat B. Muka pelaku tidak terlihat karena pake baju hitam dan kacamata hitam serta topi snapback warna abu tua",
    "waktuKejadian": "13.02",
    "jenisTindakan": "Pencurian",
    "tanggalKejadian": "3 April 2024",
    "lokasiKejadian": "Bekasi"
}

const DescriptionSection = ({laporan}: {laporan: any}) => {
    console.log("::",laporan)
    return <div className="flex flex-col px-4 max-w-xl mx-auto w-full">
        <h1 className="font-semibold justify-start text-2xl mt-3">Kasus {laporan.judul}</h1>
        <h3 className="justify-start text-justify text-sm mt-1">{laporan.deskripsi}</h3>

        <h2 className="font-semibold justify-start text-xl mt-3">Waktu Kejadian</h2>
        <h3 className="justify-start text-justify text-sm mt-1">{laporan.tanggalKejadian} Pukul {laporan.waktuKejadian}</h3>

        <h2 className="font-semibold justify-start text-xl mt-3">Jenis Kejahatan</h2>
        <h3 className="justify-start text-justify text-sm mt-1">{laporan.jenisKejahatan}</h3>

        <h2 className="font-semibold justify-start text-xl mt-3">Lokasi Kejadian</h2>
        <h3 className="justify-start text-justify text-sm mt-1">{laporan.lokasiKejadian}</h3>

    </div>
}

export default DescriptionSection