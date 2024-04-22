import React from 'react';
import { ColunaContainer } from './styles'; // Importa os estilos personalizados

interface ColunaContainerProps {
  columnName: string;
}

const Coluna: React.FC<ColunaContainerProps> = ({
  columnName
}) => {
  return (
    <ColunaContainer>
      {columnName}
    </ColunaContainer>
  );
};

export {Coluna};