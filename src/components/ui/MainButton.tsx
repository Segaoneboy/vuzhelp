import React from 'react';
import { useRouter } from "next/navigation";

interface buttonText {
    text: string;
    url: string;
}

const MainButton = (props: buttonText) => {
    const router = useRouter();
    const {text, url} = props;
    return (
        <div className="flex justify-center">
            <button
                onClick={() => router.push('/'+{url})}
                className="montserrat-text w-[90%] h-[50px] text-white bg-gradient-to-b from-[#BFD9FF] to-[#4B5CF2] rounded-[25px] text-[18px] font-bold"
            >
                {text}
            </button>
        </div>
    );
};

export default MainButton;