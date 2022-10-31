import React from 'react'
import styled from "@emotion/styled";
import {NavLink} from "../NavLink/NavLink";
import MainLayout from "../MainLayout/MainLayout";

const StyledNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  //background: rgba(56, 202, 102, 0.31);
`

type TProps = {}
export const NavBar: React.FC<TProps> = (props) => {
    return (
        <StyledNavBar>
            <NavLink href={"/"} text={`Game`}/>
            <NavLink href={"/settings"} text={`Settings`}/>
        </StyledNavBar>
    )
}
NavBar.displayName = 'NavBar'
export default NavBar