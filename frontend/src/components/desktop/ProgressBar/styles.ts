import styled from 'styled-components';
import {theme} from '../../../styles/theme'

export const ProgressBarContainer = styled.div`
  width: 90%;
  height: 10px;
  position: absolute;
  top: 13%;
  background-color: #f2f2f2;
  border-radius: 10px;
`;

export const Progress = styled.div`
  height: 100%;
  background-color: ${theme.COLORS.PRIMARY_COLOR};
  border-radius: 10px;
  transition: width 0.3s ease; /* Adiciona uma transição suave à largura */
`;