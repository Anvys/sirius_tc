import React from 'react'
import styled from "@emotion/styled";
import {NavBar} from "../NavBar/NavBar";
import ItemStartPlace from "../ItemStartPlace/ItemStartPlace";

const StyledMainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

type TProps = {
    children: React.ReactNode
}
export const MainLayout: React.FC<TProps> = (props) => {

    return (
        <StyledMainLayout>
            <NavBar/>
            {props.children}
        </StyledMainLayout>
    )
}
MainLayout.displayName = 'MainLayout'
export default MainLayout