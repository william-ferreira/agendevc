import styled from 'styled-components';
import {theme} from '../../../styles/theme';

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.0);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
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

export const ModalContent = styled.div`
    position: absolute;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 10px 10px 20px 20px rgba(0, 0, 0, 0.1);
    width: 1200px;
    height: 450px;
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
    top: 86%;
    left: 73%;
    gap: 15px;
`;

export const InputsContainer = styled.div`
    position: absolute;
    top: 12%;
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

export const Preco = styled.input`
  width: 180px;
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

export const Duracao = styled.select`
    width: 500px;
    height: 48px;
    padding: 8px;
    border: 1px solid ${theme.COLORS.DISABLED_COLOR};
    border-radius: 4px;
    font-size: 16px;

    &:focus {
        border-color: ${props => props.theme.COLORS.PRIMARY_COLOR};
        outline: none; /* Remove a borda padrão do navegador */
    }

    &::placeholder {
        color: ${theme.COLORS.CONFIRMATION_COLOR};
        font-family: 'Arial', sans-serif;
    }
`;

export const CustomOption = styled.option`
  color: ${theme.COLORS.SECONDARY_COLOR};
  font-family: 'Arial'; 
  font-size: 16px;
  line-height: 30px;
`;

export const NomePrecoContainer = styled.div`
  display: flex;
  width: 100vh;
  justify-content: flex-start;
  gap: 640px;
  margin-left: 20px;
  color-background: ${theme.COLORS.CONFIRMATION_COLOR};
`;

export const DuracaoContainer = styled.div`
  display: flex;
  width: 100vh;
  margin-left: 20px;
  justify-content: flex-start;
`;

export const DescricaoContainer = styled.div`
  display: flex;
  width: 100vh;
  justify-content: flex-start;
  margin-left: 20px;
  color-background: ${theme.COLORS.CONFIRMATION_COLOR};
`;

export const TextArea = styled.textarea`
  width: 1140px;
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