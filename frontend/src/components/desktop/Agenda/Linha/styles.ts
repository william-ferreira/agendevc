import styled from 'styled-components';
import { theme } from '../../../../styles/theme';

export const LinhaContainer = styled.div`
  display: flex;
  width: 190px;  // Largura fixa
  height: 60px;  // Altura fixa  
  justify-content: center;
  align-items: center;
  color: ${theme.COLORS.BACKGROUND_COLOR};
  font-size: 30px;
  font-weight: 600;
  background-color: ${theme.COLORS.PRIMARY_COLOR};
`;