import React, {useState} from 'react';

import styled from '@emotion/styled';
import imgproduct1 from '../assets/images/image-product-1.jpg';
import imgproduct1thumb from '../assets/images/image-product-1-thumbnail.jpg';
import imgproduct2 from '../assets/images/image-product-2.jpg';
import imgproduct2thumb from '../assets/images/image-product-2-thumbnail.jpg';
import imgproduct3 from '../assets/images/image-product-3.jpg';
import imgproduct3thumb from '../assets/images/image-product-3-thumbnail.jpg';
import imgproduct4 from '../assets/images/image-product-4.jpg';
import imgproduct4thumb from '../assets/images/image-product-4-thumbnail.jpg';

import ThumbCatalogo from './ThumbCatalogo';
import Modal from './Modal';

const ImgPrincipal = styled.img`
  width: 90%;
  border-radius: 10px;
  margin: 0 auto;

  &:hover{
      cursor: pointer;
  }
`;



const Catalogo = () => {

    const [imagenactual, guardarImagenActual] = useState(imgproduct1);
    const [vermodal, setverModal] = useState(false);

    const imagenes= [
        {id:1, principal: imgproduct1, miniatura:imgproduct1thumb},
        {id:2, principal: imgproduct2, miniatura:imgproduct2thumb},
        {id:3, principal: imgproduct3, miniatura:imgproduct3thumb},
        {id:4, principal: imgproduct4, miniatura:imgproduct4thumb}
    ]

    const abrirModal = e => {
        e.preventDefault();
        setverModal(true);
    }
    

    return(
        <>
            <ImgPrincipal 
                src={imagenactual}
                onClick={abrirModal}
            />
            <div className="div-Thumb">
            {imagenes.map(imagen => (
                    <ThumbCatalogo
                        key={imagen.id}
                        imagen={imagen}
                        guardarImagenActual={guardarImagenActual}
                    />
                ))}
            </div>
            {vermodal ?
                <Modal
                setverModal={setverModal}
                >
                    <ImgPrincipal
                        src={imgproduct1}
                    />
                    <div className="div-Thumb">
                    {imagenes.map(imagen => (
                            <ThumbCatalogo
                                key={imagen.id}
                                imagen={imagen}
                                guardarImagenActual={guardarImagenActual}
                            />
                        ))}
                    </div>
                </Modal> 
            : null}
            
              
      </>
    )
    
}
 
export default Catalogo;