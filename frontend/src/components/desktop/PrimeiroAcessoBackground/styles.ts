import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const PrimeiroAcessoContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  background-color: ${theme.COLORS.PRIMARY_COLOR};
`;

export const Logo = styled.div`
    position: absolute;
    top: 10%;
    left: 60%;
    transform: translate(-50%, -50%);
`;