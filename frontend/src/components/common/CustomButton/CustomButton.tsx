import React from 'react';
import { StyledButton } from './styles'; // Importa os estilos personalizados
import {theme} from "../../../styles/theme";


interface CustomButtonProps {
  buttonColor?: string;
  buttonWidth?: number;
  buttonHeight?: number;
  buttonText: string;
  textSize?: number;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  buttonColor = theme.COLORS.PRIMARY_COLOR,
  buttonWidth = 80,
  buttonHeight = 50,
  buttonText,
  textSize,
  onClick
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
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