import { Card } from "@/components/ui/card";
import { Notifikasi } from "@/types";

interface NotifikasiTileProps {
  title: string;
  dataNotifikasi: Notifikasi[];
}

const NotifikasiTile = ({ title, dataNotifikasi }: NotifikasiTileProps) => {
  return (
    <>
      <div className="w-full flex flex-col pt-1 mt-4">
        <h2 className="text-xl font-bold"> {title} </h2>
      </div>
      <div className="flex flex-col w-full items-center space-y-3 mt-1">
        {dataNotifikasi.map((data, index) => {
          return (
            <Card
              className="w-full border bg-[#EBF8FE] shadow-sm"
              key={"data" + index}
            >
              <div className="flex flex-col w-full gap-2 my-auto p-2 items-center justify-between text-[#2653C7]">
                <div className="flex justify-between gap-1 w-full">
                  <p className="text-sm font-bold">{data.tanggal}</p>
                  <p className="text-sm font-bold text-black">{data.jam}</p>
                </div>
                <p className="text-xs">{data.deskripsi}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default NotifikasiTile;
