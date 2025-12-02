import React from "react";
import Image from "next/image";

interface CardVuzProps {
    number: string;
    vuzName: string;
}

const CardVuz = (props: CardVuzProps) => {
    const arrowDown = '/arrow.svg'
    const {number, vuzName} = props;
    return (
        <div className="w-[90%] h-[58px] bg-[#111856] rounded-2xl mt-3 flex items-center justify-between px-5 mx-auto">
            <Image
                src={arrowDown}
                alt="user avatar"
                className="rounded-full mr-[20px]"
                width={29}
                height={29}
            />
            <p className="font-bold text-[16px] text-white absolute left-1/2 transform -translate-x-1/2">{vuzName}</p>
            <p className="font-bold text-[12px] text-white ml-[20px]">{number}</p>
        </div>
    )
}

export default CardVuz;