"use client";

import Stack from "@/components/elements/Stack";
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col w-full bg-[#EBF8FE]">
        <div className="felx flex-col w-full px-5 py-2">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-extrabold">Lokasi Saat Ini</h2>
            <h4 className="text-lg">Depok, Jawa Barat</h4>
          </div>

          <div className="w-full flex flex-col pt-1">
            <Stack>
              <input
                placeholder="Cari lokasi lain ..."
                className="w-full text-black border-2 pr-4 pl-10 py-3 border-blue-400 rounded-md"
              />
              <Image src="./search.svg" className="my-auto ml-4" alt="" width={20} height={20}/>
            </Stack>
          </div>

          <div className="rounded-md w-full pt-2">
            <Image src="/maps.png" alt="gambar maps" height={700} width={700} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
