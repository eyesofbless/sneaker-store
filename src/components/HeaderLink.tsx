"use client"

import Link from "next/link";
import {FC} from "react";


interface HeaderLinkProps {
    name: string
    path: string
    styles:string
}

const HeaderLink: FC<HeaderLinkProps> = ({name, path, styles}) => {
    return (
        <div>
            <div className={styles}>
                <Link href={path}>{name}</Link>
            </div>
        </div>
    )
}

export default HeaderLink