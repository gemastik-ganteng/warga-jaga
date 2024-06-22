import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const documents = [
    {
        title: "Dokumen Rekaman CCTV", 
        url: "./FotoRekaman.png", 
        deskripsi: "Berikut rekaman CCTV yang didapatkan di depan Alfamart Jl. Ammonia, Beji, Depok pada pukul 12:00 - 14:00. Bisa dilihat pada menit ke 13:02 mulai terjadi keributan dan pelaku terbukti melakukan tindak kriminal pembegalan"
    },
    {
        title: "Foto Sidik Jari", 
        url: "./FotoRekaman.png", 
        deskripsi: "Berikut Foto sidik jadi dari pelaku, sidik jari dapat dipastikan milik pelaku"
    }
]



const DokumenBuktiSection = () => {
    return     <div className="flex flex-col mt-4 space-y-2">
        <div className="text-xl justify-start font-medium px-4">Obtained Documents</div>

        <Accordion type="multiple" className="w-full bg-white border-2 border-blue-100 rounded-md p-2">
            {documents.map((document, index) => {
                return <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger>{document.title}</AccordionTrigger>
                    <AccordionContent>
                        <div className="flex flex-col space-y-3">
                            <img src="./FotoRekaman.png"/>
                            <div className="text-justify text-sm">{document.deskripsi}</div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            })}
        </Accordion>
    </div>
}


export default DokumenBuktiSection