"use client"
import { Laporan } from "@/types";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface LaporanContextType {
    laporan: Laporan | null;
    setLaporan: (newLaporan: Laporan) => void;
}
export const LaporanContext = createContext<LaporanContextType | undefined>(undefined);
export const LaporanProvider = ({ children }: { children: ReactNode }) => {
    const [laporan, setLaporan] = useState<Laporan | null>(() => {
        const savedLaporan = localStorage.getItem('laporan');
        return savedLaporan ? JSON.parse(savedLaporan) : null;
    });

    useEffect(() => {
        if (laporan) {
            localStorage.setItem('laporan', JSON.stringify(laporan));
        } else {
            localStorage.removeItem('laporan');
        }
    }, [laporan]);

    const clearLaporan = () => {
        setLaporan(null);
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