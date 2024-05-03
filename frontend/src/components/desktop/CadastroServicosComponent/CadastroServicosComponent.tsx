import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {Container, InnerContainer, ContainerTitle, ButtonContainer, Text} from './styles';
import { CustomButton } from '../../common/CustomButton/CustomButton';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { adicionaServicoText } from '../../../utils/constants';
import { AdicionarServicoModal } from '../AdicionarServicoModal/AdicionarServicoModal';

interface Servico {
    nome: string;
    preco: string;
    duracao: string;
    descricao?: string;
}

const CadastroServicosComponent: React.FC = () => {
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
            <ContainerTitle>{"Servicos"}</ContainerTitle>
            <ProgressBar porcentagem={90}></ProgressBar>
            <InnerContainer>
                <Text>{adicionaServicoText}</Text>
                <CustomButton buttonText={"+"} buttonWidth={50} onClick={handleOpenModal}></CustomButton>
            </InnerContainer>
            <ButtonContainer>
                <Link to="/">
                    <CustomButton buttonText={"Finalizar Cadastro"} buttonWidth={300}></CustomButton>
                </Link>
            </ButtonContainer>
            <AdicionarServicoModal isOpen={isModalOpen} onClose={handleCloseModal} onAddServico={adicionarNovoServico}/>
        </Container>
    );
};

export {CadastroServicosComponent};