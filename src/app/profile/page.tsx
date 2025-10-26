'use client';
export const dynamic = 'force-dynamic';

import { useTelegram } from "@/providers/TelegramProviders";
import Image from 'next/image';

export default function Profile() {
    const { user } = useTelegram();

    if (!user) {
        return <p className="text-center mt-10">Загрузка профиля...</p>;
    }

    const avatar = user.photo_url || '/user.png';

    return (
        <div className="bg-[#ECF0F1] min-h-screen">
            <h2 className="pt-[30px] text-[#2C3E50] text-2xl font-bold text-center">Личный кабинет</h2>
            <div className="flex flex-col items-center space-y-4 mt-8">
                <Image src={avatar} alt="user avatar" width={82} height={82} className="rounded-full" />
                <div>
                    <p className="text-[#2C3E50] text-base font-bold">{user.first_name} {user.last_name}</p>
                    <p className="text-[#2C3E50] text-base font-bold">
                        Ваш балл за ЕГЭ: <b className="text-[#3498DB] font-bold">256</b>
                    </p>
                </div>
            </div>
        </div>
    );
}
