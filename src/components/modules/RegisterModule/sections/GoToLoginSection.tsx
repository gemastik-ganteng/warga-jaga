"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const GoToLoginSection = () => {
    const router = useRouter()
    return (<div className="flex flex-col mt-6 justify-center text-xs mx-auto">
        <p>Sudah mempunyai akun?</p>
        <Button onClick={()=> router.push('/login')} className="mt-1 px-10 py-1">Masuk</Button>
    </div>)
}

export default GoToLoginSection