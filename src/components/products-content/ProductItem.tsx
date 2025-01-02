import useLoadImage from "@/hooks/useLoadImage";
import Image from "next/image";
import React from "react";
import Link from "next/link";

interface ProductItemProps {
    image_path: string;
    brand: string;
    model: string;
    price: number;
    id: number;
    bucket: string;
    discount_price: number | null;
}

const ProductItem: React.FC<ProductItemProps> = ({image_path, brand, model, price, bucket, discount_price}) => {
    const path = useLoadImage(image_path, bucket, true);
    return (
        <div>
            <Link href={`/${bucket.slice(0, bucket.indexOf('_'))}/${image_path}`}>
                <div className={'relative'}>
                    <Image
                        src={path}
                        alt={'Image'}
                        className=' cursor-pointer relative'
                        width={800} height={600}
                        sizes="(width: 100% height: auto)"
                    />
                    {discount_price && <span className="
                    absolute
                    top-2
                    left-2
                    p-[2px]
                    pl-[4px]
                    pr-[4px]
                    bg-red-500
                    rounded-md
                    text-white
                    text-[14px]
                    ">sale!</span>}
                </div>
            </Link>
            <div className='flex flex-col gap-1 mb-2'>
                <div className='flex gap-2 items-center'>
                    <p>{brand}</p>
                    <p className='text-xs'>{model}</p>
                </div>
                <div className="flex gap-2 items-center">
                    <p className={`${discount_price && 
                    "text-[12px] line-through text-gray-400"}`}>
                        {price} ₽
                    </p>
                    {discount_price
                        && <p>{discount_price} ₽</p>}
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
