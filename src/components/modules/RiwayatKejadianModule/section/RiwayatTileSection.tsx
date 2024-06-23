"use client";

import Stack from "@/components/elements/Stack";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useEffect, useState } from "react";
import { debounce } from "lodash";
import { useRouter } from "next/navigation";

interface RiwayatTileInformation {
  title: string;
  tanggal: string;
  jam: string;
  alamat: string;
}

const riwayatKejadianList: RiwayatTileInformation[] = [
  {
    title: "Kasus Pembegalan",
    tanggal: "05/03/2024",
    jam: "12:00",
    alamat: "Jl aja",
  },
  {
    title: "Kasus Kekerasan",
    tanggal: "20/03/2024",
    jam: "12:00",
    alamat: "Alfamart Kukusan",
  },
  {
    title: "Kasus Pencurian",
    tanggal: "10/03/2024",
    jam: "12:00",
    alamat: "Jl. Apel No. 7",
  },
];

const RiwayatTileSection = () => {
  const router = useRouter()
  const [search, setSearch] = useState<string | undefined>();
  const [riwayatKejadian, setRiwayatKejadian] =
    useState<RiwayatTileInformation[]>(riwayatKejadianList);

  const handleSearch = debounce(() => {
    if (search) {
      setRiwayatKejadian(
        riwayatKejadianList.filter((data) =>
          data.title.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setRiwayatKejadian(riwayatKejadianList);
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

  return (
    <>
      <div className="flex flex-col w-full">
        <div className="felx flex-col w-full px-5 py-2">
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
          <div className="flex gap-2 mt-2">
            <button className="text-center rounded-full text-sm px-4 py-1 bg-[#EBF8FE] border border-[#2653C7] text-[#2653C7]">
              Urutkan
            </button>
            <button className="text-center rounded-full text-sm px-4 py-1 bg-[#EBF8FE] border border-[#2653C7] text-[#2653C7]">
              Filter
            </button>
          </div>
          <div className="flex flex-col w-full items-center space-y-3 mt-4 md:mt-6 md:space-y-4">
            {riwayatKejadian.length === 0 && (
              <p className="text-center text-lg text-gray-500">
                Tidak ada data yang ditemukan
              </p>
            )}
            {riwayatKejadian.map((data, index) => {
              return (
                <Card
                  className="w-full border bg-[#EBF8FE] shadow-sm"
                  key={"data" + index}
                >
                  <div className="flex w-full h-full my-auto space-x-4 p-2 items-center justify-between text-black">
                    <div className="grow flex flex-col gap-1 p-2">
                      <p className="text-lg font-bold">{data.title}</p>
                      <p className="truncate text-xs">
                        {data.tanggal} pukul {data.jam}
                      </p>
                      <p className="text-xs">{data.alamat}</p>
                    </div>
                    <button className="rounded-sm text-center bg-[#7ACEFA] text-xs self-end text-white py-2 px-5"
                    onClick={() => router.push('/detail-laporan/1')}>
                      Lihat
                    </button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default RiwayatTileSection;
