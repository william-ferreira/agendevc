import styled from 'styled-components';
import {theme} from "../../../styles/theme";

interface StyledContainerProps {
  tituloContainer?: string;
  tituloContainerSize?: number;
  larguraContainer?: number;
  alturaContainer?: number;
}

export const ContainerTitle = styled.h1<StyledContainerProps>`
  background-color: ${theme.COLORS.TRANSPARENT};
  width: 100%;
  height: 30px;
  position: absolute;
  top: 0;
  font-size: ${({ tituloContainerSize }) => tituloContainerSize ? `${tituloContainerSize}px` : '24px'};
  font-weight: 600;
  color: ${theme.COLORS.PRIMARY_COLOR};
  text-align: center;
`;

export const StyledContainer = styled.div<StyledContainerProps>`
  background-color: ${theme.COLORS.BACKGROUND_COLOR};
  width: ${({ larguraContainer }) => larguraContainer}px;
  height: ${({ alturaContainer }) => alturaContainer}px;
  display: flex;
  position: absolute;
  left: 39.5%;
  top: 25%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: ${({ tituloContainerSize }) => tituloContainerSize ? `${tituloContainerSize}px` : '24px'};
  font-weight: 600;
  color: ${theme.COLORS.PRIMARY_COLOR};
  border: 1px solid;
  border-radius: 5px;
  border-color: ${theme.COLORS.DISABLED_COLOR};
  z-index: 2;
`;