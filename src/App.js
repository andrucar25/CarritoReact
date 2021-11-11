import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Catalogo from './components/Catalogo';
import AgregarCarrito from './components/AgregarCarrito';

import styled from '@emotion/styled';


const MainContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  max-width: 1440px;
`;

const CentralContainer = styled.div`
  height:650px;
  max-height: 650px;
  width: 100%;
  margin: 0 auto;
  padding: 50px 50px 30px 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 70px;
  
  
`;

const DivLeft = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const DivRight = styled.div`
  height: 100%;
  width: 100%;
  padding: 40px 0;
`;
function App() {

  const [visibilidad, setVisibilidad] = useState(false);
  const [cantidad, setCantidad] = useState(0);

  return (
    <Fragment>
      <MainContainer>

        <Header
          setVisibilidad={setVisibilidad}
          visibilidad={visibilidad}
          cantidad={cantidad}
        >
        </Header>

        <CentralContainer>

          <DivLeft>
            <Catalogo>

            </Catalogo>
          </DivLeft>

          <DivRight>
              <AgregarCarrito
               setVisibilidad={setVisibilidad}
               visibilidad={visibilidad}
               cantidad={cantidad}
               setCantidad={setCantidad}
              >

              </AgregarCarrito>
          </DivRight>
            
        </CentralContainer>
        
      </MainContainer>
    </Fragment>
  );
}

export default App;
