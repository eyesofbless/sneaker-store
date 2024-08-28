import React from "react";
import Image from "next/image";
import useLoadImage from "@/hooks/useLoadImage";
import {RxCross1} from "react-icons/rx";

interface ProductCardProps {
    product: any
    size: number
    count: number
}

const ProductCard: React.FC<ProductCardProps> = ({product, size, count}) => {

    const path = useLoadImage(product.image_path)

    return (
        <div
            className="
            pt-5
            pb-5
            border-b
            border-gray-400">
            <div
                className="
                flex
                gap-5">
                <Image
                    src={path}
                    width={120}
                    height={50}
                    alt={'Product image'}/>
                <div className="flex flex-col w-full justify-between">
                    <div className="flex justify-between">
                        <div>
                            <p>{product.price} ₽</p>
                            <div
                                className="
                        flex gap-1">
                                <p>{product.brand}</p>
                                <p>{product.model}</p>
                            </div>
                        </div>
                        <RxCross1
                            onClick={() => {

                            }}
                            size={20}
                            className="
                            cursor-pointer"/>
                    </div>
                    <div className='flex items-center gap-2'>
                        <select
                            className="
                            w-full
                            h-full
                            rounded-md
                            bg-white
                            border
                            border-gray-300
                            pl-3
                            text-[14px]
                            ">
                            {product.sizes.map((item: any) =>
                                <option>{item}</option>
                            )}
                        </select>
                        <div
                            className='
                            flex
                            justify-between
                            items-center
                            gap-2
                            text-[0.875rem]
                            border
                            border-gray-300
                            rounded-md
                            leading-[1.0625rem]
                            h-[2.0625rem]
                            pl-3
                            pr-3'
                        >
                            <p className='text-gray-400 cursor-pointer'>-</p>
                            <p className=''>{count}</p>
                            <p className='text-gray-400 cursor-pointer'>+</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard