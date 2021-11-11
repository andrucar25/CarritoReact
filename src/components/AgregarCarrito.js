import React, {useState} from 'react';

import styled from '@emotion/styled';
import Carrito from './Carrito';

import imgMinor from '../assets/images/icon-minus.svg';
import imgPlus from '../assets/images/icon-plus.svg';

const Subtitle = styled.h4`
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 1px;
    color: var(--Orange);
`;

const Title = styled.h1`
    font-size: 40px;
    font-weight: 700;
    color: var(--Black);
    margin-top: 15px;
`;

const Description = styled.p`
    font-weight: 300;
    font-size: 15px;
    color: var(--DarkGrayishBlue);
    line-height: 25px;
    margin-top: 25px;
`;

const DivPrice = styled.div`
    display: flex;
    margin-top: 25px;
`

const Price = styled.p`
    font-size: 25px;
    font-weight: 700;
    margin-right: 10px;

`

const Box = styled.div`
    height: 25px;
    display: flex;
    align-items: center;
    border: 1px solid (--LightGrayishBlue);
    background-color: rgba(244, 231, 231, 0.8);
    padding: 5px;
    border-radius: 5px;
`
const InputDiscount = styled.p`
    color: var(--Orange);
    font-weight: 700;
    font-size: 18px;
    opacity:1;

`

const OldPrice = styled.p`
    color: var(--GrayishBlue);
    font-size: 15px;
    font-weight: 400;
    margin-top: 15px;
    text-decoration: line-through;

`
const DivAgregar = styled.div`
    width: 100%;
    margin-top: 15px;
    display: flex;
`;

const Button = styled.button`
    border: none;
    background-color: none;
    height: 30px;
    width: 50px;
    background-color: var(--LightGrayishBlue);
    &:hover{
        cursor: pointer;
        opacity: 0.5;
    }

    
`;

const MinorButton = styled.img`
    width: 50%;
`;

const PlusButton = styled.img`
    width: 50%;
`;

const InputCantidad = styled.input`
    border: none;
    background-color: none;
    height: 30px;
    width: 30px;
    background-color: var(--LightGrayishBlue);
    text-align:center;
`;

const ButtonCart = styled.button`
    border: none;
    background-color: none;
    font-weight: 400;
    font-size: 14px;
    height: 30px;
    width: 50%;
    margin-left: 20px;
    background-color: var(--Orange);
    color: white;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.5;
    }
`;



const AgregarCarrito = ({setVisibilidad,visibilidad,cantidad,setCantidad}) => {

    // const [cantidad, setCantidad] = useState(0);

    const Sumar = e => {
        e.preventDefault();
        setCantidad(cantidad + 1);
    }

    const Restar = e => {
        e.preventDefault();
        setCantidad(c => Math.max(c - 1, 0));

        
    }

    return (  
        <>
            <Subtitle>SNEAKER COMPANY</Subtitle>
            <Title>Fall Limited Edition Sneakers</Title>
            <Description>These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer.</Description>

            <DivPrice>
                <Price>$125.00</Price>
                <Box>
                <InputDiscount>50%</InputDiscount>
                </Box>
            </DivPrice>

            <OldPrice>$250.00</OldPrice>
            <DivAgregar>
                <Button>
                    <MinorButton
                        src ={imgMinor}
                        onClick={Restar}
                        
                    />
                </Button>
               <InputCantidad
                    type="number"
                    value={Number(cantidad)}
                    disabled
               />
                <Button>
                    <PlusButton
                        src ={imgPlus}
                        onClick={Sumar}
                    />
                </Button>

                <ButtonCart>
                    Add to cart
                </ButtonCart>
            </DivAgregar>

        {visibilidad ? (
             <Carrito
             cantidad={cantidad}
             setCantidad={setCantidad}
         />
        ) : null}
           
            
        </>
    );
}
 
export default AgregarCarrito;