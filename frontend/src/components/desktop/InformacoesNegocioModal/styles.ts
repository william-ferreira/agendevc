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

export const ModalContent = styled.div`
    position: relative;
    padding: 20px;
    border-radius: 5px;
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
    top: 90%;
    left: 23%;
    gap: 15px;
`;

export const Container = styled.div`
    background-color: ${theme.COLORS.BACKGROUND_COLOR};
    width: 545px;
    height: 500px;
    display: flex;
    position: absolute;
    left: 50%;
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

export const InputsContainer = styled.div`
    position: absolute;
    top: 17.5%;
`;

export const InputContainer = styled.div`
  margin-bottom: 10px;
`;

export const InputLabel = styled.label`
  display: block;
  margin-bottom: 2px;
  font-size: 16px;
`;

export const Input = styled.input`
  width: 300px;
  height: 30px;
  padding: 8px;
  border: 1px solid ${theme.COLORS.DISABLED_COLOR};
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    border-color: ${props => props.theme.COLORS.PRIMARY_COLOR};
    outline: none; /* Remove a borda padrão do navegador */
  }
`;

export const TextArea = styled.textarea`
  width: 300px;
  height: 110px;
  padding: 8px;
  border: 1px solid ${theme.COLORS.DISABLED_COLOR};
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    border-color: ${props => props.theme.COLORS.PRIMARY_COLOR};
    outline: none; /* Remove a borda padrão do navegador */
  }
`;

export const ButtonContainer = styled.div`
    position: absolute;
    top: 85%;
`;

export const InnerSeparator = styled.div`
    width: 90%;
    position: fixed;
    top: 13%;
    height: 1px;
    background-color: ${theme.COLORS.DISABLED_COLOR};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;