import styled from 'styled-components';
import { theme } from '../../../styles/theme'

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