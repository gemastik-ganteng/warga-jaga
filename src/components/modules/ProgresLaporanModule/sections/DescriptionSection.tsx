const laporanContent = {
    "deskripsiKejadian": "Perampokan handphone oleh pelaku tidak dikenal. Iphone 15 saya warna biru tiba-tiba dibegal di depan kosan saya di kukusan bahasa, beji, depok depan alfamart oleh pelaku naik motor NMAX plat B. Muka pelaku tidak terlihat karena pake baju hitam dan kacamata hitam serta topi snapback warna abu tua",
    "waktuKejadian": "13.02",
    "jenisTindakan": "Pencurian",
    "tanggalKejadian": "3 April 2024",
    "lokasiKejadian": "Bekasi"
}

const DescriptionSection = () => {
    return <div className="flex flex-col px-4 mt-4">
        <h1 className="font-semibold justify-start text-2xl mt-3">Kasus {laporanContent.jenisTindakan}</h1>
        <h3 className="justify-start text-justify text-sm mt-1 md:mt-0 md:text-base">{laporanContent.deskripsiKejadian}</h3>

        <h2 className="font-semibold justify-start text-xl mt-3">Waktu Kejadian</h2>
        <h3 className="justify-start text-justify text-sm mt-1 md:mt-0 md:text-base">{laporanContent.tanggalKejadian} Pukul {laporanContent.waktuKejadian}</h3>

        <h2 className="font-semibold justify-start text-xl mt-3">Jenis Kejahatan</h2>
        <h3 className="justify-start text-justify text-sm mt-1 md:mt-0 md:text-base">{laporanContent.jenisTindakan}</h3>

        <h2 className="font-semibold justify-start text-xl mt-3">Lokasi Kejadian</h2>
        <h3 className="justify-start text-justify text-sm mt-1 md:mt-0 md:text-base">{laporanContent.lokasiKejadian}</h3>

    </div>
}

export default DescriptionSection