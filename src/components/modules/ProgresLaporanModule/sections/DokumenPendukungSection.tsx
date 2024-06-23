import { Button } from "@/components/ui/button"

const DokumenPendukungSection = () => {
    return <div className="flex flex-col px-4 space-y-3 justify-center items-center mt-5">
        <div className="text-lg mx-auto md:font-semibold">Dokumen Pendukung</div>

        <Button className="w-60">Detail Laporan</Button>
        <Button variant={"secondary"} className="bg-blue-300 text-white w-60 hover:bg-blue-300">Edit Laporan</Button>
    </div>
}

export default DokumenPendukungSection