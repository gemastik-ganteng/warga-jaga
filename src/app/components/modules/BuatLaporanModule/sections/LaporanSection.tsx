"use client"
import Stack from "@/app/components/elements/Stack"
import SubmitLaporanElement from "../element/SubmitLaporanElement"
import { Input } from "@/components/ui/input"
import { useState } from "react"

const LaporanSection = ()=> {
    const [image, setImage] = useState<string | null>(null);
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

    return <div className="flex flex-col w-full">
    <div className="flex flex-col w-full mt-8 space-y-4 mb-4">
        <div className="w-full flex flex-col space-y-1">
            <label className="text-lg text-black font-semibold">Nama Pelapor</label>
            <input placeholder="Tulis nama lengkap Anda" 
            className="w-full text-sm  text-black border-2 pr-2 pl-8 py-3 border-blue-400 rounded-md"/>
        </div>
        <div className="w-full flex flex-col space-y-1">
            <label className="text-lg text-black font-semibold">Jenis Tindakan Kriminal</label>
            <Stack>
            <input  placeholder="Tulis tanggal kejadian" 
            className="w-full text-sm text-black border-2 pr-2 pl-10 py-3 border-blue-400 rounded-md"/>
            <img src="./calendar.svg" className="my-auto ml-auto mr-4" />
            </Stack>
        </div>
        <div className="w-full flex flex-col space-y-1">
            <label className="text-lg text-black font-semibold">Waktu Kejadian</label>
            <Stack>
            <input  placeholder="Tulis waktu kejadian" 
            className="w-full text-sm text-black border-2 pr-2 pl-10 py-3 border-blue-400 rounded-md"/>
            <img src="./clock.svg" className="my-auto ml-4" />
            </Stack>
        </div>
        <div className="w-full flex flex-col space-y-1">
            <label className="text-lg text-black font-semibold">Tanggal Kejadian</label>
            <Stack>
            <input  placeholder="Tulis tanggal kejadian" 
            className="w-full text-sm text-black border-2 pr-2 pl-10 py-3 border-blue-400 rounded-md"/>
            <img src="./calendar.svg" className="my-auto ml-4" />
            </Stack>
        </div>
        <div className="w-full flex flex-col space-y-1">
            <label className="text-lg text-black font-semibold">Lokasi Kejadian</label>
            <input placeholder="Tulis detail lokasi kejadian" 
            className="w-full text-sm  text-black border-2 pr-2 pl-8 py-3 border-blue-400 rounded-md"/>
        </div>
        <div className="w-full flex flex-col space-y-1">
            <label className="text-lg text-black font-semibold">Deskripsi</label>
            <input placeholder="Ceritakan kejadian dengan rinci" 
            className="w-full text-sm  text-black border-2 pr-2 pl-8 py-3 border-blue-400 rounded-md"/>
        </div>
        
        <div className="flex flex-col w-full space-y-1">
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
        <SubmitLaporanElement/>
    </div>
}

export default LaporanSection