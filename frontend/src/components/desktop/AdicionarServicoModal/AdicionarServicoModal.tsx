import React, { useState, ReactNode } from 'react';
import {
    Backdrop, ButtonsContainer, CloseButton, ModalContent, ContainerTitle, NomePrecoContainer, DuracaoContainer, DescricaoContainer,
    Input, InputContainer, InputLabel, InputsContainer, Preco, Duracao, CustomOption, TextArea
} from './styles';
import { CustomButton } from '../../common/CustomButton/CustomButton';
import { theme } from '../../../styles/theme';
import {
    descricaoServicoPlaceholder, duracaoServicoPlaceholder, nomeServico, precoServico
} from '../../../utils/constants';
import { Servico } from '../../../@types/types';

interface ServicoModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAddServico: (servico: Servico) => void;
    children?: ReactNode;
}

const AdicionarServicoModal: React.FC<ServicoModalProps> = ({
    isOpen, onClose, onAddServico, children
}) => {
    const duracoes = ['1h', '2h', '3h', '4h'];
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [duracao, setDuracao] = useState<string>('');
    const [descricao, setDescricao] = useState('');

    const adicionarServico = () => {
        if (!nome || !preco || !duracao) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        const novoServico: Servico = {
            nome, preco, duracao, descricao
        };

        onAddServico(novoServico);
        setNome('');
        setPreco('');
        setDuracao('');
        setDescricao('');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <Backdrop onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <ContainerTitle>{"Adicionar Serviço"}</ContainerTitle>
                <CloseButton onClick={onClose}>×</CloseButton>
                <InputsContainer>
                    <NomePrecoContainer>
                        <InputContainer>
                            <InputLabel htmlFor="nome">Nome</InputLabel>
                            <Input
                                type="text"
                                id="nome"
                                placeholder={nomeServico}
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </InputContainer>
                        <InputContainer>
                            <InputLabel htmlFor="preco">Preço (R$)</InputLabel>
                            <Preco
                                type="text"
                                id="preco"
                                placeholder={precoServico}
                                value={preco}
                                onChange={(e) => setPreco(e.target.value)}
                            />
                        </InputContainer>
                    </NomePrecoContainer>
                    <DuracaoContainer>
                        <InputContainer>
                            <InputLabel htmlFor="duracao">Duração (h)</InputLabel>
                            <Duracao
                                value={duracao}
                                onChange={(e) => setDuracao(e.target.value)}
                            >
                                <CustomOption value="" disabled selected hidden>
                                    {duracaoServicoPlaceholder}
                                </CustomOption>
                                {duracoes.map((duracao) => (
                                    <CustomOption key={duracao} value={duracao}>
                                        {duracao}
                                    </CustomOption>
                                ))}
                            </Duracao>
                        </InputContainer>
                    </DuracaoContainer>
                    <DescricaoContainer>
                        <InputContainer>
                            <InputLabel htmlFor="descricao">Descrição (Opcional)</InputLabel>
                            <TextArea
                                id="descricao"
                                placeholder={descricaoServicoPlaceholder}
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                            />
                        </InputContainer>
                    </DescricaoContainer>
                </InputsContainer>
                <ButtonsContainer>
                    <CustomButton
                        buttonText="Adicionar"
                        buttonHeight={40}
                        buttonWidth={140}
                        textSize={16}
                        onClick={adicionarServico}
                    ></CustomButton>
                    <CustomButton
                        buttonText="Cancelar"
                        buttonHeight={40}
                        buttonWidth={140}
                        textSize={16}
                        buttonColor={theme.COLORS.DISABLED_COLOR}
                        onClick={onClose}
                    ></CustomButton>
                </ButtonsContainer>
            </ModalContent>
        </Backdrop>
    );
};

export { AdicionarServicoModal };