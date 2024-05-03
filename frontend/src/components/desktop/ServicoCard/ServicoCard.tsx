import React, {useState} from 'react';
import { ServicoContainer, NomePrecoContainer, DescricaoDuracaoContainer, ButtonsContainer, ServicoTitle, PrecoDuracaoTitle, DescricaoTitle } from './styles'; // Importa os estilos personalizados
import {theme} from "../../../styles/theme";
import { CustomButton } from '../../common/CustomButton/CustomButton';
import { ExcluirServicoModal } from '../ExcluirServicoModal/ExcluirServicoModal';


interface ServicoCardProps {
  nomeServico?: string;
  descricaoServico?: string;
  precoServico?: string;
  duracaoServico?: string;
}

const ServicoCard: React.FC<ServicoCardProps> = ({
  nomeServico = "Corte Simples",
  descricaoServico = "Corte de cabelo simples.",
  precoServico = "R$ 25,00",
  duracaoServico = "1h",
}) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

  return (
    <ServicoContainer>
        <NomePrecoContainer>
            <ServicoTitle>{nomeServico}</ServicoTitle>
            <PrecoDuracaoTitle>{precoServico}</PrecoDuracaoTitle>            
        </NomePrecoContainer>
        <DescricaoDuracaoContainer>
            <DescricaoTitle>{descricaoServico}</DescricaoTitle>
            <PrecoDuracaoTitle>{duracaoServico}</PrecoDuracaoTitle>
        </DescricaoDuracaoContainer>
        <ButtonsContainer>
            <CustomButton buttonText="Editar" textSize={12} buttonWidth={50} buttonHeight={24}/>
            <CustomButton buttonText="Excluir" textSize={12} buttonColor={theme.COLORS.DELETE_COLOR} buttonWidth={50} buttonHeight={24} onClick={handleOpenModal}/>
        </ButtonsContainer>
        <ExcluirServicoModal isOpen={isModalOpen} onClose={handleCloseModal}/>
    </ServicoContainer>
  );
};

export {ServicoCard};