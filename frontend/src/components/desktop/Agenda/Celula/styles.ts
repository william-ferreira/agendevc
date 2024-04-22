import styled from 'styled-components';
import { theme } from '../../../../styles/theme';

export const CelulaContainer = styled.div`
  display: flex;
  width: 230px;  // Largura fixa
  height: 85px;  // Altura fixa  
  justify-content: center;
  align-items: center;
  border: 2px solid;
  border-color: ${theme.COLORS.DISABLED_COLOR}
`;