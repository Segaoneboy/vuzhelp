import React from "react";
import Image from "next/image";

interface CardVuzProps {
    number: string;
    vuzName: string;
    onClick: () => void;
    isActive?: boolean;
}

const CardVuz = ({ number, vuzName, onClick, isActive = false }: CardVuzProps) => {
    const arrowDown = '/arrow.svg';

    return (
        <div
            className={`
                w-[90%] h-[58px] bg-[#111856] rounded-2xl mt-3 
                flex items-center justify-between px-5 mx-auto
                cursor-pointer transition-all duration-200
                hover:bg-[#0e1449] active:scale-[0.99]
                relative
                ${isActive ? 'ring-2 ring-blue-400 shadow-lg' : ''}
            `}
            onClick={onClick}
        >
            {/* Стрелка с ротацией при активном состоянии */}
            <div className={`transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}>
                <Image
                    src={arrowDown}
                    alt="arrow icon"
                    className="rounded-full"
                    width={29}
                    height={29}
                />
            </div>

            {/* Название вуза - по центру */}
            <p className="font-bold text-[18px] text-white absolute left-1/2 transform -translate-x-1/2">
                {vuzName}
            </p>

            {/* Процент поступления */}
            <p className="font-bold text-[18px] text-white">
                {number}
            </p>
        </div>
    );
};

export default CardVuz;