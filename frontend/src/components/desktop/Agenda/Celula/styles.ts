import styled from 'styled-components';
import { theme } from '../../../../styles/theme';

export const CelulaContainer = styled.div`
  display: flex;
  width: 188px;  // Largura fixa
  height: 58px;  // Altura fixa  
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-color: ${theme.COLORS.DISABLED_COLOR}
`;