import React, { ReactNode, useState } from 'react';
import { Backdrop, ButtonsContainer, Container, ContainerTitle, CustomCheckbox, CheckboxContainer, CheckboxItem, CheckboxLabel, Text, CloseButton, InnerContainer,InnerSeparator, ModalContent, } from './styles';
import { CustomButton } from '../../common/CustomButton/CustomButton';
import { selecioneFormaPg } from '../../../utils/constants';
import {theme} from '../../../styles/theme';

interface FormasPgModalProps {
    isOpen?: boolean;
    onClose: () => void;
    openModal?: () => void;
}

const FormasPagamentoModal: React.FC<FormasPgModalProps> = ({
    isOpen, onClose, openModal
}) => {

    if (!isOpen) return null;

    return (
        <Backdrop onClick={onClose}>
            <ModalContent onClick={e => e.stopPropagation()}>
                <Container>
                    <ContainerTitle>{"Formas de Pagamento"}</ContainerTitle>
                    <CloseButton onClick={onClose}>x</CloseButton>
                    <InnerSeparator></InnerSeparator>
                    <InnerContainer>                
                        <Text>{selecioneFormaPg}</Text>
                        <CheckboxContainer>
                            <CheckboxItem>
                                <CheckboxLabel>Pix</CheckboxLabel>
                                <CustomCheckbox type="checkbox" />
                            </CheckboxItem>
                            <CheckboxItem>
                                <CheckboxLabel>Cartão de Débito</CheckboxLabel>
                                <CustomCheckbox type="checkbox" />
                            </CheckboxItem>
                            <CheckboxItem>
                                <CheckboxLabel>Cartão de Crédito</CheckboxLabel>
                                <CustomCheckbox type="checkbox" />
                            </CheckboxItem>
                            <CheckboxItem>
                                <CheckboxLabel>Dinheiro</CheckboxLabel>
                                <CustomCheckbox type="checkbox" />
                            </CheckboxItem>
                            <CheckboxItem>
                                <CheckboxLabel>Cheque</CheckboxLabel>
                                <CustomCheckbox type="checkbox" />
                            </CheckboxItem>
                        </CheckboxContainer>
                    </InnerContainer>
                    <ButtonsContainer>
                        <CustomButton buttonText="Editar Horários" buttonHeight={40} buttonWidth={140} textSize={16}></CustomButton>
                        <CustomButton buttonText="Cancelar" buttonHeight={40} buttonWidth={140} textSize={16} buttonColor={theme.COLORS.DISABLED_COLOR} onClick={onClose}></CustomButton>
                    </ButtonsContainer>
                </Container>
            </ModalContent>
        </Backdrop>
    );
}

export {FormasPagamentoModal}