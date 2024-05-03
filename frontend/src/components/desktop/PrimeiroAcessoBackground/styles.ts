import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const PrimeiroAcessoContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  background-color: ${theme.COLORS.PRIMARY_COLOR};
  position: relative;
  z-index: 1;
`;

export const Logo = styled.div`
    position: absolute;
    top: 10%;
    left: 61.5%;
    transform: translate(-50%, -50%);
`;