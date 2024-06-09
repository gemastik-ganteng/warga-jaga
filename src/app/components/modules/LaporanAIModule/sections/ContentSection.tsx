"use client"
import { useLaporan } from "@/components/context/LaporanContext";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LaporanAIContentSection = () => {
    const [image, setImage] = useState<string | null>(null);
    const {laporan, setLaporan} = useLaporan()
    const router = useRouter()

    const handleSendLaporan = () => {
        setLaporan({
            namaPelapor: "Andi Mulyandi",
            jenisTindakan: "Penculikan",
            waktuKejadian: "12.30",
            tanggalKejadian: "12 Oktober 2023",
            lokasiKejadian: "Depok",
            deskripsiKejadian: "Ada penculikan, tolong diusut ya",
            bukti: [{
                url: "./bukti.png",
                type: "IMAGE"
            },{
                url: "./bukti.png",
                type: "IMAGE"
            }]
        })

        router.push("/buat-laporan")
    }

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            if (typeof reader.result === 'string') {
            setImage(reader.result);
            }
        };
        reader.readAsDataURL(file);
        }
    };

    return <div className="grow flex flex-col justify-between p-8">
        <div>
            <div className="text-left text-sm">
                Yuk, Masukan bukti agar kami mengetahui konteks laporan
            </div>

            <div className="flex w-full justify-between mt-6">
                <div className="bg-[#2653C7] w-14 h-14 rounded-sm"/>
                <div className="bg-[#2653C7] w-14 h-14 rounded-sm"/>
                <div className="bg-[#2653C7] w-14 h-14 rounded-sm"/>
                <div className="bg-[#2653C7] w-14 h-14 rounded-sm"/>
            </div>

            <div className="flex flex-col w-full space-y-1 mt-8">
                <label className="text-lg text-black font-semibold">Upload Bukti Kejadian</label>
                <div className="flex items-center justify-center w-full">
                    <label
                    htmlFor="file-upload"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-blue-400 bg-white rounded-md cursor-pointer">
                    {image ? (
                        <img src={image} alt="Uploaded" className="object-contain h-full w-full py-1" />
                    ) : (
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
                    )}
                    <input id="file-upload" type="file" className="opacity-0" onChange={handleImageChange} />
                    </label>
                </div>
            </div>
        </div>

        <div>
            <Button className="font-semibold" onClick={handleSendLaporan}>Generate Laporan Otomatis</Button>
        </div>

    </div>
    
}

export default LaporanAIContentSection