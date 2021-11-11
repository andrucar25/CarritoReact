import React from 'react';
import styled from '@emotion/styled';

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.5);
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ContenedorModal = styled.div`
    width: 500px;
    min-height: 100px;
    /* background: #fff; */
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100,100,111, 0.2) 0px 7px 29px 0px;
    padding: 20px;
`
const BotonCerrar = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    background: #000;
    width: 35px;
    height: 35px;
    border:none;
    background: none;
    cursor: pointer;
    transition: .3s ease all;
    border-radius: 5px;
    color: var(--Orange);
    font-weight: 700;

    &:hover{
        background: #F2F2F2;
    }
`;
const Modal = ({setverModal, children}) => {


    return ( 
        <>
            <Overlay>
                <ContenedorModal>

                    <BotonCerrar
                             onClick={()=> setverModal(false)}
                    >X</BotonCerrar>
                    {children}
                </ContenedorModal>
            </Overlay>
        </>
     );
}
 
export default Modal;