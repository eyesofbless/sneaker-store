import React from "react";
import HeaderLink from "@/components/header/HeaderLink";
import { RxCross1 } from "react-icons/rx";

interface SidebarProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({isOpen, setIsOpen}) => {

    const stylesForLink = 'text-black' +
        ' hover:bg-gray-100' +
        ' p-2 cursor' +
        'cursor-pointer';

    return (
        <div
            className={`fixed top-0 right-0 w-64 h-full bg-white text-white transform ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-300 ease-in-out z-50`}
        >
            <div className="p-4">
                <div className='flex justify-between items-center'>
                    <p className="text-3xl text-black">
                        МЕНЮ
                    </p>
                    <button onClick={() => setIsOpen(false)}
                            className="
                        p-2
                        hover:opacity-75
                        transition
                        text-black
                        ">
                        <RxCross1 size={30}/>
                    </button>
                </div>
                <nav className="mt-4">
                    <div className="flex flex-col gap-3">
                        <HeaderLink styles={stylesForLink} name={'Бренды'} path={'/brands'}/>
                        <HeaderLink styles={stylesForLink} name={'Обувь'} path={'/shoes'}/>
                        <HeaderLink styles={stylesForLink} name={'Одежда'} path={'/clothes'}/>
                        <HeaderLink styles={stylesForLink} name={'Аксессуары'} path={'/accessories'}/>
                        <HeaderLink styles={stylesForLink} name={'Распродажа'} path={'/sale'}/>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Sidebar;
