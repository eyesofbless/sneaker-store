import {useEffect, useState} from "react";
import useAddToBasket from "@/hooks/useAddToBasket";
import Link from "next/link";

interface AddButtonProps {
    product: any;
    size: number;
}

const AddButton: React.FC<AddButtonProps> = ({product,size}) => {

    const [isInBasket, setIsInBasket] = useState(false)

    useEffect(() => {
        setIsInBasket(false)
    }, [size]);


    const addToBasket = useAddToBasket(); // Получаем функцию из хука


    return (
        <div>
            {product.in_stock ? (isInBasket ? <span className="
                    p-2
                    w-min
                    text-nowrap
                    border
                    border-gray-300
                    rounded-lg
                    text-[17px]">
                            Товар добавлен в {' '}
                            <Link
                                className='
                                border-b
                                border-gray-400'
                                href={'/basket'}>
                                 корзину
                            </Link>
                        </span> :
                        <div className="flex gap-5">
                            <button
                                onClick={
                                    () =>
                                    {addToBasket({product,size})
                                    setIsInBasket(true)}// Вызываем функцию при клике, передаем продукт
                                }
                                className="
                                p-2
                                hover:opacity-75
                                transition
                                text-white
                                bg-blue-600
                                rounded-lg
                                text-[17px]"
                            >
                                Добавить в корзину
                            </button>
                        </div>

                ) :
                <button
                    className="
                    p-2
                    cursor-default
                    text-white
                    bg-gray-300
                    rounded-lg
                    text-[17px]"
                >
                    Добавить в корзину
                </button>
            }
        </div>
    );
}

export default AddButton;
