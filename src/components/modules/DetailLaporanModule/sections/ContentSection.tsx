import { Button } from "@/components/ui/button"
import {Laporan } from "@/types";
import axios from "axios"
import BuktiSection from "./BuktiSection";

const ContentSection = async ({id}: any)=> {
    let laporan;
    let data: Laporan | undefined = undefined;
    let kumpulanFoto: string[] = [];
    let kumpulanFotoResponse;

    try{
        laporan = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/reports/${id}`)
        console.log("laporan.data: ",laporan.data)
        data = laporan.data
        console.log(data?.files)
        console.log(":::::::" + data)
        if (data) {
            console.log("MASUK2")
            kumpulanFotoResponse = await axios.post
            (`${process.env.NEXT_PUBLIC_BACKEND_URL}/reports/bukti`, { laporanId: data._id })
            console.log("MASUK")
            kumpulanFoto = kumpulanFotoResponse.data as string[]
        }
    }
    catch{
    }

    return (data ? 
        <div className="flex flex-col w-full items-center mt-6 px-4 max-w-xl mx-auto">
            <h1 className="text-3xl font-bold text-black mb-4">{data.judul}</h1>
            <BuktiSection  base64List={kumpulanFoto} />
            <h1 className=" underline mt-6 text-lg">{data.lokasiKejadian}</h1>
            <h1 className="font-medium">{data.tanggalKejadian} Pukul {data.waktuKejadian}</h1>
            <p className="mt-6 text-sm text-justify">{data.deskripsi}</p>
            <Button className="font-normal mt-6">Unduh Data Detail Laporan</Button>
        </div> : 
        <div className="mx-auto my-auto">ID laporan tidak ditemukan</div>
    )
}

export default ContentSection