'use client';

import { useRouter } from "next/navigation"
import { useTelegram } from "@/providers/TelegramProviders";
import Image from 'next/image';

//Страница профиля

export default function Profile(){
    const router = useRouter();
    const { user } = useTelegram();
    const avatar = user?.photo_url || '/user.png';

    return (
        <div className="bg-[#ECF0F1] min-h-screen">
            <h2 className="pt-[30px] bg-none text-[#2C3E50] text-2xl font-bold text-center">Личный кабинет</h2>
            <div className="flex flex-col items-center space-y-4 mt-8">
                {/*Фото профиля*/}
                {user ? (
                    <Image
                        src={user.photo_url}
                        alt="user avatar"
                        className="rounded-full"
                        width={82}
                        height={82}
                    />
                ) : (
                    <div className="w-[82px] h-[82px] bg-gray-300 rounded-full" />
                )}

                {/*Фио и балл пользователя*/}
                <div>
                    <p className="text-[#2C3E50] text-base font-bold">Питер Паркер</p>
                    <p className="text-[#2C3E50] text-base font-bold">Ваш балл за ЕГЭ: <b className="montserrat-text text-[#3498DB] text-base font-bold">256</b></p>
                    <button className = "text-[#2C3E50] text-base font-bold">Пригласить друга</button>
                    <p>{user}</p>
                </div>
            </div>
        </div>
    )
}