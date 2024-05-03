import React, {useState} from 'react';
import { CardContainer, NomeServico, NomeCliente } from './styles';
import { InfoAgendamentoModal } from '../InfoAgendamentoModal/InfoAgendamentoModal';

interface CardAgendamentoProps {
  nomeServico: string;
  nomeCliente: string;
  whatsappCliente: string;
}

const CardAgendamento: React.FC<CardAgendamentoProps> = ({ nomeServico, nomeCliente, whatsappCliente }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
      setModalOpen(true);
  };

  const handleCloseModal = () => {
      setModalOpen(false);
  };
  const handleClick = () => {
    console.log("Card clicado!");
  };

  return (
    <CardContainer onClick={handleOpenModal}>
      <NomeCliente>{nomeCliente}</NomeCliente>
      <NomeServico>{nomeServico}</NomeServico>
      <InfoAgendamentoModal isOpen={isModalOpen} onClose={handleCloseModal}/>
    </CardContainer>
  );
}

export { CardAgendamento };