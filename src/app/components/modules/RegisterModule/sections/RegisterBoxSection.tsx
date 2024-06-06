"use client"
import Stack from "@/app/components/elements/Stack";
import { useRouter } from "next/navigation";
import { useState } from "react";

const RegisterBoxSection = ()=> {
		const [nama, setNama] = useState<string>("");
		const [phone, setPhone] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const router = useRouter();

    const handleLogin = ()=>{

        router.push("/")
    }


    return <div className="flex w-full flex-col space-y-4 text-black mt-4 px-8">

        <div className="flex flex-col w-full text-sm">
            <Stack>
            <input placeholder="Nama Lengkap (Sesuai KTP)" value={nama}
            onChange={(e)=> setNama(e.currentTarget.value)} className="w-full text-black border-2 pr-4 pl-10 py-3 border-blue-400 rounded-md"/>
            </Stack>
        </div>
        <div className="flex flex-col w-full text-sm">
        <Stack>
            <input placeholder="No. Telepon" value={phone}
            onChange={(e)=> setPhone(e.currentTarget.value)} className="w-full text-black border-2 pr-4 pl-10 py-3 border-blue-400 rounded-md"/>
            <img src="./password.svg" className="my-auto ml-4" alt="" />
            </Stack>
        </div>
				<div className="flex flex-col w-full text-sm">
        <Stack>
            <input placeholder="Email" value={email}
            onChange={(e)=> setEmail(e.currentTarget.value)} className="w-full text-black border-2 pr-4 pl-10 py-3 border-blue-400 rounded-md"/>
            <img src="./email.svg" className="my-auto ml-4" alt="" />
            </Stack>
        </div>
				<div className="flex flex-col w-full text-sm">
        <Stack>
            <input placeholder="Password" value={password}
            onChange={(e)=> setPassword(e.currentTarget.value)} className="w-full text-black border-2 pr-4 pl-10 py-3 border-blue-400 rounded-md"/>
            <img src="./password.svg" className="my-auto ml-4" alt="" />
            </Stack>
        </div>
        <button onClick={handleLogin} className="p-[10px] text-sm bg-[#2653C7] text-white w-full text-center rounded-lg">
            Masuk
        </button>

    </div>

}

export default  RegisterBoxSection