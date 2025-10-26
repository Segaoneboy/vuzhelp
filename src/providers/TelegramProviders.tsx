'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import  { TelegramContextType }  from "@/types/telegram";

const TelegramContext = createContext<TelegramContextType | null>(null);

export function TelegramProvider({ children }: { children: React.ReactNode }) {
    const [tg, setTg] = useState<any>(null);
    const [user, setUser] = useState<any>(null);
    const [themeParams, setThemeParams] = useState<any>({});
    const [colorScheme, setColorScheme] = useState<string>('light');

    useEffect(() => {
        const webApp = (window as any)?.Telegram?.WebApp;
        if (!webApp) return;

        webApp.ready();
        setTg(webApp);
        setUser(webApp.initDataUnsafe?.user);
        setThemeParams(webApp.themeParams);
        setColorScheme(webApp.colorScheme);
    }, []);

    return (
        <TelegramContext.Provider value={{ tg, user, themeParams, colorScheme }}>
            {children}
        </TelegramContext.Provider>
    );
}

export const useTelegram = () => {
    const ctx = useContext(TelegramContext);
    if (!ctx) throw new Error('useTelegram must be used within TelegramProvider');
    return ctx;
};
