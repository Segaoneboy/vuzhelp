'use client'
import React from 'react';
import CardVuz from "@/components/CardVuz";
import CardList from "@/components/CardList";
import {useState} from "react";

const myvuz = () => {

    const [isListVisible, setIsListVisible] = useState<boolean>(false);

    // Обработчик клика по карточке вуза
    const handleVuzClick = () => {
        // Переключаем видимость
        setIsListVisible(prev => !prev);
    };

    const mockData = [
        { id: 1, name: "ИВТ", chanse: "99%" },
        { id: 2, name: "ИБ", chanse: "85%" },
        { id: 3, name: "ПМИ", chanse: "92%" },
        { id: 4, name: "ФИИТ", chanse: "78%" },
    ];

    return (
        <div className="bg-[#ECF0F1] min-h-screen">
            <button
                className="pt-[16px] text-[#3498DB] font-bold"
            >
                Назад
            </button>
            <h2 className="pt-[30px] text-[#2C3E50] text-2xl font-bold text-center">Мои вузы</h2>
            <div>
                <CardVuz number="98%" vuzName="МГУ" onClick={handleVuzClick} isActive={isListVisible}/>
                {isListVisible && <CardList naprData={mockData} />}
                {/*<CardVuz number="88%" vuzName="ИТМО"/>*/}
                {/*<CardVuz number="28%" vuzName="МФТИ"/>*/}
                {/*<CardVuz number="62%" vuzName="НГУ"/>*/}
                {/*<CardVuz number="100%" vuzName="ПТУ"/>*/}
            </div>
        </div>
    );
};

export default myvuz;