import React, { ReactNode } from 'react';
import { Backdrop, ButtonsContainer, InformacaoServico, InnerSeparator, DadoServico, CloseButton, ModalContent, ContainerTitle, DadosServicoContainer, InformacoesServicoContainer, ServicoContainer } from './styles';
import { CustomButton } from '../../common/CustomButton/CustomButton';
import {theme} from '../../../styles/theme';

interface ServicoModalProps {
    isOpen: boolean;
    onClose: () => void;
    children?: ReactNode;
}

const ExcluirServicoModal: React.FC<ServicoModalProps> = ({
    isOpen, onClose, children
}) => {
    const nomeServico = "Corte Simples";
    const precoServico = "R$ 25,00";
    const duracaoServico = "1h";
    const descricaoServico = "Corte de cabelo simples.";
    if (!isOpen) return null;

    return (
        <Backdrop onClick={onClose}>
            <ModalContent onClick={e => e.stopPropagation()}>
                <ContainerTitle>{"Você deseja excluir o serviço a seguir?"}</ContainerTitle>
                <CloseButton onClick={onClose}>×</CloseButton>
                <InnerSeparator></InnerSeparator>
                <ServicoContainer>
                    <InformacoesServicoContainer>   
                        <InformacaoServico>Nome do servico:</InformacaoServico>
                        <InformacaoServico>Valor do servico:</InformacaoServico>
                        <InformacaoServico>Duracao:</InformacaoServico>
                        <InformacaoServico>Descricao:</InformacaoServico>
                    </InformacoesServicoContainer>
                    <DadosServicoContainer>
                        <DadoServico>{nomeServico}</DadoServico>
                        <DadoServico>{precoServico}</DadoServico>
                        <DadoServico>{duracaoServico}</DadoServico>
                        <DadoServico>{descricaoServico}</DadoServico>
                    </DadosServicoContainer>
                </ServicoContainer>
                <ButtonsContainer>
                    <CustomButton buttonText="Excluir" buttonHeight={40} buttonWidth={140} textSize={16} buttonColor={theme.COLORS.DELETE_COLOR}></CustomButton>
                    <CustomButton buttonText="Cancelar" buttonHeight={40} buttonWidth={140} textSize={16} buttonColor={theme.COLORS.DISABLED_COLOR} onClick={onClose}></CustomButton>
                </ButtonsContainer>
            </ModalContent>
        </Backdrop>
    );
}

export {ExcluirServicoModal}