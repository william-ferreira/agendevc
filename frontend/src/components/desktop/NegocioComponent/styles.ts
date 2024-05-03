import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const Container = styled.div`
    background-color: ${theme.COLORS.BACKGROUND_COLOR};
    width: 550px;
    height: 540px;
    display: flex;
    position: absolute;
    left: 55%;
    top: 55%;
    transform: translate(-50%, -50%);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 600;
    color: ${theme.COLORS.PRIMARY_COLOR};
    border: 1px solid;
    border-radius: 5px;
    border-color: ${theme.COLORS.DISABLED_COLOR};
    z-index: 2;
`;

export const ContainerTitle = styled.h1`
  background-color: ${theme.COLORS.TRANSPARENT};
  width: 100%;
  height: 30px;
  position: absolute;
  top: 0;
  font-size: 24px;
  font-weight: 600;
  color: ${theme.COLORS.PRIMARY_COLOR};
  text-align: center;
`;

export const ListaServicosContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 416px;
    max-height: 416px;
    gap: 4px;
    overflow-y: auto;
`;

export const Text = styled.h1`
  width: auto;
  height: 20px;
  padding-bottom: 2px;
  color: ${theme.COLORS.SECONDARY_COLOR};
  font-size: 16px;
  font-weight: 500;
`;

export const ButtonContainer = styled.div`
    position: absolute;
    top: 88%;
`;

export const InnerSeparator = styled.div`
    width: 90%;
    position: fixed;
    top: 10%;
    height: 1px;
    background-color: ${theme.COLORS.DISABLED_COLOR};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

export const InnerContainer = styled.div`
    position: absolute;
    top: 9.5%;
    height: 460px;
    width: 480px;
`;