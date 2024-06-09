import { Laporan } from "@/types";
import { createContext, ReactNode, useContext, useState } from "react";

interface LaporanContextType {
    laporan: Laporan | null;
    setLaporan: (newLaporan: Laporan) => void;
}
export const LaporanContext = createContext<LaporanContextType | undefined>(undefined);
export const LaporanProvider = ({ children }: { children: ReactNode }) => {
    const [laporan, setLaporan] = useState<Laporan | null>(null);

    return (
        <LaporanContext.Provider value={{ laporan, setLaporan }}>
            {children}
        </LaporanContext.Provider>
    );
};

export const useLaporan = () => {
    const context = useContext(LaporanContext);
    if (context === undefined) {
        throw new Error('useLaporan must be used within a LaporanProvider');
    }
    return context;
};