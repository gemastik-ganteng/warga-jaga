import { Button } from "@/components/ui/button"

const ContentSection = ()=> {
    return <div className="flex flex-col w-full items-center mt-6 px-4">
        <h1 className="text-3xl font-bold text-black">Kasus Pembegalan</h1>
        <img src="/bukti.png" className="w-full mt-6 h-auto rounded-2xl"></img>
        <h1 className=" underline mt-6 text-lg">Jl. Haji Sinda Raya, Kukusan, Depok</h1>
        <h1 className="font-medium">1/4/2024 Pukul 23.05</h1>
        <p className="mt-6 text-sm text-justify">Pada 3 Maret 2024, sekitar pukul 23.05, terjadi insiden pembegalan di Jalan Haji Sinda Raya, Depok. Kejadian bermula saat korban yang sedang mengendarai sepeda motor dihentikan oleh dua orang pelaku yang mengendarai motor matik berwarna hitam. Salah satu pelaku, yang mengenakan jaket kulit hitam dan helm full face, mengancam korban dengan senjata tajam dan berhasil mengambil dompet serta ponsel korban. Korban, yang tidak mengalami luka serius, segera melaporkan kejadian tersebut ke polisi terdekat.</p>
        <p className="mt-3 text-sm text-justify">Polisi yang menangani kasus ini dengan cepat mengidentifikasi ciri-ciri pelaku dan kendaraan yang digunakan berkat keterangan korban dan CCTV di lokasi kejadian. Dalam waktu 24 jam, kedua pelaku berhasil ditangkap saat bersembunyi di sebuah rumah kontrakan di area Pancoran Mas. Setelah proses investigasi dan pengadilan, kedua pelaku dihukum penjara masing-masing selama 8 tahun. Kasus ini secara resmi dinyatakan selesai dan korban telah mendapatkan kembali barang-barang yang dicuri.</p>
        <Button className="font-normal mt-6">Unduh Data Detail Laporan</Button>
    </div>
}

export default ContentSection