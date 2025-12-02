import React from 'react';
import Image from "next/image";

interface CardProps {
    chanse: string;
    name: string;
}

const CardNapr = (props: CardProps) => {
    const {chanse, name} = props;

    return (
        <div
            className="w-[90%] h-[40px] bg-[#111856] rounded-2xl mt-1.5 flex items-center justify-between px-5 mx-auto relative">
            <p className="font-bold text-[18px] text-white absolute left-1/2 transform -translate-x-1/2">{name}</p>

            <p className="font-bold text-[18px] text-white ml-auto">{chanse}</p>
        </div>
    );
};

export default CardNapr;