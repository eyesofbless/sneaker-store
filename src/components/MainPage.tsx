'use client'

import {useBasketStore} from "@/stores/basket-store";
import {useEffect} from "react";
import Image from "next/image";
import FadeInSection from "@/app/components/FadeInSection";
import {SiAdidas, SiNike, SiPuma , SiReebok} from "react-icons/si";
import Link from "next/link";

const MainPage = () => {

    const {fetchBasketProducts}: any = useBasketStore()

    useEffect(() => {
        let fetchBasketProductsFunction = async () => {
            await fetchBasketProducts()
        }
        fetchBasketProductsFunction()
    }, []);

    return (
        <div>
            <div>
                <div
                    className="
                    flex
                    flex-col
                    gap-5
                    justify-center
                    items-center
                    text-[20px]
                    md:text-[25px]
                    ">
                    <FadeInSection>
                        <Link href="/sale">
                            <Image src={'/images/main-image.webp'}
                                   alt={'main-image'}
                                   width={"950"}
                                   height={"50"}
                                   className="rounded-lg cursor-pointer"
                            />
                        </Link>
                    </FadeInSection>
                    <div className="flex flex-col gap-5 w-full">
                        <FadeInSection>
                            <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-5">
                                <Link className="
                                border-[2px]
                                border-black
                                rounded-lg
                                cursor-pointer
                                p-10
                                " href={"/male"}>
                                    <span>
                                    МУЖЧИНАМ
                                </span>
                                </Link>
                                <Link className="
                                border-[2px]
                                border-black
                                cursor-pointer
                                rounded-lg
                                p-10"
                                      href={"/all_gen"}>
                                    <span>
                                        ВСЕМ
                                </span>
                                </Link>
                                <Link className="
                                border-[2px]
                                border-black
                                cursor-pointer
                                rounded-lg
                                p-10"
                                      href={"/female"}>
                                    <span>
                                    ЖЕНЩИНАМ
                                </span>
                                </Link>
                            </div>
                        </FadeInSection>
                        <div className="flex flex-col text-center gap-5">
                            <FadeInSection>
                                <div className=" grid md:grid-cols-4 grid-cols-2 justify-between w-full gap-5">
                                    <Link className="
                                flex
                                justify-center
                                items-center
                                border-[2px]
                                text-[35px]
                                border-black
                                cursor-pointer
                                rounded-lg
                                w-full
                                p-10" href="/brands/Nike">
                                        <div className="
                                flex
                                justify-center
                                items-center
                                ">
                                            <SiNike size={100}/>
                                        </div>
                                    </Link>
                                    <Link className="
                                flex
                                justify-center
                                items-center
                                border-[2px]
                                text-[35px]
                                border-black
                                cursor-pointer
                                rounded-lg
                                w-full
                                p-10" href="/brands/adidas">
                                        <div className="
                                flex
                                justify-center
                                items-center
                                ">
                                            <SiAdidas size={100}/>
                                        </div>
                                    </Link>
                                    <Link className="
                                flex
                                justify-center
                                items-center
                                border-[2px]
                                text-[35px]
                                border-black
                                cursor-pointer
                                rounded-lg
                                w-full
                                p-10" href="/brands/PUMA">
                                        <div className="
                                flex
                                justify-center
                                items-center
                                ">
                                            <SiPuma size={100}/>
                                        </div>
                                    </Link>
                                    <Link className="
                                flex
                                justify-center
                                items-center
                                border-[2px]
                                text-[35px]
                                border-black
                                cursor-pointer
                                rounded-lg
                                w-full
                                p-10" href="/brands/Reebok">
                                        <div className="
                                flex
                                justify-center
                                items-center
                                ">
                                            <SiReebok size={100}/>
                                        </div>
                                    </Link>
                                </div>
                            </FadeInSection>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage