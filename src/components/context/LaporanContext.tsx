"use client"
import { Laporan } from "@/types";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { openDB } from "idb";

interface LaporanContextType {
    laporan: Laporan | null;
    setLaporan: (newLaporan: Laporan) => void;
}

export const LaporanContext = createContext<LaporanContextType | undefined>(undefined);

const LaporanProvider = ({ children }: { children: ReactNode }) => {
    const [laporan, setLaporan] = useState<Laporan | null>(null);

    // Function to save laporan to IndexedDB
    const saveLaporanToIndexedDB = async (newLaporan: Laporan) => {
        const db = await openDB('laporanDB', 2); // Menggunakan versi yang sesuai
        if (!db.objectStoreNames.contains('laporans')) {
            // Jika object store belum ada, lakukan upgrade
            await db.close(); // Tutup database sebelum upgrade
            const upgradedDb = await openDB('laporanDB', 2, {
                upgrade(db) {
                    db.createObjectStore('laporans', { keyPath: 'id', autoIncrement: true });
                }
            });
            await upgradedDb.put('laporans', newLaporan);
        } else {
            // Object store sudah ada, langsung simpan laporan
            await db.put('laporans', newLaporan);
        }
    };

    // Function to get laporan from IndexedDB
    const fetchLaporanFromIndexedDB = async () => {
        const db = await openDB('laporanDB', 2); // Menggunakan versi yang sesuai
        if (db.objectStoreNames.contains('laporans')) {
            const laporan = await db.get('laporans', 1);
            return laporan;
        } else {
            return null;
        }
    };

    // Load laporan from IndexedDB when the component mounts
    useEffect(() => {
        const loadLaporan = async () => {
            const savedLaporan = await fetchLaporanFromIndexedDB();
            if (savedLaporan) {
                setLaporan(savedLaporan);
            }
        };
        loadLaporan();
    }, []);

    // Save laporan to IndexedDB whenever it changes
    useEffect(() => {
        if (laporan) {
            saveLaporanToIndexedDB(laporan);
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

export default LaporanProvider;

