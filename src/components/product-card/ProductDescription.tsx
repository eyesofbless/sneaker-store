import React from "react";

interface shoesDescriptionProps {
    color: string,
    country: string,
    compound: string,
    gender: string,
}

const ProductDescription: React.FC<shoesDescriptionProps> = ({color, country, compound, gender}) => {
    return (
        <div className="mt-5">
            <p>Описание</p>
            <div className='
        flex
        flex-col
        border
        border-black
        text-nowrap
        lg:w-min
        p-5
        mt-2
        gap-5
        rounded-lg
        '>
                {gender && <p>
                    Пол: {gender}
                </p>}
                {color && <p>
                    Цвета: {color}
                </p>}
                {country && <p>
                    Страна: {country}
                </p>}
                {compound && <p>
                    Состав: {compound}
                </p>}
            </div>
        </div>
    )
}

export default ProductDescription