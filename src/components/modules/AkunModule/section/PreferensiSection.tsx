import React, { useState } from "react";
import Image from "next/image";

const PreferensiSection = () => {
  const [progressLaporan, setProgressLaporan] = useState<boolean>(true);
  const [alertKriminal, setAlertKriminal] = useState<boolean>(true);

  return (
    <>
      <div className="flex flex-col items-center mx-4 mt-6 w-full">
        <div className="text-center w-full bg-[#EBF8FE] py-2 rounded-md">
          <p className="text-xl font-semibold">Preferensi Notifikasi</p>
        </div>

        <div className="flex flex-col w-full px-2">
          <div className="flex justify-between items-center w-full mt-2">
            <p className="font-semibold">Notifikasi Pesanan</p>
            {progressLaporan ? (
              <button
                onClick={() => setProgressLaporan(false)}
                className="border-none bg-transparent"
              >
                <Image src="./check-circle.svg" width={20} height={20} alt="" />
              </button>
            ) : (
              <button
                onClick={() => setProgressLaporan(true)}
                className="border-none bg-transparent"
              >
                <Image
                  src="./check-circle-fill.svg"
                  width={20}
                  height={20}
                  alt=""
                />
              </button>
            )}
          </div>
          <div className="flex justify-between items-center w-full mt-2">
            <p className="font-semibold">Alert Kriminal</p>
            {alertKriminal ? (
              <button
                onClick={() => setAlertKriminal(false)}
                className="border-none bg-transparent"
              >
                <Image src="./check-circle.svg" width={20} height={20} alt="" />
              </button>
            ) : (
              <button
                onClick={() => setAlertKriminal(true)}
                className="border-none bg-transparent"
              >
                <Image
                  src="./check-circle-fill.svg"
                  width={20}
                  height={20}
                  alt=""
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PreferensiSection;
