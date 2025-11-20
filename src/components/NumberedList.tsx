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
            <span className="text-gray-600 font-medium mr-2 min-w-6">
              {index + 1}.
            </span>
                        <span className="text-gray-800">{item}</span>
                    </div>
                ))}
                {items.length === 0 && (
                    <p className="text-gray-500 text-center">Список пуст</p>
                )}
            </div>
        </div>
    );
};

export default NumberedList;