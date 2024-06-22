"use client"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { useRouter } from "next/navigation"


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
    const router = useRouter()
    return <div className="flex flex-col w-full text-xl font-medium items-center mt-6 px-4">
        <h1 className="font-semibold mb-4">Riwayat Laporan</h1>
        <div className="flex flex-col w-full items-center space-y-2">
            {
                laporanSayaList.map((data, index)=>{
                    return (
                        <Card className="w-full border border-[#2653C7]" key={"data"+index}>
                                <div className="grow ">
                                <div className="flex  w-full h-full my-auto space-x-4  p-2 items-center">
                                    <div className="">
                                        <img src="/Notif.svg"></img>
                                    </div>
                                    <div className="grow flex flex-col">
                                        <h1 className="text-xs">Laporan</h1>
                                        <h1 className="truncate text-base">{data.title}</h1>
                                        <h1 className="text-xs text-[#2653C7]">{`${data.tanggal}(${data.status})`}</h1>
                                    </div>
                                    <Button className="my-auto rounded-full text-white text-center bg-[#2653C7] px-4 py-1 text-xs"
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