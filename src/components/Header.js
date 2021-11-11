import React, {useState} from 'react';

import styled from '@emotion/styled';

import logoimg from '../assets/images/logo.svg';
import carticon from '../assets/images/icon-cart.svg';
import avatarimg from '../assets/images/image-avatar.png';



const HeaderDiv = styled.header`
    width: 100%;
    padding: 25px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 4px solid var(--LightGrayishBlue);
`;

const LeftDiv = styled.div`
   display: flex;
   align-items: center;
   width: 60%;
`;

const LogoDiv = styled.img`
   height: 22px;
   margin-right: 40px;
   
`;

const MenuDiv = styled.nav`
     display: flex;
     list-style-type: none;
     
`;

const LiMenu = styled.li`
     margin-right: 25px;
    &:last-of-type {
    margin-right: 0;
    }
`;

const MenuTexto = styled.a`
  text-decoration: none;
  color:var(--DarkGrayishBlue);
    
`;

const RightDiv = styled.div`
    display: flex;
    align-items: center;
`;

const CartImage = styled.img`
    margin-right: 40px;

    &:hover{
        cursor: pointer;
    }
`;

const AvatarImage = styled.img`
    height: 40px;
    border-radius: 50%;
    
    &:hover{
        cursor: pointer;
        border: 1px solid var(--Orange);
    }

`;

//Notificacion
const BolaNotificacion = styled.div`
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: var(--Orange);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top:25px;
    right: 270px;
`
const Notificacion = styled.p`
    font-size: 10px;
    color:white;
`

const Header = ({setVisibilidad, visibilidad, cantidad}) => {

    const changeVisibilidad = e => {
        if(visibilidad){
            setVisibilidad(false);
        }else{
            setVisibilidad(true);
        }
    }

    return ( 
        <>
        <HeaderDiv>
            <LeftDiv>
                <LogoDiv
                    src={logoimg}
                    alt="Logo"
                />
                <MenuDiv>
                    <LiMenu><MenuTexto href="!#">Collections</MenuTexto></LiMenu>
                    <LiMenu><MenuTexto href="!#">Men</MenuTexto></LiMenu>
                    <LiMenu><MenuTexto href="!#">Women</MenuTexto></LiMenu>
                    <LiMenu><MenuTexto href="!#">About</MenuTexto></LiMenu>
                    <LiMenu><MenuTexto href="!#">Contact</MenuTexto></LiMenu>
                </MenuDiv>
            </LeftDiv>
            <RightDiv>
                <CartImage
                    src = {carticon}
                    onClick={ changeVisibilidad}
                />
                {cantidad > 0 ? (
                    <BolaNotificacion>
                    <Notificacion>{cantidad}</Notificacion>
                </BolaNotificacion>
                ): null}
                <AvatarImage
                    src = {avatarimg}
                />
            </RightDiv>
        </HeaderDiv>
        </>
        
     );
}
 
export default Header;