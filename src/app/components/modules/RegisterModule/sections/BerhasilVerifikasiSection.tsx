import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const BerhasilVerifikasiSection = () => {
    const router = useRouter();
    return <div className="flex flex-col w-full items-center">
        <h1 className="text-center font-bold text-xl max-w-[75%]">
        Data Anda berhasil Kami Verifikasi !
      </h1>
      <img className="mt-6" src="/kertas-pensil.svg"/>
      <h1 className="text-center font-semibold text-lg  mt-6 max-w-[75%]">
        Anda sudah bisa menggunakan seluruh fitur di aplikasi WargaJaga
    </h1>
    <Button onClick={()=>{
        router.push("/login")
    }} className="mt-6 w-full max-w-xs">Masuk ke Beranda</Button>
    </div>
   
}

export default BerhasilVerifikasiSection