import React from 'react';
import { PrimeiroAcessoTextContainer } from './styles';

interface InstrucaoContainerProps {
  textoInstrucao: string;
}

const PrimeiroAcessoText: React.FC<InstrucaoContainerProps> = ({
  textoInstrucao
}) => {
  return (
    <PrimeiroAcessoTextContainer>
      {textoInstrucao}
    </PrimeiroAcessoTextContainer>
  );
};

export {PrimeiroAcessoText};