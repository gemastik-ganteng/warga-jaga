import React from "react";

const ButtonSection = () => {
  return (
    <div className="flex flex-col justify-center w-full items-center gap-2 mt-4">
      <button className="bg-[#2653C7] hover:bg-[#10192e] text-white font-bold py-2 px-4 rounded-lg w-56">
        Simpan
      </button>

      <button className="bg-[#A1B9F7] hover:bg-[#0c1324] text-white font-bold py-2 px-4 rounded-lg w-56">
        Hapus Akun
      </button>
    </div>
  );
};

export default ButtonSection;
