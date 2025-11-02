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
        <div className="w-95% bg-[#34495E] rounded-2xl mt-5">
            <p className="font-bold text-[12px] text-[#ffffff]">{number}</p>
            <p className="font-bold text-[16px] text-[#ffffff]">{vuzName}</p>
            <Image
                src={arrowDown}
                alt="user avatar"
                className="rounded-full"
                width={29}
                height={29}
            />
        </div>
    )
}

export default CardVuz;