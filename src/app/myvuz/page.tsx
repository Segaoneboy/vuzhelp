import React from 'react';
import CardVuz from "@/components/CardVuz";
import CardNapr from "@/components/CardNapr";

const myvuz = () => {
    return (
        <div className="bg-[#ECF0F1] min-h-screen">
            <button
                className="pt-[16px] text-[#3498DB] font-bold"
            >
                Назад
            </button>
            <h2 className="pt-[30px] text-[#2C3E50] text-2xl font-bold text-center">Мои вузы</h2>
            <div>
                <CardVuz number="98%" vuzName="МГУ"/>
                <CardNapr chanse="99%" name="ИВТ"/>
                <CardVuz number="88%" vuzName="ИТМО"/>
                <CardVuz number="28%" vuzName="МФТИ"/>
                <CardVuz number="62%" vuzName="НГУ"/>
                <CardVuz number="100%" vuzName="ПТУ"/>
            </div>
        </div>
    );
};

export default myvuz;