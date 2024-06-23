import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

const ProfilPJSection = () => {
    return <div className="p-2 flex flex-col justify-center items-center border-2 rounded-md border-blue-200 bg-white w-fit mx-auto mt-3 space-y-2">
        <div className="text-center text-sm font-light">Penanggung Jawab</div>

        <div className="flex w-full h-full">
            <Avatar className="border-2 rounded-full border-blue-300 w-20 h-20 mx-auto">
                <img src="https://github.com/shadcn.png"/>
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>

        <div className="text-center font-medium">
            Mulyadi Santoso
        </div>
    </div>
}

export default ProfilPJSection