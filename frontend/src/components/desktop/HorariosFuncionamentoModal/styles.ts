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
    font-size: 30px;
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

export const CheckboxContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;
`;

export const CheckboxItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CheckboxLabel = styled.h1`
  font-size: 16px;
`;

export const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;

  select {
    width: 100px;
    height: 40px;
    padding: 8px;
    font-size: 16px;
    border-color: ${theme.COLORS.DISABLED_COLOR};
  }
`;

export const DropdownsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  margin-top: 15px;
  top: 51%;
  justify-content: center;
  align-items: center;
`;

export const ToggleSwitchContainer = styled.div`
  display: flex;
  width: 350px;
  height: 40px;
  align-items: center;
  justify-content: flex-end;
`;

export const ToggleSwitch = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  width: 40px;
  height: 20px;
  background-color: ${theme.COLORS.DISABLED_COLOR};
  border-radius: 15px;
  position: relative;
  cursor: pointer;
  outline: none;

  &:checked {
    background-color: ${theme.COLORS.PRIMARY_COLOR};
  }

  &:before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: white;
    top: 2px;
    left: 2px;
    transition: 0.4s;
  }

  &:checked:before {
    transform: translateX(20px);
  }
`;

