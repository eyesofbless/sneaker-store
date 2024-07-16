// HAVE NO ACTIONS ON CLICK



import Header from "@/components/Header";
import HeaderLink from "@/components/HeaderLink";
import Image from "next/image";
import { BsBucketFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import Input from "@/components/Input";


let Navigation = () => {

    return (
        <Header>
            <Image src={'/images/sneaker-icon.png'}
                   alt={'logo'}
                   width={"50"}
                   height={"50"}
                   className="cursor-pointer"

            />
            <div className="sm:block hidden">
                <div
                    className="
                        flex
                        gap-3
            "
                >
                    <HeaderLink name={'Бренды'} path={'/brands'} />
                    <HeaderLink name={'Обувь'} path={'/shoes'} />
                    <HeaderLink name={'Одежда'} path={'/clothes'} />
                    <HeaderLink name={'Аксессуары'} path={'/accessories'} />
                    <HeaderLink name={'Распродажа'} path={'/sale'} />
                </div>
            </div>

            <div className="sm:block hidden">
                <div className="flex gap-x-4">
                    <Input />
                    <BsBucketFill
                        className={'text-black cursor-pointer'} size={35}/>
                </div>
            </div>
            <div className="flex items-center gap-x-4 sm:hidden">
                <RxHamburgerMenu className={'text-black cursor-pointer'} size={40}/>
                <Input />
                <BsBucketFill className={'text-black cursor-pointer'} size={35}/>
            </div>
        </Header>

    );
}

export default Navigation