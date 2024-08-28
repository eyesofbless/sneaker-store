"use client"

import Link from "next/link";
import {FC} from "react";


interface HeaderLinkProps {
    name: string
    path: string
    styles: string
}

const HeaderLink: FC<HeaderLinkProps> = ({name, path, styles}) => {
    return (
        <Link className={styles} href={path}>{name}</Link>
    )
}

export default HeaderLink