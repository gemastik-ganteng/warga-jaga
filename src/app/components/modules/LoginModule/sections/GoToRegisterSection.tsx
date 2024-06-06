import { useRouter } from "next/navigation"

const GoToRegisterSection = ()=> {
    const router = useRouter();
    const handleLink = ()=>{
        router.push("/register")
    }
    return <div className="flex flex-col items-center text-center text-xs mx-auto mt-6 text-black">
        <p>Belum mempunyai akun?</p>
        <button onClick={handleLink} className="mt-1 rounded-lg text-white bg-blue-400 px-10 py-1">
            Daftar
        </button>
    </div>
}

export default GoToRegisterSection