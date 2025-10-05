'use client';

import { useEffect, useState } from 'react';

type TelegramUser = {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
    photo_url?: string;
};

export default function HomePage() {
    const [user, setUser] = useState<TelegramUser | null>(null);
    const [isTelegram, setIsTelegram] = useState(false);

    useEffect(() => {
        // Проверяем, есть ли Telegram WebApp API
        const tg = (window as any)?.Telegram?.WebApp;

        if (tg?.initDataUnsafe?.user) {
            setUser(tg.initDataUnsafe.user);
            setIsTelegram(true);
        } else {
            setIsTelegram(false);
        }
    }, []);

    if (!isTelegram) {
        return (
            <div className="flex h-screen items-center justify-center text-lg font-semibold">
                Loading...
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center">
            {user?.photo_url && (
                <img
                    src={user.photo_url}
                    alt="Avatar"
                    className="w-24 h-24 rounded-full shadow-md mb-4"
                />
            )}
            <h2 className="text-2xl font-bold">
                {user?.first_name} {user?.last_name}
            </h2>
            {user?.username && <p className="text-gray-600">@{user.username}</p>}
            <p className="text-gray-500 mt-2">ID: {user?.id}</p>
        </div>
    );
}
