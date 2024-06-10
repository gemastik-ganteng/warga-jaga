"use client"

import Stack from "@/app/components/elements/Stack";
import { debounce } from "lodash";
import { useEffect, useState } from "react";
import Image from "next/image";
import ContentNoSearchSection from "./ContentNoSearchSection";
import ContentWithSearchSection from "./ContentWithSearchSection";

interface QNA {
    question: string,
    answer: string,
    top?: boolean
}

const QnAList: QNA[] = [
    {question: "Kapan laporan saya ditindak lanjut?", answer: "Laporan Anda akan ditindaklanjuti dalam waktu 3-5 hari kerja.", top: true},
    {question: "Bagaimana mendapat informasi lanjutan mengenai laporan saya?", answer: "Anda dapat memperoleh informasi lanjutan mengenai laporan Anda melalui portal online kami atau menghubungi layanan pelanggan kami.", top: true},
    {question: "Apa yang terjadi ketika saya tidak sengaja menghapus akun?", answer: "Jika Anda tidak sengaja menghapus akun, silakan hubungi dukungan teknis kami untuk bantuan pemulihan akun.", top: true},
    {question: "Kapan prabowo jatuh?", answer: "Ini hanya contoh pertanyaan, tidak ada kejadian nyata terkait."},
    {question: "Apa reaksi maaruf amin terhadap kekalahan evos?", answer: "Ini hanya contoh pertanyaan, tidak ada kejadian nyata terkait."},
];


const ContentSection = () => {
    const [search, setSearch] = useState<string | undefined>();
    const [QnAs, setQnAs] = useState<QNA[]>([]);

    const handleSearch = debounce(() => {
        if (search) {
            setQnAs(
                QnAs.filter((data) =>
                    data.question.toLowerCase().includes(search.toLowerCase())
                )
            );
        } else {
            setQnAs(QnAList);
        }
    }, 300);
    
    const handleClear = () => {
        setSearch("");
        handleSearch();
    };

    useEffect(() => {
        handleSearch();
        return () => {
            handleSearch.cancel();
        };
    }, [handleSearch]);

    return <div className="flex flex-col space-y-5">
        <div className="w-full flex flex-col pt-1">
            <Stack>
                <input
                onChange={(e) => {
                    setSearch(e.target.value);
                    handleSearch();
                }}
                placeholder="Cari lokasi lain ..."
                className="w-full text-black border-2 pr-4 pl-10 py-3 border-blue-400 rounded-md flex"
                value={search}
                />
                <Image
                src="./search.svg"
                className="my-auto ml-4 flex"
                alt=""
                width={20}
                height={20}
                />
                <div className="flex w-10 ml-auto my-auto">
                {search && (
                    <button
                    onClick={handleClear}
                    className="text-gray-500 hover:text-gray-700 text-xl"
                    >
                    &times;
                    </button>
                )}
                </div>
            </Stack>
            </div>

        {search ? <ContentWithSearchSection QnAList={QnAs}/> : <ContentNoSearchSection QnAList={QnAList}/>}
    </div>
}

export default ContentSection