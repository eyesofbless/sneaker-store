'use client'

import Image from "next/image";
import useLoadImage from "@/hooks/useLoadImage";
import {IoIosCheckmarkCircle} from "react-icons/io";
import {RxCross2} from "react-icons/rx";
import {MdDiscount} from "react-icons/md";
import ProductDescription from "@/components/product-card/ProductDescription";
import AddButton from "@/components/product-card/AddButton";
import {useState} from "react";

const ProductPage = ({product}: any) => {

    const path = useLoadImage(product.image_path, product.bucket, false);

    const [size, setSize] = useState(product.sizes[0])


    return (
        <div>
            <div className="
            h-screen
            flex
            justify-center
            items-start
            mt-[80px]
            sm:mt-[100px]">
                <div className="
                flex
                flex-col
                lg:flex-row
                gap-6
                p-5">
                    <Image
                        src={path}
                        className='
                        rounded-lg
                        ml-0'
                        alt={'Product image'}
                        width={500} height={500}/>
                    <div className='
                    flex
                    flex-col
                    p-3
                    sm:p-0
                    min-[500px]:w-[500px]
                    justify-between'>
                        <div>
                            <div className="font-semibold">
                                <div className='
                                flex
                                flex-wrap
                                text-[31px]
                                gap-2
                                mb-[30px]'>
                                    <p>{product.gender}</p>
                                    <p>{product.type}</p>
                                    <p>{product.brand}</p>
                                    <p className='block w-full'>{product.model}</p>
                                </div>
                                <div className={"flex gap-2 items-center"}>
                                    <p className={`${product.discount_price && 
                                    "text-[20px] line-through text-gray-400"}`}>
                                        {product.price} ₽
                                    </p>
                                    {product.discount_price
                                        &&
                                        <p className="text-[27px]">{product.discount_price} ₽</p>}
                                </div>
                                <div className="flex gap-2">
                                    <span className='
                                flex
                                items-center
                                gap-2
                                border
                                border-gray-300
                                w-min
                                text-nowrap
                                mt-5
                                p-2
                                rounded-lg'>
                                        {product.in_stock ?
                                            <IoIosCheckmarkCircle color={'#1E88E5'}/>
                                            :
                                            <RxCross2 color={'red'}/>}
                                        {product.in_stock ? 'В наличии' : 'Нет в наличии'}
                                    </span>
                                    {product.discount_price && <span className='
                                flex
                                items-center
                                gap-2
                                border
                                border-gray-300
                                w-min
                                text-nowrap
                                mt-5
                                p-2
                                rounded-lg'>
                                            <MdDiscount color={'#1E88E5'}/>
                                    Скидка
                                </span>
                                }
                                </div>
                            </div>
                            <div className='mt-10'>
                                <p>Выберите размер</p>
                                <div className="
                            flex
                            flex-wrap
                            gap-1
                            mb-5
                            mt-2
                            ">{product.sizes.map((item: number, index: number) =>
                                    <button
                                        onClick={() => setSize(item)}
                                        key={index}
                                        className={`
                                        ${item === size
                                            ?
                                            'border border-blue-600 text-blue-600'
                                            :
                                            'border border-gray-400'}        
                                            p-2
                                            pl-4
                                            pr-4
                                            rounded-lg`}
                                    >{item}</button>
                                )}
                                </div>
                                <AddButton
                                    product={product}
                                    size={size}
                                />
                            </div>
                        </div>

                        <ProductDescription
                            color={product.color}
                            country={product.country}
                            compound={product.compound}
                            gender={product.gender}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
