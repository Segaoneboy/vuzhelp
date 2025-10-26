'use client';
import { useRouter } from "next/navigation"

// Страница Регистрации

export default function Auth() {
    const router = useRouter();
    return (
        <div className="bg-[#ECF0F1] min-h-screen">
            <h2 className="pt-[30px] bg-none text-[#2C3E50] text-2xl font-bold text-center">Регистрация</h2>
            <div className="flex items-center justify-center w-full h-[70vh]">
                <div className="w-full max-w-[100%] mx-4">
                    {/*Форма регистрации*/}
                    <form className="bg-transparent">
                        <div className="flex flex-col items-center space-y-4 mt-8">
                            <input
                                type="text"
                                className="w-[95%] h-[70px] rounded-[20px] bg-[#34495E] text-white placeholder:text-white placeholder:text-xs placeholder:font-bold pl-8"
                                placeholder="Ваше Имя"
                            />

                            <input
                                type="text"
                                className="w-[95%] h-[70px] rounded-[20px] bg-[#34495E] text-white placeholder:text-white placeholder:text-xs placeholder:font-bold pl-8"
                                placeholder="Ваш ID"
                            />
                        </div>
                    </form>

                    <div className="flex flex-col space-y-4 items-center mt-[18px]">
                        <button
                            onClick={() => router.push("/profile")}
                            className="w-[95%] h-[50px] text-white bg-[#3498DB] rounded-[20px] text-xs font-bold"
                        >
                            Зарегистрироваться
                        </button>
                    </div>
                    {/*Блок Есть Аккаунт?*/}
                    <div className="flex items-center justify-center mt-[18px]">
                        <p className="text-[16px] text-[#34495E] font-bold">Есть аккаунт?</p>
                        <button onClick={() => router.push("/")}
                                className="text-[16px] text-[#3498DB] font-bold underline ml-[4px]">Войти
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
