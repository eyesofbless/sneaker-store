import useLoadImage from "../../../../hooks/useLoadImage";
import Image from "next/image";
import React from "react";

interface ShoesItemProps {
    image_path: string;
    brand: string;
    model: string;
}

const ShoesItem: React.FC<ShoesItemProps> = ({ image_path, brand, model }) => {
    const path = useLoadImage(image_path);

    return (
        <div>
            <Image
                src={path}
                alt={'Image'}
                className='w-[100%] cursor-pointer'
                width={100} height={100}
                sizes="(width: 100% height: auto)"
            />
            <div className='flex gap-2 items-center mb-2'>
                <p>{brand}</p>
                <p className='text-xs'>{model}</p>
            </div>
            <p></p>
        </div>
    );
};

export default ShoesItem;
