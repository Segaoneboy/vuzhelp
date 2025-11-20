'use client';
import Notifications from "@/components/Notifications";
import {router} from "next/client";

export const dynamic = 'force-dynamic';

import { useRouter } from "next/navigation";
import { useTelegram } from "@/providers/TelegramProviders";
import Image from 'next/image';
import MainButton from "@/components/ui/MainButton";
import React from "react";
import NumberedList from "@/components/NumberedList";

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
    const settings = '/settings.svg';
    const ubed = '/uved.svg'


    return (
        <div className="bg-gradient-to-b from-[#E8EFFA] to-[#AFC5E6] min-h-screen">
            <div className="flex gap-2 justify-end mr-4 pt-4">
                <div
                    className="bg-gradient-to-b from-[#ABC3FB] to-[#5768F3] w-8 h-8 rounded-full flex items-center justify-center">
                    <Image
                        src={settings}
                        alt="settings"
                        width={15}
                    />
                </div>
                <div
                    className="bg-gradient-to-b from-[#ABC3FB] to-[#5768F3] w-8 h-8 rounded-full flex items-center justify-center">
                    <Image
                        src={ubed}
                        alt="uveds"
                        width={15}
                    />
                </div>
            </div>
            <h2 className="montserrat-text pt-[20px] bg-none text-[#000000] text-[24px] font-bold text-center">
                Личный кабинет
            </h2>

            <div className="flex items-center space-x-4 mt-8 pl-4">
                {/* Фото профиля */}
                <Image
                    src={avatar}
                    alt="user avatar"
                    className="rounded-full"
                    width={82}
                    height={82}
                />

                {/* ФИО и данные */}
                <div className="text-left">
                    <p className="text-[#000000] text-base font-bold">
                        {user.first_name} {user.last_name}
                    </p>
                    <p className="text-[#000000] text-base font-bold">
                        Ваш балл за ЕГЭ:{" "}
                        <b className="text-[#1647D9] font-bold">256</b>
                    </p>
                    <p className="text-[#000000] text-base font-bold">
                        Статус подписки: {" "}
                        <b className="text-[#1647D9] font-bold">Активна</b>
                    </p>
                </div>
            </div>
            <p className="text-[#000000] text-base">Приглашенные друзья:</p>
            <NumberedList items={['sqilta', 'swrweert', '4ffd23', 'item4', '4ffd23', 'item4', '4ffd23', 'item4', '4ffd23', 'item4']}/>
            <div className="flex justify-center">
                <button
                    onClick={() => router.push('/')}
                    className="montserrat-text w-[70%] h-[45px] text-white bg-gradient-to-b from-[#6D98DA] to-[#0C1DB5] rounded-[20px] text-[16px] font-bold"
                >
                    Пригласить друга
                </button>
            </div>
            <div className="pt-3">
                <MainButton text="Мои ВУЗы" url="myvuz"/>
            </div>
        </div>
    );
}
