'use client'
import ShoesItem from "@/app/shoes/components/ShoesItem";
import React from "react";

interface ShoesListProps {
    models: any
}

const ShoesList: React.FC<ShoesListProps> = ({models}) => {


    return (
        <div className="
        grid
        grid-cols-2
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-[10px]">
            {models.map((sneakers: any) => (
                <ShoesItem
                    id={sneakers.id}
                    key={sneakers.id}
                    image_path={sneakers.image_path}
                    brand={sneakers.brand}
                    model={sneakers.model}
                    price={sneakers.price}
                />
            ))}
        </div>
    );
};

export default ShoesList;
