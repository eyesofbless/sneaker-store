'use client'

import Navigation from "@/components/header/Navigation";
import Image from "next/image";
import useLoadImage from "@/hooks/useLoadImage";
import {IoIosCheckmarkCircle} from "react-icons/io";
import {RxCross2} from "react-icons/rx";
import ShoesDescription from "@/app/shoes/[id]/ShoesDescription";
import AddButton from "@/app/shoes/[id]/AddButton";
import {useState} from "react";

const ShoesPage = ({shoes}: any) => {

    const path = useLoadImage(shoes.image_path);

    const [size, setSize] = useState(shoes.sizes[0])


    let shoesType;
    switch (shoes.type) {
        case 'gumshoes':
            shoesType = 'кеды';
            break;
        case 'sneakers':
            shoesType = 'кроссовки';
            break;
        case 'boots':
            shoesType = 'ботинки';
    }


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
                        alt={'Shoes image'}
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
                                    <p>{shoes.gender === 'man' ? 'Мужские' : 'Женские'}</p>
                                    <p>{shoesType}</p>
                                    <p>{shoes.brand}</p>
                                    <p className='block w-full'>{shoes.model}</p>
                                </div>
                                <p className="text-[27px]">{shoes.price} ₽</p>
                                <div className='
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
                                    {shoes.in_stock ?
                                        <IoIosCheckmarkCircle color={'#1E88E5'}/>
                                        :
                                        <RxCross2 color={'red'}/>}
                                    {shoes.in_stock ? 'В наличии' : 'Нет в наличии'}
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
                            ">{shoes.sizes.map((item: number, index: number) =>
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
                                    product={shoes}
                                    size={size}
                                />
                            </div>
                        </div>

                        <ShoesDescription
                            color={shoes.color}
                            country={shoes.country}
                            compound={shoes.compound}
                            gender={shoes.gender}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoesPage;
