import React from 'react';
import { StyledButton } from './styles'; // Importa os estilos personalizados
import {theme} from "../../../styles/theme";


interface CustomButtonProps {
  buttonColor?: string;
  buttonWidth?: number; // Largura opcional com padrão definido nos estilos
  buttonHeight?: number; // Altura opcional com padrão definido nos estilos
  buttonText: string;
  textSize?: number; // Tamanho de texto opcional
}

const CustomButton: React.FC<CustomButtonProps> = ({
  buttonColor = theme.COLORS.PRIMARY_COLOR,
  buttonWidth = 80,
  buttonHeight = 50,
  buttonText,
  textSize
}) => {
  const handleClick = () => {
    // Função de clique pode ser expandida aqui
    console.log("Button clicked!");
  };

  return (
    <StyledButton
      onClick={handleClick}
      buttonColor={buttonColor}
      buttonWidth={buttonWidth}
      buttonHeight={buttonHeight}
      textSize={textSize}
    >
      {buttonText}
    </StyledButton>
  );
};

export {CustomButton};