'use client';
import { useTelegram } from "@/providers/TelegramProviders";

export default function UserInfo() {
    const { user, colorScheme, themeParams } = useTelegram();

    if (!user) return <p>Loading...</p>;

    return (
        <div style={{ background: themeParams.bg_color, color: themeParams.text_color }}>
            <h2>Привет, {user.first_name}!</h2>
            <p>Тема: {colorScheme}</p>
        </div>
    );
}
