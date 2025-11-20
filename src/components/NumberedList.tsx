import React from 'react';

interface NumberedListProps {
    items: string[];
    maxHeight?: string;
    scrollThreshold?: number;
}

const NumberedList: React.FC<NumberedListProps> = ({
                                                       items = [],
                                                       maxHeight = 'max-h-40',
                                                       scrollThreshold = 5
                                                   }) => {
    const showScroll = items.length > scrollThreshold;

    return (
        <div className={`${maxHeight} ${showScroll ? 'overflow-y-auto pr-2' : 'overflow-hidden'}`}>
            <div className="space-y-2">
                {items.map((item, index) => (
                    <div key={index} className="flex items-start">
            <span className="text-black text-base font-bold mr-0.5 min-w-6">
              {index + 1}.
            </span>
                        <span className="text-black font-bold text-base">{item}</span>
                    </div>
                ))}
                {items.length === 0 && (
                    <p className="text-black font-bold text-base text-center">Список пуст</p>
                )}
            </div>
        </div>
    );
};

export default NumberedList;