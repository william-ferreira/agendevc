import React, { ReactNode } from 'react';
import { Backdrop, ButtonsContainer, Container, ContainerTitle, InputsContainer, InputLabel, InputContainer, Input, TextArea, ButtonContainer, CloseButton, InnerSeparator, ModalContent, } from './styles';
import { CustomButton } from '../../common/CustomButton/CustomButton';
import {theme} from '../../../styles/theme';

interface InformacoesModalProps {
    isOpen?: boolean;
    onClose: () => void;
    openModal?: () => void;
}

const InformacoesNegocioModal: React.FC<InformacoesModalProps> = ({
    isOpen, onClose, openModal
}) => {
    if (!isOpen) return null;

    return (
        <Backdrop onClick={onClose}>
            <ModalContent onClick={e => e.stopPropagation()}>
                <Container>
                    <ContainerTitle>{"Informações do Negócio"}</ContainerTitle>
                    <CloseButton onClick={onClose}>×</CloseButton>
                    <InnerSeparator></InnerSeparator>
                    <InputsContainer>
                        <InputContainer>
                            <InputLabel htmlFor="nome">Nome</InputLabel>
                            <Input type="text" id="nome" placeholder="Nome do seu negócio" />
                        </InputContainer>
                        <InputContainer>
                            <InputLabel htmlFor="telefone">Telefone celular (WhatsApp)</InputLabel>
                            <Input type="text" id="telefone" placeholder="Seu número (WhatsApp)" />
                        </InputContainer>
                        <InputContainer>
                            <InputLabel htmlFor="descricao">Descrição (Opcional)</InputLabel>
                            <TextArea id="descricao" placeholder="Adicione aqui uma breve descrição sobre o seu negócio." />
                        </InputContainer>
                    </InputsContainer>
                    <ButtonsContainer>
                        <CustomButton buttonText="Editar Informações" buttonHeight={40} buttonWidth={140} textSize={16}></CustomButton>
                        <CustomButton buttonText="Cancelar" buttonHeight={40} buttonWidth={140} textSize={16} buttonColor={theme.COLORS.DISABLED_COLOR} onClick={onClose}></CustomButton>
                    </ButtonsContainer>
                </Container>
            </ModalContent>
        </Backdrop>
    );
}

export {InformacoesNegocioModal}