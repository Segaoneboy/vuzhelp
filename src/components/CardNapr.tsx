import React from 'react';
import Image from "next/image";

interface CardProps {
    chanse: string;
    name: string;
}

const CardNapr = (props: CardProps) => {
    const {chanse, name} = props;

    return (
        <div className="w-[90%] h-[40px] bg-[#111856] rounded-2xl mt-1.5 flex items-center px-5 mx-auto">
            <div className="flex-1 text-center ml-2">
                <p className="font-bold text-[18px] text-white">{name}</p>
            </div>
            <p className="font-bold text-[18px] text-white ml-4">{chanse}</p>
        </div>
    );
};

export default CardNapr;