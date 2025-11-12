'use client';

import { useRouter } from "next/navigation"
import {useTelegram} from "@/providers/TelegramProviders";

//Страница Входа

export default function Home(){
    const router = useRouter();
    return (
        <div className="bg-gradient-to-b from-[#E8EFFA] to-[#AFC5E6] min-h-screen">
            <h2 className="montserrat-text pt-[50px] bg-none text-[#000000] text-[24px] font-bold text-center">Вход в личный кабинет</h2>
            <div className="flex items-center justify-center w-full h-[70vh]">
                <div className="w-full max-w-[100%] mx-4">
                    {/*Форма входа*/}
                    <form className="bg-transparent">
                        <div className="flex justify-center mt-8">
                            <input
                                type="text"
                                className="montserrat-text w-[95%] h-[70px] rounded-[20px] bg-[#111856] text-[#989EDA] placeholder:text-[#989EDA] placeholder:text-[60px] placeholder:font-bold pl-8"
                                placeholder="Введите Ваш ID"
                            />
                        </div>
                    </form>
                    {/*Кнопка перехода в ЛК*/}
                    <div className="flex flex-col space-y-4 items-center mt-[18px]">
                        <button
                            onClick={() => router.push('/profile')}
                            type="submit"
                            className="montserrat-text w-[75%] h-[50px] text-white bg-gradient-to-b from-[#BFD9FF] to-[#4B5CF2] rounded-[20px] text-xs font-bold"
                        >
                            Войти
                        </button>
                    </div>
                    {/*Блок Нет аккаунта?*/}
                    <div className="flex items-center justify-center mt-[18px]">
                        <p className="montserrat-text text-[16px] text-[#000000] font-bold">Нет аккаунта?</p>
                        <button onClick={() => router.push("/auth")} className="montserrat-text text-[16px] text-[#2986E3] font-bold underline ml-[4px]">Зарегистрироваться</button>
                    </div>
                </div>
            </div>
        </div>
    )
}