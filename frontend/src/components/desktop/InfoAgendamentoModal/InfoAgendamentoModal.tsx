import React, { ReactNode, useState } from 'react';
import { Backdrop, ButtonsContainer, InformacaoServico, InnerSeparator, DadoServico, CloseButton, ModalContent, ContainerTitle, DadosServicoContainer, InformacoesServicoContainer, ServicoContainer } from './styles';
import { CustomButton } from '../../common/CustomButton/CustomButton';
import {theme} from '../../../styles/theme';
import { ConfirmacaoModal } from '../ConfirmacaoModal/ConfirmacaoModal';

interface AgendamentoModalProps {
    isOpen: boolean;
    onClose: () => void;
    children?: ReactNode;
}

const InfoAgendamentoModal: React.FC<AgendamentoModalProps> = ({
    isOpen, onClose, children
}) => {
    const nomeCliente = "Everton da Silva Santos";
    const whatsappCliente = "(83) 9 9999-7777";
    const nomeServico = "Corte Simples";
    const dataHorario = "15/05/2024, 08h";
    const valorServico = "R$ 25,00";
    const formaPg = "Débito";
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };
  
    const handleCloseModal = () => {
        setModalOpen(false);
    };

    if (!isOpen) return null;

    return (
        <Backdrop onClick={onClose}>
            <ModalContent onClick={e => e.stopPropagation()}>
                <ContainerTitle>{"Você deseja cancelar o agendamento a seguir?"}</ContainerTitle>
                <CloseButton onClick={onClose}>×</CloseButton>
                <InnerSeparator></InnerSeparator>
                <ServicoContainer>
                    <InformacoesServicoContainer>   
                        <InformacaoServico>Nome do cliente:</InformacaoServico>
                        <InformacaoServico>Telefone (WhatsApp):</InformacaoServico>
                        <InformacaoServico>-</InformacaoServico>
                        <InformacaoServico>Serviços:</InformacaoServico>
                        <InformacaoServico>Data e horário:</InformacaoServico>
                        <InformacaoServico>-</InformacaoServico>
                        <InformacaoServico>Valor do serviço:</InformacaoServico>
                        <InformacaoServico>Forma de pagamento:</InformacaoServico>
                    </InformacoesServicoContainer>
                    <DadosServicoContainer>
                        <DadoServico>{nomeCliente}</DadoServico>
                        <DadoServico>{whatsappCliente}</DadoServico>
                        <DadoServico>{"-"}</DadoServico>
                        <DadoServico>{nomeServico}</DadoServico>
                        <DadoServico>{dataHorario}</DadoServico>
                        <DadoServico>{"-"}</DadoServico>
                        <DadoServico>{valorServico}</DadoServico>
                        <DadoServico>{formaPg}</DadoServico>
                    </DadosServicoContainer>
                </ServicoContainer>
                <ButtonsContainer>
                    <CustomButton buttonText="Cancelar Agendamento" buttonHeight={25} buttonWidth={160} textSize={12} buttonColor={theme.COLORS.DELETE_COLOR} onClick={handleOpenModal}></CustomButton>
                </ButtonsContainer>
                <ConfirmacaoModal isOpen={isModalOpen} onClose={handleCloseModal}></ConfirmacaoModal>
            </ModalContent>
        </Backdrop>
    );
}

export {InfoAgendamentoModal}