'use client';

import { useRouter } from "next/navigation"
import {useTelegram} from "@/providers/TelegramProviders";

export default function Auth(){
    const router = useRouter();
    const { themeParams } = useTelegram();
    return (
        <>
            <h2 className="mt-[30px] bg-none text-[#2C3E50] text-2xl font-bold text-center">Вход в личный кабинет</h2>
            <div className="min-h-screen flex items-center justify-center w-full bg-gray-50">
                <div className="w-full max-w-[100%] mx-4">
                    <form className="bg-transparent">
                        <div className="mb-6 flex justify-center">
                            <input
                                type="text"
                                className="w-[90%] h-[70px] rounded-[20px] bg-[#34495E] text-white placeholder:text-white placeholder:text-xs placeholder:font-bold"
                                placeholder="Ваш ID"
                            />
                        </div>

                        <div className="flex flex-col space-y-4 items-center">
                            <button
                                type="submit"
                                className="w-[90%] text-white bg-[#3498DB] rounded-[20px] text-xs font-bold"
                            >
                                Войти
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}