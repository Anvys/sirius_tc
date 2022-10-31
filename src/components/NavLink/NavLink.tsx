import React from 'react'
import styled from "@emotion/styled";
import Link from "next/link";
import NavBar from "../NavBar/NavBar";

const StyledNavLink = styled.div`
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(56, 202, 102, 0.31);
  border-radius: 5px;
`

type TProps = {
    text:string
    href: string
}
export const NavLink:React.FC<TProps> = (props) => {
    const {text,href, ...rest} = props
    return (
        <StyledNavLink {...rest}><Link href={href}>{text}</Link></StyledNavLink>
    )
}
NavLink.displayName = 'NavLink'
export default NavLink