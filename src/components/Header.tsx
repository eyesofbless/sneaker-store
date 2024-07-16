import React, {FC} from "react";


interface HeaderProps {
    children: React.ReactNode
}

const Header: FC<HeaderProps> = async ({children}) => {

    return (
        <div
            className="
          p-4
          shadow-md
          fixed
          top-0
          left-0
          w-full
          bg-white
          z-50
          ">
            <div className="flex justify-between items-center">
                {children}
            </div>

        </div>
    )
}

export default Header