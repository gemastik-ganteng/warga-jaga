import Stack from "@/app/components/elements/Stack"
import SubmitLaporanElement from "../element/SubmitLaporanElement"

const LaporanSection = ()=> {
    return <div className="flex flex-col w-full">
    <div className="flex flex-col w-full mt-8 space-y-4">
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

    </div>
        <SubmitLaporanElement/>
    </div>
}

export default LaporanSection