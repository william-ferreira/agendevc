import styled from 'styled-components';
import { theme } from '../../../styles/theme'

export const Container = styled.div`
    background-color: ${theme.COLORS.BACKGROUND_COLOR};
    width: 545px;
    height: 450px;
    display: flex;
    position: absolute;
    left: 50%;
    top: 53%;
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

export const InnerContainer = styled.div`
    position: fixed;
    top: 17%;
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
    top: 82%;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 60%;
  height: 230px;
`;

export const CheckboxItem = styled.div`
  display: flex;
  height: 35px;
  align-items: center;
  gap: 5px;
`;

export const CheckboxLabel = styled.h1`
  font-size: 20px;
  margin-bottom: 18px;
`;

export const CustomCheckbox = styled.input`
  width: 18px; 
  height: 18px;
`;

export const InnerSeparator = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${theme.COLORS.DISABLED_COLOR};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;