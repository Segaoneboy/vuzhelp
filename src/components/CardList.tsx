import React from 'react';
import CardNapr from './CardNapr';

// Тип для данных с бэкенда
interface NaprData {
    id: number; // или string, если используете UUID
    name: string;
    chanse: string;
}

interface CardListProps {
    naprData: NaprData[];
}

const CardList = ({ naprData }: CardListProps) => {
    // Если данных нет, показываем заглушку
    if (!naprData || naprData.length === 0) {
        return (
            <div className="text-center text-gray-500 py-4">
                Нет данных для отображения
            </div>
        );
    }

    return (
        <div className="w-full">
            {naprData.map((item) => (
                <CardNapr
                    key={item.id} // Важно для оптимизации React
                    name={item.name}
                    chanse={item.chanse}
                />
            ))}
        </div>
    );
};

export default CardList;