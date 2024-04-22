import React from 'react';
import { ButtonContainer } from './styles';

interface SideBarButtonProps {
  leftIcon: React.ReactNode;  // Elemento React para o ícone
  buttonText: string;          // Texto do botão
  isSelected?: boolean;        // Estado de seleção do botão
  iconSize?: string;           // Tamanho do ícone, como '24px'
  onClick: () => void;
}

const SideBarButton: React.FC<SideBarButtonProps> = ({
  leftIcon,
  buttonText,
  isSelected = false,
  iconSize,
  onClick
}) => {
  return (
    <ButtonContainer isSelected={isSelected} iconSize={iconSize} onClick={onClick}>
      {React.cloneElement(leftIcon as React.ReactElement, { style: { fontSize: iconSize }})}
      <span>{buttonText}</span>
    </ButtonContainer>
  );
};

export {SideBarButton};
