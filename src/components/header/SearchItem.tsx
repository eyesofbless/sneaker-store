import Image from "next/image";
import React, {useEffect} from "react";
import useLoadImage from "@/hooks/useLoadImage";
import Link from "next/link";

interface SearchItemProps {
    product: any
}

const SearchItem: React.FC<SearchItemProps> = ({product}) => {

    const path = useLoadImage(product.image_path,product.bucket,true)

    return (
        <Link href={`/${product.bucket.slice(0,product.bucket.indexOf('_'))}/${product.image_path}`}>
            <div className="flex p-3 gap-2 pl-0 text-[13px]">
                <Image src={path} alt={''} width={70} height={70}/>
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

export default SearchItem