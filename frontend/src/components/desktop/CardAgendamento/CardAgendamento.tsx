import React from 'react';
import { CardContainer, NomeServico, NomeCliente, WhatsAppCliente } from './styles';

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
      <NomeServico>{nomeServico}</NomeServico>
      <NomeCliente>{nomeCliente}</NomeCliente>
      <WhatsAppCliente>{whatsappCliente}</WhatsAppCliente>
    </CardContainer>
  );
}

export { CardAgendamento };