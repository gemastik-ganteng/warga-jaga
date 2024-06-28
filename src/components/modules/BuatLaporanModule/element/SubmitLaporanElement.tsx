import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"


type SubmitLaporanElementProps = {
	onClick: ()=> void
}

const SubmitLaporanElement: React.FC<SubmitLaporanElementProps> = ({onClick})=> {
	const router = useRouter();

    return     (
    <AlertDialog>
			<AlertDialogTrigger asChild>
				<Button onClick={onClick}>Kirim </Button>
			</AlertDialogTrigger>
			<AlertDialogContent className="px-1 bg-[#EBF8FE]">
				<AlertDialogHeader>
					<AlertDialogTitle className="mx-auto">Berhasil Membuat Laporan</AlertDialogTitle>
					<AlertDialogDescription className="text-wrap text-justify px-3">
						Anda berhasil membuat laporan baru dan Anda 
						memiliki 1x kesempatan apabila Anda ingin mengubah 
						detail laporan yang Anda baru saja buat. Batas waktu 
						mengubah detail laporan hanya 2 jam setelah laporan 
						dibuat. Sementara, laporan Anda sudah dikirimkan ke 
						Pihak Kepolisian, dan akan diproses oleh kantor 
						kepolisian terdekat dari lokasi Anda. Mohon tunggu 
						kelanjutan penindakan laporan Anda dan lihat status 
						laporan Anda di fitur “Laporan Saya”.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogAction onClick={() => router.push('/')} className="mx-auto">Kembali ke Beranda</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
  	</AlertDialog>
		)
}

export default SubmitLaporanElement