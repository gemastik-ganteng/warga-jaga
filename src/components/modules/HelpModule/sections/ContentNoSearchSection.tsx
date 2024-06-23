import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

interface QNA {
    question: string,
    answer: string,
    top?: boolean
}

const ContentNoSearchSection = ({QnAList}: {QnAList: QNA[]}) => {
    return <div className="flex flex-col space-y-1">
        <div className="mx-auto text-xl font-semibold">Pertanyaan Populer</div>

        <div className="w-full px-2 space-y-2">
            {QnAList.filter((QnA: QNA) => QnA.top).map((QnA) => {
                return <Accordion type="multiple" className=" border-2 bg-sky-100 border-slate-400 rounded-sm px-2 h-fit">
                    <AccordionItem value={`item-1`} className="">
                    <AccordionTrigger className="text-sm font-normal text-justify text-cyan-600">{QnA.question}</AccordionTrigger>
                    <AccordionContent>
                        <div className="flex flex-col space-y-3">
                            <div className="text-justify text-xs">{QnA.answer}</div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                </Accordion>
            })}
        </div>

        <div className="flex flex-col p-2">
            <div className="text-lg font-semibold mt-5">Apa Kendala Anda?</div>

            <div className="bg-blue-100 font-medium rounded-sm py-2 px-2 mt-3">Kendala Akun</div>
            <div className="mt-2">&bull; Kesulitan saat login</div>
            <div className="mt-1">&bull; Kesulitan saat mengubah password</div>
            <div className="mt-1">&bull; Kesulitan saat alamat email</div>

            <div className="bg-blue-100 font-medium rounded-sm py-2 px-2 mt-3">Kendala Laporan</div>
            <div className="mt-2">&bull; Laporan tidak diproses</div>
            <div className="mt-1">&bull; Laporan terjebak dalam satu status</div>
            <div className="mt-1">&bull; Kesulitan mengontak PIC laporan</div>
        </div>
    </div>
}

export default ContentNoSearchSection