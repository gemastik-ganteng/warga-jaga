import { createContext, ReactNode, useContext, useState, useEffect } from "react";
import { Laporan } from "@/types";

interface LaporanContextType {
    laporan: Laporan | null;
    setLaporan: (newLaporan: Laporan) => void;
}

export const LaporanContext = createContext<LaporanContextType | undefined>(undefined);

const LaporanProvider = ({ children }: { children: ReactNode }) => {
    const [laporan, setLaporanState] = useState<Laporan | null>(null);

    useEffect(() => {
        const loadLaporanFromCache = async () => {
            const cache = await caches.open('laporanCache');
            const response = await cache.match('laporan');
            if (response) {
                const data = await response.json();
                setLaporanState(data);
            }
        };
        loadLaporanFromCache();
    }, []);

    const setLaporan = async (newLaporan: Laporan) => {
        setLaporanState(newLaporan);
        const cache = await caches.open('laporanCache');
        const data = JSON.stringify(newLaporan);
        const response = new Response(data, {
            headers: { 'Content-Type': 'application/json' }
        });
        await cache.put('laporan', response);
    };

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

export default LaporanProvider;
