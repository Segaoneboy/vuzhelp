'use client';

import { useRouter } from "next/navigation"
import {useTelegram} from "@/providers/TelegramProviders";

export default function Auth(){
    const router = useRouter();
    const { themeParams } = useTelegram();
    return (
        <>
            <h1 className="text-[#2C3E50] text-2xl font-bold">Вход в личный кабинет</h1>
            <div className="min-h-screen flex items-center justify-center w-full bg-gray-50">
                <div className="w-full max-w-[90%] mx-4">
                    <form className="bg-transparent shadow-lg rounded-lg p-8">
                        <div className="mb-6 flex justify-center">
                            <input
                                type="text"
                                className="w-full max-w-[90%] h-[71px] px-3 py-2 bg-[#34495E] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white placeholder:text-xs placeholder:font-bold"
                                placeholder="Ваш ID"
                            />
                        </div>

                        <div className="flex flex-col space-y-4 items-center">
                            <button
                                type="submit"
                                className="w-[90%] h-[50px] bg-[#3498DB] hover:bg-[#2980B9] text-white font-bold py-3 px-4 rounded-md transition duration-200"
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