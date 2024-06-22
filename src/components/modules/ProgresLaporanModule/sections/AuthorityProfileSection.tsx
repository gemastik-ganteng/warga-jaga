import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DotIcon } from "lucide-react"

const authorityProfiles = [
    {key: "Nama Lengkap", value: "Mulyadi Santoso"},
    {key: "Pangkat Otoritas", value: "Bripda"},
    {key: "Unit Kepolisian", value: "Unit Jakarta Pusat"}
]

const AuthorityProfileSection = () => {
    return <div className="flex flex-col p-4 mt-3">
        <div className="text-xl justify-center mx-auto">Authority Profile</div>

        <div className="h-16 flex border-2 border-blue-400 rounded-sm">
            <div className="w-7 my-auto pl-2">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>

            <div className="flex flex-col w-16 space-y-1 ml-10 justify-center">
                <div className="text-xs text-blue-500 flex"> 
                    <span><DotIcon/></span>
                    <span className="self-end">Online</span>
                </div>
                <div className="text-sm text-nowrap">Mulyadi Santoso</div>
            </div>

            <div className="grow"/>

            <Button className="my-auto mr-3">Cek</Button>
        </div>

        <div className="mt-5 h-60 flex flex-col border-2 border-blue-400 rounded-sm space-y-3 p-3">
            {authorityProfiles.map((authorityProfile) => {
                return <div className="flex flex-col space-y-1">
                    <div className="text-sm mt-1 font-medium">{authorityProfile.key}</div>
                    <div className="mt-[2px] h-8 w-full bg-blue-400 rounded-md flex justify-center items-center text-white font-semibold">{authorityProfile.value}</div>
                </div>
            })}
        </div>
    </div>
}

export default AuthorityProfileSection