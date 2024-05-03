import React from 'react';
import {Progress, ProgressBarContainer} from './styles'

interface ProgressBarProps {
    porcentagem: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ porcentagem }) => {
    return (
      <ProgressBarContainer>
        <Progress style={{ width: `${porcentagem}%` }} />
      </ProgressBarContainer>
    );
  };
  
  export {ProgressBar}