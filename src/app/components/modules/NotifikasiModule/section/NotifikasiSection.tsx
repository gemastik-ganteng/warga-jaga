"use client";

import { Notifikasi } from "@/types";
import NotifikasiTile from "../element/NotifikasiTile";

const notifikasiData1: Notifikasi[] = [
  {
    tanggal: "10/03/2024",
    jam: "12:00",
    deskripsi:
      "Anda berhasil mengirimkan laporan “Kasus Pembegalan” yang terjadi di Jl. Ammonia IV, Beji Depok, Jawa Barat pukul 13.02.",
  },
];

const notifikasiData2: Notifikasi[] = [
  {
    tanggal: "10/03/2024",
    jam: "12:00",
    deskripsi:
      "Anda berhasil mengirimkan laporan “Kasus Pembugilan Isaac” yang terjadi di Jl. Ammonia IV, Beji Depok, Jawa Barat pukul 13.02.",
  },
  {
    tanggal: "10/03/2024",
    jam: "12:00",
    deskripsi:
      "Anda berhasil mengirimkan laporan “Kasus Pembugilan Isaac” yang terjadi di Jl. Ammonia IV, Beji Depok, Jawa Barat pukul 13.02.",
  },
]

const NotifikasiSection = () => {
  return (
    <>
      <div className="flex flex-col w-full px-5 py-2 justify-start">
        <NotifikasiTile title="Hari Ini" dataNotifikasi={notifikasiData1} />
        <NotifikasiTile title="Kemarin" dataNotifikasi={notifikasiData2} />
      </div>
    </>
  );
};

export default NotifikasiSection;
