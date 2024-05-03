import React from 'react';
import {Container, InnerContainer, CustomCheckbox, CheckboxContainer, CheckboxItem, CheckboxLabel, ContainerTitle, ButtonContainer, Text, InnerSeparator} from './styles';
import { CustomButton } from '../../common/CustomButton/CustomButton';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { selecioneFormaPg } from '../../../utils/constants';
import { Link } from 'react-router-dom';

const FormasPagamento: React.FC = () => {
    return (
        <Container>
            <ContainerTitle>{"Formas de Pagamento"}</ContainerTitle>
            <ProgressBar porcentagem={75}></ProgressBar>
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
            <ButtonContainer>
                <Link to="/cadastroServicos">
                    <CustomButton buttonText={"Próximo"} buttonWidth={300}></CustomButton>
                </Link>
            </ButtonContainer>
        </Container>
    );
};

export {FormasPagamento};