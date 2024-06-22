"use client"
import Stack from "@/app/components/elements/Stack";
import { RegisterRequestDTO } from "@/types";
import axios from "axios";
import { useState } from "react";


type RegisterSectionProps = {
    onNavigateToNextStep: ()=> void
}
const RegisterBoxSection: React.FC<RegisterSectionProps> = ({onNavigateToNextStep})=> {
	const [nama, setNama] = useState<string>("");
	const [phone, setPhone] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");


    const register = async () => {

        const registerData: RegisterRequestDTO = {
            name:nama,
            phone:phone,
            email:email,
            password:password
        }

        try{
            await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL +"/auth/register", registerData)
            onNavigateToNextStep()

        }
        catch(err:any){
            console.log(err)
            console.log("WOY")
            alert("User dengan email tersebut sudah ada")
        }

    }


    return <div className="flex w-full flex-col space-y-4 text-black mt-4 px-8">

        <div className="flex flex-col w-full text-sm">
            <input placeholder="Nama Lengkap (Sesuai KTP)" value={nama}
            onChange={(e)=> setNama(e.currentTarget.value)} className="w-full text-black border-2 pr-4 pl-4 py-3 border-blue-400 rounded-md"/>
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
        <button onClick={register} className="p-[10px] text-sm bg-[#2653C7] text-white w-full text-center rounded-lg">
            Lanjutkan
        </button>

    </div>

}

export default  RegisterBoxSection