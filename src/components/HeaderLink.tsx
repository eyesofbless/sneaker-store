import Link from "next/link";
import {FC} from "react";

interface HeaderLinkProps {
    name:string
    path:string
}

const HeaderLink:FC<HeaderLinkProps> = ({name,path}) => {
  return (
      <Link className={} href={path}>{name}</Link>
  )
}

export default HeaderLink