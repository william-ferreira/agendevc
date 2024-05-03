import React from 'react';
import { useState } from 'react';
import {Container, ListaServicosContainer, ContainerTitle, ButtonContainer, Text, InnerSeparator, InnerContainer} from './styles';
import { EditarInfoComponent } from '../EditarInfoComponent/EditarInfoComponent';
import { InformacoesNegocioModal } from '../InformacoesNegocioModal/InformacoesNegocioModal';
import { HorariosFuncionamentoModal } from '../HorariosFuncionamentoModal/HorariosFuncionamentoModal';
import { FormasPagamentoModal } from '../FormasPagamentoModal.tsx/FormasPagamentoModal';

const NegocioComponent: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState<string | null>(null);

    const handleOpenModal = (modalId: string) => {
        setModalOpen(modalId);
    };

    const handleCloseModal = () => {
        setModalOpen(null);
    };
    const informacoesBasicas = {
        "Nome do negócio:": "Joãozinho Barbershop",
        "Telefone (WhatsApp):": "(83) 9 9999-8888",
        "Descrição:": "A melhor barbearia de CG!"
    };
    
    const horariosFuncionamento = {
        "Domingo:": "Fechado",
        "Segunda-feira:": "08:00-12:00, 14:00-18:00",
        "Terça-feira:": "08:00-12:00, 14:00-18:00",
        "Quarta-feira:": "08:00-12:00, 14:00-18:00",
        "Quinta-feira:": "08:00-12:00, 14:00-18:00",
        "Sexta-feira:": "08:00-12:00, 14:00-18:00",
        "Sábado:": "08:00-12:00"
    };
    
    const formasPg = {
        "Formas de pagamento:": "Pix, Débito, Crédito, Dinheiro, Cheque."
    };
    const infoModal = InformacoesNegocioModal;
    const horariosModal = HorariosFuncionamentoModal;
    const formasPgModal = FormasPagamentoModal;

    return (
        <Container>
            <ContainerTitle>{"Informações do Negócio"}</ContainerTitle>
            <InnerContainer>
                <EditarInfoComponent 
                    title="Informações Básicas" 
                    object={informacoesBasicas} 
                    componentHeight={"100px"} 
                    modalToRender={infoModal}
                    isOpen={isModalOpen === 'infoModal'}
                    openModal={() => handleOpenModal('infoModal')}
                    onClose={handleCloseModal}
                />
                <EditarInfoComponent 
                    title="Horários de Funcionamento" 
                    object={horariosFuncionamento} 
                    componentHeight={"170px"} 
                    modalToRender={horariosModal}
                    isOpen={isModalOpen === 'horariosModal'}
                    openModal={() => handleOpenModal('horariosModal')}
                    onClose={handleCloseModal}
                />
                <EditarInfoComponent 
                    title="Formas de Pagamento"
                    object={formasPg} 
                    componentHeight={"65px"} 
                    modalToRender={formasPgModal}
                    isOpen={isModalOpen === 'formasPgModal'}
                    openModal={() => handleOpenModal('formasPgModal')}
                    onClose={handleCloseModal}
                />
            </InnerContainer>
        </Container>
    );
};

export {NegocioComponent}