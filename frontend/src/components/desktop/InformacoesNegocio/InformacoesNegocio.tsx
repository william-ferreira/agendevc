import React from 'react';
import { Link } from 'react-router-dom';
import {Container, ContainerTitle, ButtonContainer, InputContainer, InputsContainer, InputLabel, Input, TextArea} from './styles';
import { CustomButton } from '../../common/CustomButton/CustomButton';
import { ProgressBar } from '../ProgressBar/ProgressBar';

const InformacoesNegocio: React.FC = () => {
    return (
        <Container>
            <ContainerTitle>{"Informações do Negócio"}</ContainerTitle>
            <ProgressBar porcentagem={25}></ProgressBar>
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
            <ButtonContainer>
                <Link to="/cadastroHorarios">
                    <CustomButton buttonText="Próximo" buttonWidth={300}></CustomButton>
                </Link>
            </ButtonContainer>
        </Container>
      );
};

export {InformacoesNegocio};