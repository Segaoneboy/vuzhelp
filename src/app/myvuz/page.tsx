import React from 'react';
import CardVuz from "@/components/CardVuz";
import { useRouter } from "next/navigation"

const myvuz = () => {
    const router = useRouter();
    return (
        <div className="bg-[#ECF0F1] min-h-screen">
            <button
                className="pt-[16px] text-[#3498DB] font-bold"
                onClick={() => router.push("/profile")}
            >
                Назад
            </button>
            <h2 className="pt-[30px] text-[#2C3E50] text-2xl font-bold text-center">Мои вузы</h2>
            <div>
                <CardVuz number={1} vuzName="МГУ"/>
            </div>
        </div>
    );
};

export default myvuz;