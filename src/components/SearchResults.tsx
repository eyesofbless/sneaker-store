import Image from "next/image";
import React from "react";
import useLoadImage from "@/hooks/useLoadImage";
import Link from "next/link";

interface SearchResultsProps {
    product: any
}

const SearchResults: React.FC<SearchResultsProps> = ({product}) => {

    const path = useLoadImage(product.image_path)

    return (
        <Link href={`/shoes/${product.id}`}>
            <div className="flex p-3 gap-2 pl-0">
                <Image src={path} alt={''} width={80} height={80}/>
                <div className="flex flex-col justify-between">
                    <div className="flex gap-1">
                        <p>{product.brand}</p>
                        <p>{product.model}</p>
                    </div>
                    <div>{product.price} ₽</div>
                </div>
            </div>
        </Link>
    )
}

export default SearchResults