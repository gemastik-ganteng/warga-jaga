"use client";

const DataTerkiniSection = () => {
  return (
    <>
      <div className="flex flex-col w-full px-5 py-2 justify-center items-center">
        <h2 className="text-2xl font-extrabold">Data Kriminal Terkini</h2>

        <div className="flex flex-col w-full space-y-2 pt-2">
          <p className="text-justify text-xs">
            Lihat data kriminal terkini di berbagai lokasi, dirangkum untuk Anda
            secara real time dari laporan masyarakat
          </p>
          <p className="text-justify text-xs">
            Kota Depok adalah sebuah kota yang terletak di Provinsi Jawa Barat,
            Indonesia. Kota Depok merupakan bagian dari kawasan metropolitan
            Jabodetabekpunjur dan berada di bagian selatan Daerah Khusus Ibukota
            Jakarta.{" "}
          </p>
          <p className="text-justify text-xs">
            Terdapat 30 kasus tindakan kriminal di Kota Depok pada bulan Maret,
            2024 yang terdiri dari 15 Kasus Pencurian, 10 Kasus Pembegalan, 3
            Kasus Penipuan, dan 2 Kasus Kekerasan.{" "}
          </p>
        </div>

        <button
          className="p-[10px] text-sm bg-[#2653C7] text-white w-full text-center rounded-lg mt-2"
        >
          Lihat Riwayat Kriminal
        </button>
      </div>
    </>
  );
};

export default DataTerkiniSection;
