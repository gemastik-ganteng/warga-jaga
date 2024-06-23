import { UserData } from '@/types';
import { createContext, ReactNode, useContext, useState, useEffect } from 'react';

export interface AuthContextType {
    userData: UserData | null;
    loading: boolean;
    login: (newUserData: UserData) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
    initialUserData?: UserData | null;
}

const AuthProvider = ({ children, initialUserData }: AuthProviderProps) => {
    const [userData, setUserData] = useState<UserData | null>(initialUserData || null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadUserDataFromCache = async () => {
            const cache = await caches.open('userDataCache');
            const response = await cache.match('userData');
            if (response) {
                const data = await response.json();
                setUserData(data);
            }
            setLoading(false);
        };
        loadUserDataFromCache();
    }, []);

    const setAuthData = async (newUserData: UserData) => {
        setUserData(newUserData);
        const cache = await caches.open('userDataCache');
        const data = JSON.stringify(newUserData);
        const response = new Response(data, {
            headers: { 'Content-Type': 'application/json' }
        });
        await cache.put('userData', response);
    };

    const login = async (newUserData: UserData) => {
        await setAuthData(newUserData);
    };

    const logout = async () => {
        setUserData(null);
        const cache = await caches.open('userDataCache');
        await cache.delete('userData');
    };

    return (
        <AuthContext.Provider value={{ userData, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export default AuthProvider;

