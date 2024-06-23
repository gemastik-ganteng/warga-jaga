"use client"
import { createContext, ReactNode, useContext, useState } from "react";

interface RiwayatContextType {
    search: String | null;
    setSearch: (newSearch: String) => void;
}
export const RiwayatContext = createContext<RiwayatContextType | undefined>(undefined);
export const LaporanProvider = ({ children }: { children: ReactNode }) => {
    const [search, setSearch] = useState<String | null>("");

    return (
        <RiwayatContext.Provider value={{ search, setSearch }}>
            {children}
        </RiwayatContext.Provider>
    );
};

export const useRiwayat = () => {
    const context = useContext(RiwayatContext);
    if (context === undefined) {
        throw new Error('useRiwayat must be used within a RiwayatProvider');
    }
    return context;
};