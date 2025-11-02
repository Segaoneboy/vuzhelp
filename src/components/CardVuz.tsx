import React from "react";
import Image from "next/image";

interface CardVuzProps {
    number: number;
    vuzName: string;
}

const CardVuz = (props: CardVuzProps) => {
    const arrowDown = '/arrow.svg'
    const {number, vuzName} = props;
    return (
        <div className="w-[90%] h-[58px] bg-[#34495E] rounded-2xl mt-5 flex items-center justify-between px-5">
            <p className="font-bold text-[12px] text-white ml-[20px]">{number}</p>
            <p className="font-bold text-[16px] text-white absolute left-1/2 transform -translate-x-1/2">{vuzName}</p>
            <Image
                src={arrowDown}
                alt="user avatar"
                className="rounded-full mr-[20px]"
                width={29}
                height={29}
            />
        </div>
    )
}

export default CardVuz;