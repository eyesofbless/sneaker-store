import React, { useState, useEffect } from "react";
import Image from "next/image";
import useLoadImage from "@/hooks/useLoadImage";
import { RxCross1 } from "react-icons/rx";
import useAddProduct from "@/hooks/basket/useAddProduct";
import useDeleteProduct from "@/hooks/basket/useDeleteProduct";
import useUpdateProduct from "@/hooks/basket/useUpdateProduct";
import {ProductInterface} from "../../../../types";

interface ProductCardProps {
    product: ProductInterface;
    size: number;
    count: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, size, count }) => {
    const path = useLoadImage(product.image_path,product.bucket,true);
    const addProduct = useAddProduct();
    const removeProduct = useDeleteProduct();
    const updateProduct = useUpdateProduct();

    // State для управления выбранным размером
    const [selectedSize, setSelectedSize] = useState<number>(size);

    // Обработчик изменения размера
    const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newSize = parseFloat(event.target.value); // Преобразуем значение в float
        setSelectedSize(newSize); // Обновляем состояние
        updateProduct({ product, size: selectedSize, updatedSize: newSize });
    };

    // Синхронизация состояния выбранного размера при изменении пропсов
    useEffect(() => {
        setSelectedSize(size);
    }, [size]);

    return (
        <div className="pt-5 pb-5 border-b border-gray-400">
            <div className="flex gap-5">
                <Image src={path} width={120} height={50} alt={"Product image"} />
                <div className="flex flex-col w-full justify-between">
                    <div className="flex justify-between">
                        <div>
                            <p className="font-semibold">{product.price} ₽</p>
                            <div className="flex gap-1">
                                <p>{product.brand}</p>
                                <p>{product.model}</p>
                            </div>
                        </div>
                        <RxCross1
                            onClick={() => {
                                removeProduct({ product, size: selectedSize, removeProduct: true });
                            }}
                            size={20}
                            className="cursor-pointer"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <select
                            value={selectedSize}
                            onChange={handleSizeChange}
                            className="w-full h-full rounded-md bg-white border border-gray-300 pl-3 text-[14px]"
                        >
                            {product.sizes.map((item: any, index: any) => (
                                <option key={index} value={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                        <div className="flex justify-between items-center gap-2 text-[0.875rem] border border-gray-300 rounded-md leading-[1.0625rem] h-[2.0625rem] pl-3 pr-3">
                            <button
                                disabled={count === 1}
                                className="text-gray-400 cursor-pointer"
                                onClick={() => {
                                    removeProduct({ product, size: selectedSize, removeProduct: false });
                                }}
                            >
                                -
                            </button>
                            <p>{count}</p>
                            <button
                                className="text-gray-400 cursor-pointer"
                                onClick={() => {
                                    addProduct({ product, size: selectedSize });
                                }}
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
