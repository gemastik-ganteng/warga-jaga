import React, { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const BahasaSection = () => {
  const [bahasa, setBahasa] = useState<string>("Indonesia");

  return (
    <>
      <div className="flex flex-col items-center mx-4 mt-6">
        <div className="text-center w-full bg-[#EBF8FE] py-2 rounded-md">
          <p className="text-xl font-semibold">Pilih Bahasa</p>
        </div>

        <div className="w-full flex flex-col mt-2">
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className={`justify-start pl-8 border-blue-400 border-2 rounded-md py-5 ${bahasa !== "Pilih Jenis Tindakan Kriminal" ? "text-black hover:text-black" : "text-gray-400 hover:text-gray-400"} hover:text-gray-400 hover:bg-white `}>
                    {bahasa}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="justify-items-start bg-[#EBF8FE]">
                <DropdownMenuRadioGroup value={bahasa} onValueChange={setBahasa}>
                <DropdownMenuRadioItem value="Indonesia">Bahasa Indonesia</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Inggris">Bahasa Inggris</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
            </DropdownMenu>
        </div>
      </div>
    </>
  );
};

export default BahasaSection;
