import styled from 'styled-components';
import {theme} from "../../../styles/theme";

interface StyledButtonProps {
  buttonColor: string;
  buttonWidth: number;
  buttonHeight: number;
  textSize?: number;
}

export const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${({ buttonColor }) => buttonColor};
  width: ${({ buttonWidth }) => buttonWidth}px;
  height: ${({ buttonHeight }) => buttonHeight}px;
  font-size: ${({ textSize }) => textSize ? `${textSize}px` : '20px'};
  font-weight: 600;
  color: ${theme.COLORS.BACKGROUND_COLOR};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: ${({ buttonColor }) => buttonColor ? buttonColor : theme.COLORS.PRIMARY_COLOR }; // Um pouco transparente ao passar o mouse
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;
