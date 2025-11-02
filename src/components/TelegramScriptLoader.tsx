'use client';

import Script from 'next/script';

/**
 * Компонент для загрузки Telegram WebApp SDK.
 * После загрузки диспатчит событие, чтобы TelegramProvider мог отреагировать.
 */
export default function TelegramScriptLoader() {
    return (
        <Script
            src="https://telegram.org/js/telegram-web-app.js"
            strategy="afterInteractive"
            onLoad={() => {
                window.dispatchEvent(new Event('telegram-sdk-loaded'));
            }}
        />
    );
}
