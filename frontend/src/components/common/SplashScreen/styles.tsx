import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const SplashScreenContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  background-color: ${theme.COLORS.PRIMARY_COLOR};
`;

export const Logo = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;