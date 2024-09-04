'use client'

import Header from "@/components/header/Header";
import HeaderLink from "@/components/header/HeaderLink";
import Image from "next/image";
import {RxHamburgerMenu} from "react-icons/rx";
import Input from "@/components/header/Input";
import React, {useState} from "react";
import Sidebar from "@/components/header/Sidebar";
import BasketIcon from "@/components/header/BasketIcon";
import {usePathname} from "next/navigation";


interface NavigationProps {
    foundProducts?: any
}

const Navigation: React.FC<NavigationProps> = ({foundProducts=[]}) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    const pathname = usePathname();



    const stylesForLink =
        'hover:text-blue-600 transition text-[15px] text-black'

    return (
        <Header>
            <Image
                src={'/images/sneaker-icon.png'}
                alt={'logo'}
                width={"50"}
                height={"50"}
                className="cursor-pointer"
            />
            <div className="sm:block hidden">
                <div className="flex gap-3">
                    <HeaderLink styles={stylesForLink} name={'Бренды'} path={'/brands'}/>
                    <HeaderLink styles={stylesForLink} name={'Обувь'} path={'/shoes'}/>
                    <HeaderLink styles={stylesForLink} name={'Одежда'} path={'/clothes'}/>
                    <HeaderLink styles={stylesForLink} name={'Аксессуары'} path={'/accessories'}/>
                    <HeaderLink styles={stylesForLink} name={'Распродажа'} path={'/sale'}/>
                </div>
            </div>

            <div className="sm:block hidden">
                {pathname !== '/basket' &&
                    <div className="flex gap-x-4">
                        <Input foundProducts={foundProducts}/>
                        <BasketIcon/>
                    </div>}
            </div>
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
            {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={() => setIsOpen(false)}></div>}
            <div className="flex items-center gap-x-4 sm:hidden">
                <RxHamburgerMenu onClick={toggleMenu} className={'text-black cursor-pointer'} size={40}/>
                {pathname !== '/basket' &&
                    <div className="flex gap-x-4">
                        <Input foundProducts={foundProducts}/>
                        <BasketIcon/>
                    </div>
                }
            </div>
        </Header>
    );
}

export default Navigation;
