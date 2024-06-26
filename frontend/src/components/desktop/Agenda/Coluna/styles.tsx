import styled from 'styled-components';
import { theme } from '../../../../styles/theme';

export const ColunaContainer = styled.div`
  display: flex;
  width: 190px;  // Largura fixa
  height: 40px;  // Altura fixa  
  justify-content: center;
  align-items: center;
  color: ${theme.COLORS.BACKGROUND_COLOR};
  font-size: 20px;
  font-weight: 600;
  border-color: ${theme.COLORS.PRIMARY_COLOR};
  background-color: ${theme.COLORS.PRIMARY_COLOR};
`;