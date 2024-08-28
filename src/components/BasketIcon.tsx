'use client'

import {BsBucketFill} from "react-icons/bs";
import Link from "next/link";
import {useBasketStore} from "@/stores/basket-store";
import {useEffect} from "react";

const BasketIcon = () => {

    const {basketProductsCount}: any = useBasketStore()


    return (
        <Link href={'/basket'}>
            <BsBucketFill className={'relative text-black cursor-pointer'} size={35}/>
            {basketProductsCount > 0 &&
                <div
                    className={'flex justify-center items-center absolute top-5 right-3 w-[16px] h-[16px] text-[12px] text-white bg-red-500 rounded-[50%]'}>
                    {basketProductsCount}
                </div>}
        </Link>
    )
}

export default BasketIcon;