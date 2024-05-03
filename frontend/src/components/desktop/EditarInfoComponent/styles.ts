import styled from 'styled-components';
import {theme} from '../../../styles/theme';

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const ContainerTitle = styled.h1`
  display: flex;
  width: 70%;
  height: 30px;
  position: absolute;
  top: -4%;
  font-size: 24px;
  font-weight: 600;
  justify-content: flex-start;
  color: ${theme.COLORS.DISABLED_COLOR};
  text-align: center;
`;

export const Content = styled.div`
    flex-direction: column;
    position: relative;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    width: 440px;
    height: 200px;
`;

export const ServicoContainer = styled.div`
    display: flex;
    position: absolute;
    width: 435px;
    height: 80px;
    margin-top: 20px;
    justify-content: space-between;
`;

export const InformacoesServicoContainer = styled.div`
    line-height: 15px;
`;

export const InformacaoServico = styled.h1`
    font-size: 12px;
    font-weight: 600;
    color: ${theme.COLORS.SECONDARY_COLOR}
`;

export const DadosServicoContainer = styled.div`
    line-height: 15px;
`;

export const DadoServico = styled.h1`
    font-size: 12px;
    font-weight: 800;
    color: ${theme.COLORS.SECONDARY_COLOR};
    text-align: right;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 0px;
    right: 5px;
    border: none;
    color: ${theme.COLORS.PRIMARY_COLOR};
    background: none;
    font-size: 40px;
    cursor: pointer;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    position: relative;
    top: 85%;
    left: 87%;
    gap: 15px;
`;

export const InnerSeparator = styled.div`
    width: 90%;
    height: 2px;
    background-color: ${theme.COLORS.DISABLED_COLOR};
    display: flex;
    position: absolute;
    top: 5%;
    left: 4%;
    align-items: center;
    justify-content: center;
  `;