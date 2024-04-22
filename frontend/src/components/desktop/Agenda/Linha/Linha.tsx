import React from 'react';
import { LinhaContainer } from './styles'; // Importa os estilos personalizados

interface LinhaContainerProps {
  rowName?: string;
}

const Linha: React.FC<LinhaContainerProps> = ({
  rowName = ""
}) => {
  return (
    <LinhaContainer>
      {rowName}
    </LinhaContainer>
  );
};

export {Linha};