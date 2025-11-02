'use client';
import Notifications from "@/components/Notifications";
import {router} from "next/client";

export const dynamic = 'force-dynamic';

import { useRouter } from "next/navigation";
import { useTelegram } from "@/providers/TelegramProviders";
import Image from 'next/image';

export default function Profile() {
    const router = useRouter();
    const { user } = useTelegram();

    // Пока user не загрузился
    if (!user) {
        return (
            <div className="bg-[#ECF0F1] min-h-screen flex items-center justify-center">
                <p className="text-[#7f8c8d] text-base">Загрузка профиля...</p>
            </div>
        );
    }

    const avatar = user.photo_url || '/user.png';

    return (
        <div className="bg-[#ECF0F1] min-h-screen">
            <h2 className="pt-[30px] bg-none text-[#2C3E50] text-2xl font-bold text-center">
                Личный кабинет
            </h2>

            <div className="flex flex-col items-center space-y-4 mt-8">
                {/* Фото профиля */}
                <Image
                    src={avatar}
                    alt="user avatar"
                    className="rounded-full"
                    width={82}
                    height={82}
                />

                {/* ФИО и данные */}
                <div className="text-center">
                    <p className="text-[#2C3E50] text-base font-bold">
                        {user.first_name} {user.last_name}
                    </p>
                    <p className="text-[#2C3E50] text-base font-bold">
                        Ваш балл за ЕГЭ:{" "}
                        <b className="text-[#3498DB] font-bold">256</b>
                    </p>
                    <button className="text-[#2C3E50] text-base font-bold mt-2">
                        Пригласить друга
                    </button>
                    <Notifications/>

                </div>
            </div>
            <button
                onClick={() => router.push('/myvuz')}
                className="montserrat-text w-[95%] h-[50px] text-white bg-[#3498DB] rounded-[20px] text-xs font-bold"
            >
                Мои вузы
            </button>
        </div>
    );
}
