"use client"
import { useAuth } from "@/components/context/AuthContext"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Laporan } from "@/types"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"


type LaporanSayaTileInformation = {
    title: string,
    tanggal: string,
    status: string
}

const laporanSayaList: LaporanSayaTileInformation[] = [
    {
        title: "Kasus Pembegalan",
        tanggal: "3 April 2024",
        status: "dikirim"
    },
    {
        title: "Kasus Kekerasan",
        tanggal: "22 Maret 2024",
        status: "dikirim"
    },
    {
        title: "Kasus Pencurian",
        tanggal: "6 Desember 2023",
        status: "Selesai"
    }
]
const ContentSection = ()=> {
    const {userData, loading} = useAuth()
    const router = useRouter()
    const [reports, setReports] = useState<Laporan[]>([])

    useEffect(()=> {
        if(!loading && !userData){
            router.push("/login")
        }
    },[userData, loading])

    useEffect(()=>{
        if(userData){
            fetchLaporanSaya()
        }
    },[userData])

    const fetchLaporanSaya = async () => {
        const res = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL! + "/reports/email/"+userData!.email)
        setReports(res.data)
    }

    return <div className="flex flex-col w-full text-xl font-medium items-center mt-6 px-4">
        <h1 className="font-semibold mb-4 md:font-bold md:text-2xl md:mt-4">Riwayat Laporan</h1>
        <div className="flex flex-col w-full items-center space-y-2 md:space-y-3 md:mt-2">
            {
                reports.map((data, index)=>{
                    return (
                        <Card className="w-full border border-[#2653C7]" key={"data"+index}>
                                <div className="grow ">
                                <div className="flex  w-full h-full my-auto space-x-4  p-2 items-center">
                                    <div className="">
                                        <img src="/Notif.svg"></img>
                                    </div>
                                    <div className="grow flex flex-col truncate">
                                        <h1 className="text-xs">Laporan</h1>
                                        <h1 className="truncate text-base">{data.judul}</h1>
                                        <h1 className="text-xs text-[#2653C7]">{`${data.tanggalKejadian} (Pukul ${data.waktuKejadian})`}</h1>
                                    </div>
                                    <Button className="my-auto  rounded-full text-white text-center bg-[#2653C7] px-4 py-1 text-xs"
                                        onClick={() => router.push("progres-laporan/1")}>Cek Berkas</Button>
                                </div>
                                </div>
                            </Card>
                    )
                })
            }
        </div>
    </div>
}

export default ContentSection