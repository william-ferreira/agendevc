import styled from 'styled-components';
import { theme } from '../../../../styles/theme';

export const LinhaContainer = styled.div`
  display: flex;
  width: 190px;  // Largura fixa
  height: 58px;  // Altura fixa  
  justify-content: center;
  align-items: center;
  color: ${theme.COLORS.BACKGROUND_COLOR};
  font-size: 30px;
  font-weight: 600;
  border: 2px solid;
  border-color: ${theme.COLORS.PRIMARY_COLOR};
  background-color: ${theme.COLORS.PRIMARY_COLOR};
`;