'use client'

import Header from "@/components/Header";
import HeaderLink from "@/components/HeaderLink";
import Image from "next/image";
import {BsBucketFill} from "react-icons/bs";
import {RxHamburgerMenu} from "react-icons/rx";
import Input from "@/components/Input";
import {useState, useEffect} from "react";
import Sidebar from "@/components/Sidebar";
import BasketIcon from "@/components/BasketIcon";


const Navigation = () => {


    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Блокировка прокрутки при открытом сайдбаре
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        // Очистка эффекта при размонтировании компонента
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

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
                <div className="flex gap-x-4">
                    <Input/>
                    <BasketIcon />
                </div>
            </div>
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
            {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={() => setIsOpen(false)}></div>}
            <div className="flex items-center gap-x-4 sm:hidden">
                <RxHamburgerMenu onClick={toggleMenu} className={'text-black cursor-pointer'} size={40}/>
                <Input/>
                <BasketIcon />
            </div>
        </Header>
    );
}

export default Navigation;
