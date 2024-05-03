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
  background-color: ${theme.COLORS.TRANSPARENT};
  width: 90%;
  height: 30px;
  position: absolute;
  top: 0;
  font-size: 24px;
  font-weight: 600;
  color: ${theme.COLORS.PRIMARY_COLOR};
  text-align: center;
`;

export const ModalContent = styled.div`
    position: absolute;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 10px 10px 20px 20px rgba(0, 0, 0, 0.1);
    width: 500px;
    height: 90px;
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
    position: absolute;
    top: 60%;
    left: 23%;
    gap: 15px;
`;