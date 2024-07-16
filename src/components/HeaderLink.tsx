"use client"

import Link from "next/link";
import {FC} from "react";


interface HeaderLinkProps {
    name: string
    path: string
}

const HeaderLink: FC<HeaderLinkProps> = ({name, path}) => {
    return (
        <div>
            <div className="
      hover:text-blue-600
      transition
      text-[15px]
      text-black
      ">
                <Link href={path}>{name}</Link>
            </div>
        </div>
    )
}

export default HeaderLink