"use client"

import FileTile from "@/components/ui/filetile"
import { convertBase64ToFile, getFileType } from "@/utility/FileService"

type buktiSectionProps = {
    base64List: string[]
}

const BuktiSection: React.FC<buktiSectionProps> = ({base64List}) => {
    return <div className="flex flex-col gap-4 w-full">
        {
            base64List.map((data,index)=> {
                return <FileTile key={index+"bukti"} 
                file={convertBase64ToFile({
                    type: getFileType(data),
                    base64: data,
                    name: 'Bukti '+ index
                })}/>
            })
        }
    </div>
}

export default BuktiSection