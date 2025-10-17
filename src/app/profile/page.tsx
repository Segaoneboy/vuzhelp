'use client';

import { useRouter } from "next/navigation"
import { useTelegram } from "@/providers/TelegramProviders";
import Image from 'next/image';
import photo from '../photo.png'

export default function Profile(){
    const router = useRouter();
    const { themeParams } = useTelegram();

    return (
        <div className="bg-[#ECF0F1] min-h-screen">
            <h2 className="montserrat-text pt-[30px] bg-none text-[#2C3E50] text-2xl font-bold text-center">Личный кабинет</h2>
            <div className="flex flex-col items-center space-y-4 mt-8">
                <Image
                    src={photo}
                    alt="photo"
                    className="rounded-full"
                    width={82}
                    height={82}
                />
                <div>
                    <p className="montserrat-text text-[#2C3E50] text-base font-bold">Питер Паркер</p>
                    <p className="montserrat-text text-[#2C3E50] text-base font-bold">Ваш балл за ЕГЭ: <b className="montserrat-text text-[#3498DB] text-base font-bold">256</b></p>
                </div>
            </div>
        </div>
    )
}