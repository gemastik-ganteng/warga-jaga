import { useAuth } from "@/components/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const GreetingSection = ()=>{
    const {userData, loading} = useAuth();
    const router = useRouter()
    useEffect(()=>{
        console.log(userData)
        if(!userData && !loading){
           router.push("/login")
        }
    },[userData, loading])

    return <div className="flex w-full justify-between items-center p-4">
        <div className="flex flex-col space-y-1">
            <h1 className="text-lg">Halo,</h1>
            <h1 className="text-2xl font-bold">{userData?.name}</h1>
        </div>
        <div className="flex space-x-2 items-center">
            <img src="./location.svg" alt="" />
            <h1 className="text-[#2653C7]">Depok</h1>
        </div>
    </div>
}

export default GreetingSection