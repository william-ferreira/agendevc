import React from 'react';
import { CardContainer, NomeServico, NomeCliente } from './styles';

interface CardAgendamentoProps {
  nomeServico: string;
  nomeCliente: string;
  whatsappCliente: string;
}

const CardAgendamento: React.FC<CardAgendamentoProps> = ({ nomeServico, nomeCliente, whatsappCliente }) => {
  const handleClick = () => {
    console.log("Card clicado!");
  };

  return (
    <CardContainer onClick={handleClick}>
      <NomeCliente>{nomeCliente}</NomeCliente>
      <NomeServico>{nomeServico}</NomeServico>
    </CardContainer>
  );
}

export { CardAgendamento };