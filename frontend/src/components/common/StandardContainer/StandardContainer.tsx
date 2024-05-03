import React from 'react';
import { ContainerTitle, StyledContainer } from './styles';
import { Separator } from '../Separator/Separator';

interface StandardContainerProps {
    tituloContainer: string;
    tituloContainerSize?: number;
    larguraContainer?: number;
    alturaContainer?: number;
    children?: React.ReactNode;
}

const StandardContainer: React.FC<StandardContainerProps> = ({
  tituloContainer,
  tituloContainerSize = 24,
  larguraContainer = 520,
  alturaContainer = 580,
}) => {

  return (
    <StyledContainer
      tituloContainer={tituloContainer}
      tituloContainerSize={tituloContainerSize}
      larguraContainer={larguraContainer}
      alturaContainer={alturaContainer}
    >
        <ContainerTitle tituloContainerSize={tituloContainerSize}>
            {tituloContainer}
        </ContainerTitle>
        <Separator/>
    </StyledContainer>
  );
};

export {StandardContainer};