import React, { useState } from 'react';
import { Container, ListaServicosContainer, ContainerTitle, ButtonContainer, Text, InnerSeparator } from './styles';
import { CustomButton } from '../../common/CustomButton/CustomButton';
import { AdicionarServicoModal } from '../AdicionarServicoModal/AdicionarServicoModal';
import { ServicoCard } from '../ServicoCard/ServicoCard';

interface Servico {
    nome: string;
    preco: string;
    duracao: string;
    descricao?: string;
}

const ServicosComponent: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [servicos, setServicos] = useState<Servico[]>([]);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const adicionarNovoServico = (servico: Servico) => {
        setServicos([...servicos, servico]);
    };

    return (
        <Container>
            <ContainerTitle>{"Serviços"}</ContainerTitle>
            <InnerSeparator />
            <ListaServicosContainer>
                {servicos.map((servico, index) => (
                    <ServicoCard
                        key={index}
                        nomeServico={servico.nome}
                        descricaoServico={servico.descricao}
                        precoServico={servico.preco}
                        duracaoServico={servico.duracao}
                    />
                ))}
            </ListaServicosContainer>
            <ButtonContainer>
                <CustomButton buttonText={"Adicionar Serviço"} buttonWidth={300} onClick={handleOpenModal}></CustomButton>
            </ButtonContainer>
            <AdicionarServicoModal isOpen={isModalOpen} onClose={handleCloseModal} onAddServico={adicionarNovoServico}/>
        </Container>
    );
};

export { ServicosComponent };