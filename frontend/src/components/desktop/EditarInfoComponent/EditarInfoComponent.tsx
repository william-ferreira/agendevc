import React, { ReactNode, useState } from 'react';
import { ButtonsContainer, InformacaoServico, InnerSeparator, DadoServico, CloseButton, Content, ContainerTitle, DadosServicoContainer, InformacoesServicoContainer, ServicoContainer } from './styles';
import { CustomButton } from '../../common/CustomButton/CustomButton';
import {theme} from '../../../styles/theme';

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    openModal?: () => void;
}

interface EditarInfoProps {
    title: string;
    object: Informacao;
    componentHeight: string;
    modalToRender?: React.ComponentType<ModalProps>;
    children?: ReactNode;
}

interface Informacao {
    [key: string]: string;
}

interface ChavesProps {
    chave: string;
}

interface ValoresProps {
    valor: string;
}

const EditarInfoComponent: React.FC<EditarInfoProps & ModalProps> = ({
    title, object, componentHeight, modalToRender, isOpen, openModal, onClose, children
}) => {
    const Chaves: React.FC<ChavesProps> = ({ chave }) => <div>{chave}</div>;
    const Valores: React.FC<ValoresProps> = ({ valor }) => <div>{valor}</div>;
    const ModalComponent = modalToRender;

    return (
        <Content style={{height:componentHeight}}>
            <InnerSeparator></InnerSeparator>
            <ContainerTitle>{title}</ContainerTitle>
            <ServicoContainer>
                <InformacoesServicoContainer>   
                    <InformacaoServico>
                        {Object.keys(object).map(chave => (
                            <Chaves chave={chave} key={`chave-${chave}`} />
                        ))}
                    </InformacaoServico>
                </InformacoesServicoContainer>
                <DadosServicoContainer>
                    <DadoServico>
                        {Object.keys(object).map(chave => (
                            <Valores valor={object[chave]} key={`valor-${chave}`} />
                        ))}
                    </DadoServico>
                </DadosServicoContainer>
            </ServicoContainer>
            <ButtonsContainer>
                <CustomButton buttonText="Editar" buttonHeight={30} buttonWidth={55} textSize={12} buttonColor={theme.COLORS.PRIMARY_COLOR} onClick={openModal}></CustomButton>
            </ButtonsContainer>
            {ModalComponent && <ModalComponent isOpen={isOpen} onClose={onClose}/>}
        </Content>
    );
}

export {EditarInfoComponent}