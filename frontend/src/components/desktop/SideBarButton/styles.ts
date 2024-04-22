import styled from 'styled-components';
import {theme} from "../../../styles/theme";

interface ButtonContainerProps {
    isSelected: boolean;
    iconSize?: string; // Tamanho do ícone
  }

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${theme.COLORS.TRANSPARENT};
  color: ${({ isSelected }) => isSelected ? theme.COLORS.SECONDARY_COLOR : theme.COLORS.BACKGROUND_COLOR};
  width: 180px;
  height: 40px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: background-color 0.3s;

  & > svg {
    width: ${({ iconSize }) => iconSize || '40px'};
    height: ${({ iconSize }) => iconSize || '40px'};
    margin-right: 8px;
  }
`;
