import React, { ReactNode } from 'react';
import { CelulaContainer } from './styles';

interface CelulaProps {
    children?: ReactNode;  // Isso permite que qualquer elemento React seja passado como filho
  }
  
  const Celula: React.FC<CelulaProps> = ({ children }) => {
    return (
      <CelulaContainer>{children}</CelulaContainer>
    );
  }
  
  export { Celula };