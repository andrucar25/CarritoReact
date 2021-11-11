import React, {useState} from 'react';

import styled from '@emotion/styled';

const Thumb = styled.img`
    height: 70px;
    border-radius: 10px;

    &:hover{
        cursor: pointer;
        border: 3px solid var(--Orange);
        opacity: 0.5;
       
    }

`;

const ThumbCatalogo = ({imagen, guardarImagenActual}) => {

    
    const { principal, miniatura} = imagen;

    const actualizarImagen = e => {
        e.preventDefault();
        guardarImagenActual(principal);


    }

    return ( 
        <Thumb
            src={miniatura}
            onClick={actualizarImagen}
        />
     );
}
 
export default ThumbCatalogo;