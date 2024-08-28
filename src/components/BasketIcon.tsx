import {BsBucketFill} from "react-icons/bs";
import useGetBasketProducts from "@/hooks/useGetBasketProducts";
import {useEffect, useState} from "react";
import Link from "next/link";

const BasketIcon = () => {

    const basketProductsCount = useGetBasketProducts()
    const [productsCount, setProductsCount] = useState(basketProductsCount?.length ?? 0)

    useEffect(() => {
        setProductsCount(basketProductsCount?.length ?? 0)
    }, [basketProductsCount]);

    return (
        <Link href={'/basket'}>
            <BsBucketFill className={'relative text-black cursor-pointer'} size={35}/>
            {productsCount > 0 &&
                <div
                    className={'flex justify-center items-center absolute top-5 right-3 w-[16px] h-[16px] text-[12px] text-white bg-red-500 rounded-[50%]'}>
                    {productsCount}
                </div>}
        </Link>
    )
}

export default BasketIcon;