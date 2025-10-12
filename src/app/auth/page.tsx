'use client';
import { useRouter } from "next/navigation"
import {useTelegram} from "@/providers/TelegramProviders";

export default function Auth() {
    const router = useRouter();
    const { themeParams } = useTelegram();
    return(
        <>
            <div style={{background: themeParams.bg_color, color: themeParams.color}}>
                <button onClick={() => router.push("/")} className='bg-blue-400 p-3'>ВОйти</button>
            </div>
        </>
    )
}
