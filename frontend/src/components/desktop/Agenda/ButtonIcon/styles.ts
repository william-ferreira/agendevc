import styled from 'styled-components';
import {theme} from "../../../../styles/theme";


export const StyledIconButton = styled.button`
  background-color: ${theme.COLORS.TRANSPARENT};
  width: 60px; // Largura do ícone e do botão
  height: 60px; // Altura do ícone e do botão
  border: none; // Sem borda
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #FFDAB9; // Cor mais clara no hover
  }
`;