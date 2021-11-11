import React, {useState, useEffect} from 'react';

import styled from '@emotion/styled';
import imgproduct1thumb from '../assets/images/image-product-1-thumbnail.jpg';
import deleteicon from '../assets/images/icon-delete.svg';

const TitleCartDiv = styled.div`
    height: 30%;
    width: 100%;
    border-bottom: 2px solid var(--LightGrayishBlue);
    padding: 15px 0 10px 15px;
`;

const TitleCart = styled.p`
    font-size: 13px;
    font-weight: 700;
`;

const EmptyCart = styled.p`
    font-size: 16px;
    font-weight: 700;
    color:var(--DarkGrayishBlue);
    text-align: center;
`
const ContentCartDiv = styled.div`
    height: 70%;
    width: 100%;
    padding: 15px;
`;

const ResumenDiv = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-between;

`;

const ImagenCartResumen = styled.img`
    height: 80%;
    border-radius: 2px;
`

const InfoCartResumen = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const TitleResumenCart = styled.p`
    font-size: 11px;
    font-weight: 400;
    color: var(--DarkGrayishBlue);
`

const PriceResumenCart = styled.p`
    font-size: 11px;
    font-weight: 400;
    color: var(--DarkGrayishBlue);
`

const TotalCart = styled.p`
    font-size: 11px;
    font-weight: 700;
    color: black;
    margin-left: 5px;
`

const IconTrash = styled.img`
    height: 15px;
    &:hover{
        cursor: pointer;
    }
`
const ButtonCheckout = styled.button`
    border: none;
    background-color: none;
    height: 40%;
    width: 100%;
    font-weight: 400;
    font-size: 14px;
    color: var(--White);
    background-color: var(--Orange);
    border-radius: 5px;
    &:hover{
        cursor: pointer;
        opacity: 0.5;
    }
`;

const Carrito = ({cantidad, setCantidad}) => {

    const [resultado, setResultado] = useState(0);

    useEffect(() => {
        let total = cantidad * 125.00;
        setResultado(total);
    }, [cantidad]);
    

    const deleteAll = e => {
        e.preventDefault();
        setResultado(0);
        setCantidad(0);
    }
    
    

    return ( 
        <div className="card-carrito">
            <TitleCartDiv> 
                <TitleCart>Cart</TitleCart>
            </TitleCartDiv>
            <ContentCartDiv>
                {cantidad == 0 ? (
                <EmptyCart>Your cart is empty</EmptyCart>)
                :<>
                 <ResumenDiv>
                    <ImagenCartResumen
                        src={imgproduct1thumb}
                    />
                    <InfoCartResumen>
                        <TitleResumenCart>Fall Limited Edition Sneakers</TitleResumenCart>
                        <div className="carrito-detail">
                            <PriceResumenCart>$125.00 x {cantidad}</PriceResumenCart>
                            <TotalCart>${resultado}</TotalCart>
                        </div>
                    </InfoCartResumen>
                    <IconTrash
                        src={deleteicon}
                        onClick={deleteAll}
                    />
                </ResumenDiv>
                <ButtonCheckout>Checkout</ButtonCheckout>
                </>}
                
            </ContentCartDiv>

        </div>
     );
}
 
export default Carrito;