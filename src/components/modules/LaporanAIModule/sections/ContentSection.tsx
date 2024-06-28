"use client"
import { useLaporan } from "@/components/context/LaporanContext";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import FileTile from "../module-elements/FileTile";
import { Laporan } from "@/types";
import { fileToBase64 } from "@/utility/FileService";

const LaporanAIContentSection = () => {

    const {laporan, setLaporan} = useLaporan()
    const [files, setFiles] = useState<File[]>([]);
    const [prompt, setPrompt] = useState<string>("")
    
    const router = useRouter()

    const handleSendLaporan = async () => {
        const buktiPromises = files.map(async (file) => ({
            name: file.name,
            type: file.type,
            base64: await fileToBase64(file)
        }));

        const bukti = await Promise.all(buktiPromises);

        const newLaporan: Laporan = {
            judul: "Pencurian Motor di Wisma Zaenab Kukusan",
            namaPelapor: "Adrian Hamzah",
            jenisTindakan: "Pencurian",
            waktuKejadian: "00.25",
            tanggalKejadian: "28 Juni 2024",
            lokasiKejadian: "Kukusan, Depok",
            deskripsiKejadian: `Pada pukul 16:29 terlihat 2 orang yang mencoba untuk mengambil motor scoopy. Rekaman CCTV menunjukkan seorang pria berpakaian putih dan bertopi sedang mencuri Motor berwarna merah yang terparkir di dekat got. Kejadian terekam pada tanggal dan waktu yang tertera di video CCTV. Pelaku menggunakan helm berwarna merah, berbaju abu abu. Pelaku memiliki postur tubuh yang cukup kecil.
Pelaku dengan hoodie berwarna merah terlihat membawa motor keluar dari rumah. Pelaku mengenakan celana jeans berwarna biru, dibantu oleh satu orang komplotan dengan postur tubuh kecil. Komplotan pelaku mengenakan baju hitam dan celana hitam. ,
            bukti`,
            bukti
        };

        console.log(newLaporan);

        setLaporan(newLaporan);
        router.push("/buat-laporan");
    };
    
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setFiles([...files, file])    
        }
    }
    
    return <div className="grow flex flex-col justify-between p-8 max-w-xl mx-auto">
        <div>
            <div className="text-sm text-center">
                Yuk, Masukan bukti-bukti agar kami mengetahui konteks laporan
            </div>

            <div className="w-full flex flex-col space-y-1 mt-8">
            <label className="text-lg text-black font-semibold">Prompt Pelapor (opsional)</label>
            <input placeholder="Tulis Prompt (Opsional)"
            className="w-full text-sm  text-black border-2 pr-2 pl-8 py-3 border-blue-400 rounded-md" value={prompt}
            onChange={(e) => setPrompt(e.target.value)}/>
        </div>

            <div className="flex flex-col w-full space-y-1 mt-8">
                <label className="text-lg text-black font-semibold">Upload Bukti Kejadian</label>
                <div className="flex items-center justify-center w-full">
                    <label
                    htmlFor="file-upload"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-blue-400 bg-white rounded-md cursor-pointer">

                        <div className="flex flex-col items-center justify-center pt-7 pb-7">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-12 h-12 text-gray-400"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                        </div>
                    <input id="file-upload" type="file" className="opacity-0" onChange={handleFileChange} />
                    </label>
                </div>
                <div className="pt-8">
                <label className="text-lg text-black font-semibold ">Bukti-Bukti Kejadian</label>
                </div>
                {
                    files.length == 0 && <div className="py-16 w-full flex ">
                        <h1 className="text-black text-sm text-center mx-auto">Belum ada bukti. Mohon Upload Bukti Kejadian</h1>
                    </div>
                }
                <div className="flex flex-col items-center space-y-2 w-full">
                    {
                        files.map((data, index)=> {
                            return <FileTile 
                            key={`file-${index}`}
                            file={data} 
                            onDelete={()=>{
                                setFiles(files => files.filter((file)=> file != data))
                            }}
                            />
                        })
                    }
                </div>
            </div>
        </div>

        <div className="flex items-center justify-center mt-8">
            <Button className="font-semibold w-full" onClick={handleSendLaporan}>Generate Laporan Otomatis</Button>
        </div>

    </div>
    
}

export default LaporanAIContentSection