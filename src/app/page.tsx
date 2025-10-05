'use client';
import { useEffect, useState } from 'react';

export default function ThemeInfo() {
    const [colorScheme, setColorScheme] = useState<string>('');
    const [themeParams, setThemeParams] = useState<any>({});

    useEffect(() => {
        const tg = (window as any)?.Telegram?.WebApp;
        if (!tg) return;

        tg.ready(); // важно вызвать, чтобы Telegram отдал все параметры
        setColorScheme(tg.colorScheme);
        setThemeParams(tg.themeParams);
    }, []);

    return (
        <div
            style={{
                background: themeParams.bg_color || '#fff',
                color: themeParams.text_color || '#000',
                minHeight: '100vh',
                padding: '20px',
            }}
        >
            <h2>Цветовая тема: {colorScheme}</h2>
            <p>Основной цвет: {themeParams.button_color}</p>
            <p>Цвет текста: {themeParams.text_color}</p>
            <p>Цвет фона: {themeParams.bg_color}</p>
        </div>
    );
}
