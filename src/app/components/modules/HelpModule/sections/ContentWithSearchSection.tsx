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

const ContentWithSearchSection = ({QnAList}: {QnAList: QNA[]}) => {
    return <div className="flex flex-col space-y-1">
        <div className="w-full px-2 space-y-2">
            {QnAList.map((QnA) => {
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
    </div>
}

export default ContentWithSearchSection