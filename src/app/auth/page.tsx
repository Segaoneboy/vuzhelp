'use client';
import { useRouter } from "next/navigation"
import {useTelegram} from "@/providers/TelegramProviders";
import MainButton from "@/components/ui/MainButton";

export default function Auth() {
    const router = useRouter();
    const { themeParams } = useTelegram();

    return (
        <div className="bg-gradient-to-b from-[#E8EFFA] to-[#AFC5E6] min-h-screen">
            <h2 className="montserrat-text pt-[50px] bg-none text-[#000000] text-[24px] font-bold text-center">Регистрация</h2>
            <div className="flex items-center justify-center w-full h-[70vh]">
                <div className="w-full max-w-[100%] mx-4">
                    <form className="bg-transparent">
                        <div className="flex flex-col items-center space-y-4 mt-8">
                            <input
                                type="text"
                                className="montserrat-text w-[95%] h-[70px] rounded-[20px] bg-[#111856] text-[#989EDA] placeholder:text-[#989EDA] placeholder:text-[20px] placeholder:font-bold pl-8 font-bold"
                                placeholder="Ваше Имя"
                            />

                            <input
                                type="text"
                                className="montserrat-text w-[95%] h-[70px] rounded-[20px] bg-[#111856] text-[#989EDA] placeholder:text-[#989EDA] placeholder:text-[20px] placeholder:font-bold pl-8 font-bold"
                                placeholder="Ваш ID"
                            />
                        </div>
                    </form>
                    <div className="pt-3">
                        <MainButton text="Зарегистрироваться" url="profile"/>
                    </div>
                    <div className="flex items-center justify-center mt-[18px]">
                        <p className="montserrat-text text-[16px] text-[#000000] font-bold">Есть аккаунт?</p>
                        <button onClick={() => router.push("/")}
                                className="montserrat-text text-[16px] text-[#2986E3] font-bold underline ml-[4px]">Войти
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}