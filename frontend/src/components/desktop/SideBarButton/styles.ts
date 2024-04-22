import styled from 'styled-components';
import {theme} from "../../../styles/theme";

interface ButtonContainerProps {
    isSelected: boolean;
    iconSize?: string; // Tamanho do ícone
    onClick: () => void;
  }

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${theme.COLORS.TRANSPARENT};
  color: ${({ isSelected }) => isSelected ? theme.COLORS.BACKGROUND_COLOR : theme.COLORS.SECONDARY_COLOR};
  width: 200px;
  gap: 10px;
  height: 30px;
  margin-bottom: 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${theme.COLORS.PRIMARY_COLOR};  // Efeito sutil ao passar o mouse
    opacity: 90%;
  }

  & > svg {
    width: ${({ iconSize }) => iconSize || '40px'};
    height: ${({ iconSize }) => iconSize || '40px'};
    margin-right: 8px;
  }
`;
