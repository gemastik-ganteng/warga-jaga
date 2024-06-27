"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const DokumenPendukungSection = ({id}: any) => {
    const router = useRouter()
    return <div className="flex flex-col px-4 space-y-3 justify-center items-center mt-5 max-w-xl mx-auto w-full">
        <div className="text-lg mx-auto">Dokumen Pendukung</div>

        <Button className="w-60" onClick={() => router.push(`/detail-laporan/${id}`)}>Detail Laporan</Button>
        <Button variant={"secondary"} className="bg-blue-300 text-white w-60 hover:bg-blue-300">Edit Laporan</Button>
    </div>
}

export default DokumenPendukungSection