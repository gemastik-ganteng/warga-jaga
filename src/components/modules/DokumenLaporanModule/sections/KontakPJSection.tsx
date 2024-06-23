import { Button } from "@/components/ui/button"

const PJContacts = [
    {key: "No Telepon", value: "08918283991212", action: "Call"},
    {key: "E-mail", value: "mulyadi@gmail.com", action: "Contact"},
]

const KontakPJSection = () => {
    return <div className="flex flex-col py-4 px-2 space-y-3 border-2 border-blue-100 rounded-sm mt-3 bg-white w-full">
        {PJContacts.map((PJContact, index) => {
            return <div className="flex justify-between" key={index}>
                <div className="my-auto flex flex-col space-y-[2px]">
                    <div className="text-base font-medium">{PJContact.key}</div>
                    <div className="text-base font-light">{PJContact.value}</div>
                </div>

                <Button className="w-20">{PJContact.action}</Button>
            </div>
        })}
    </div>
}

export default KontakPJSection