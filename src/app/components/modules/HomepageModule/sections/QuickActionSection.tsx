const QuickActionSection = () => {
    return (
        <div className="flex flex-wrap justify-center gap-y-4 gap-x-4 font-semibold items-center w-full ">
            <div className="h-16 md:h-24 rounded-xl w-[45%]  flex space-x-4 items-center pr-4 bg-white">
                <div className="aspect-square h-full flex items-center justify-center rounded-xl p-4 font-semibold bg-[#2653C7]">
                    <img src="./inbox-stack.svg" className="w-full aspect-square" alt="" />
                </div>
                <h1 className="text-center text-xs">
                    Riwayat Kejadian di Lokasi
                </h1>
            </div>
            <div className="h-16 md:h-24 rounded-xl w-[45%] flex space-x-6 items-center pr-4 bg-white">
                <div className="aspect-square h-full flex items-center justify-center rounded-xl p-4 font-semibold bg-[#2653C7]">
                    <img src="./inbox-stack.svg" className="w-full aspect-square" alt="" />
                </div>
                <h1 className="text-center text-xs">
                    Buat Laporan Baru
                </h1>
            </div>
            <div className="h-16 md:h-24 rounded-xl w-[45%] flex space-x-4 items-center  pr-4 bg-white">
                <div className="aspect-square h-full flex items-center justify-center rounded-xl p-4 font-semibold bg-[#2653C7]">
                    <img src="./inbox-stack.svg" className="h-full aspect-square" alt="" />
                </div>
                <h1 className="text-center text-xs">
                    Laporan Saya
                </h1>

            </div>
        </div>
    );
};

export default QuickActionSection;
