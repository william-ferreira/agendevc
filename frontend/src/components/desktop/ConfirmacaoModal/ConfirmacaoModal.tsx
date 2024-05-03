import React, { ReactNode } from 'react';
import { Backdrop, ButtonsContainer, CloseButton, ModalContent, ContainerTitle } from './styles';
import { CustomButton } from '../../common/CustomButton/CustomButton';
import {theme} from '../../../styles/theme';

interface LogoutModalProps {
    isOpen: boolean;
    onClose: () => void;
    children?: ReactNode;
}

const ConfirmacaoModal: React.FC<LogoutModalProps> = ({
    isOpen, onClose, children
}) => {
    if (!isOpen) return null;

    return (
        <Backdrop onClick={onClose}>
            <ModalContent onClick={e => e.stopPropagation()}>
                <ContainerTitle>{"Você confirma o cancelamento?"}</ContainerTitle>
                <CloseButton onClick={onClose}>×</CloseButton>
                <ButtonsContainer>
                    <CustomButton buttonText="Sim" buttonHeight={40} buttonWidth={140} textSize={16}></CustomButton>
                    <CustomButton buttonText="Não" buttonHeight={40} buttonWidth={140} textSize={16} buttonColor={theme.COLORS.DISABLED_COLOR} onClick={onClose}></CustomButton>
                </ButtonsContainer>
            </ModalContent>
        </Backdrop>
    );
}

export {ConfirmacaoModal}