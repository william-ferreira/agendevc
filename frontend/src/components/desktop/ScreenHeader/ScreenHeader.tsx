import React from 'react';
import { HeaderContainer, Header, Separator } from './styles'; // Importa os estilos personalizados
import {theme} from "../../../styles/theme";

interface ScreenHeaderProps {
    screenHeaderText: string;
  }

  const ScreenHeader: React.FC<ScreenHeaderProps> = ({
    screenHeaderText
  }) => {
    return (
        <HeaderContainer>
            <Header>{screenHeaderText}</Header>
            <Separator></Separator>
        </HeaderContainer>
    );
  };

export {ScreenHeader}