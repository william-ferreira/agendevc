import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const PrimeiroAcessoTextContainer = styled.div`
  display: flex;
  width: auto;  
  height: 50px;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  color: ${theme.COLORS.BACKGROUND_COLOR};
  font-size: 30px;
  font-weight: 600;
  border-color: ${theme.COLORS.PRIMARY_COLOR};
  background-color: ${theme.COLORS.PRIMARY_COLOR};
  white-space: nowrap;
`;