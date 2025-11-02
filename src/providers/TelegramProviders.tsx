'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { TelegramContextType } from "@/types/telegram";

const TelegramContext = createContext<TelegramContextType | null>(null);

export function TelegramProvider({ children }: { children: React.ReactNode }) {
    const [tg, setTg] = useState<any>(null);
    const [user, setUser] = useState<any>(null);
    const [themeParams, setThemeParams] = useState<any>({});
    const [colorScheme, setColorScheme] = useState<string>('light');
    const [isReady, setIsReady] = useState<boolean>(false);

    useEffect(() => {
        const initTelegram = () => {
            const webApp = (window as any)?.Telegram?.WebApp;
            if (!webApp) return;
            try {
                webApp.ready();
                setTg(webApp);
                setUser(webApp.initDataUnsafe?.user);
                setThemeParams(webApp.themeParams);
                setColorScheme(webApp.colorScheme);
                setIsReady(true);
            } catch (err) {
                console.error('Ошибка инициализации Telegram WebApp:', err);
            }
        };

        if ((window as any)?.Telegram?.WebApp) {
            initTelegram();
        } else {
            window.addEventListener('telegram-sdk-loaded', initTelegram);
            return () => window.removeEventListener('telegram-sdk-loaded', initTelegram);
        }
    }, []);

    if (!isReady) {
        return (
            <div className="flex h-screen w-screen items-center justify-center bg-gray-900 text-white">
                <div className="flex flex-col items-center">
                    <div className="animate-spin h-12 w-12 rounded-full border-4 border-t-transparent border-blue-400 mb-4" />
                    <p className="text-lg font-medium">Загрузка Telegram WebApp...</p>
                </div>
            </div>
        );
    }

    return (
        <TelegramContext.Provider value={{ tg, user, themeParams, colorScheme, isReady }}>
            {children}
        </TelegramContext.Provider>
    );
}

export const useTelegram = () => {
    const ctx = useContext(TelegramContext);
    if (!ctx) throw new Error('useTelegram must be used within TelegramProvider');
    return ctx;
};
