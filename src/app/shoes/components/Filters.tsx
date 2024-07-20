'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import qs from "query-string";

const Filters = ({ currentFilters }:any) => {
    const [selectedOption, setSelectedOption] = useState('Цена (по возрастанию)');
    console.log(selectedOption);

    const router = useRouter();

    useEffect(() => {
        let query: Record<string, any> = {
            ...currentFilters
        };
        if (selectedOption === 'Цена (по возрастанию)') {
            query.selectedOption = 'price ascending'
        }

        if (selectedOption === 'Цена (по убыванию)') {
            query.selectedOption = 'price decreasing'
        }

        if (selectedOption === 'Дата поступления') {
            query.selectedOption = 'date decreasing'
        }

        const url = qs.stringifyUrl({
            url: "/shoes",
            query: query,
        });

        router.push(url);
    }, [router, selectedOption]);

    return (
        <div>
            <select
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="
              text-[13px]
              sm:text-[16px]
              p-2
              rounded-lg
              border-[1px]
              border-gray-400
              bg-white
              cursor-pointer">
                <option>Дата поступления</option>
                <option>Цена (по возрастанию)</option>
                <option>Цена (по убыванию)</option>
            </select>
        </div>
    );
};

export default Filters;
