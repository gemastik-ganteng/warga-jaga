"use client"
import Stack from "@/components/elements/Stack";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginBoxSection = ()=> {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const router = useRouter();

    const handleLogin = async () => {
        try{
            const res = await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL +"/auth/login", {username: email, password}); 
            console.log(res)
            router.push("/")
        }
        catch(error){
            router.push("/login")
        }
    }


    return <div className="flex w-full flex-col space-y-4 text-black mt-4 px-8">

        <div className="flex flex-col w-full text-sm">
            <Stack>
            <input placeholder="Email" value={email}
            onChange={(e)=> setEmail(e.currentTarget.value)} className="w-full text-black border-2 pr-4 pl-10 py-3 border-blue-400 rounded-md"/>
            <img src="./email.svg" className="my-auto ml-4" alt="" />
            </Stack>
        </div>
        <div className="flex flex-col w-full text-sm">
        <Stack>
            <input placeholder="Masukkan Password" value={password}
            onChange={(e)=> setPassword(e.currentTarget.value)} className="w-full text-black border-2 pr-4 pl-10 py-3 border-blue-400 rounded-md"/>
            <img src="./password.svg" className="my-auto ml-4" alt="" />
            </Stack>
        </div>
        <button onClick={handleLogin} className="p-[10px] text-sm bg-[#2653C7] text-white w-full text-center rounded-lg">
            Masuk
        </button>

    </div>

}

export default  LoginBoxSection