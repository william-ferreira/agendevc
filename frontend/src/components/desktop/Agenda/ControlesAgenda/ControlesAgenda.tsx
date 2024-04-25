import React from 'react';
import { ControlesAgendaContainer, CurrentDatesText, RightSideButtons } from './styles';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';

interface ControlesAgendaProps {
  semanaAtual: string;
}

const ControlesAgenda: React.FC<ControlesAgendaProps> = ({semanaAtual}) => {
    return (
      <ControlesAgendaContainer>
        <ButtonIcon iconName='Event'/>
        <CurrentDatesText>{semanaAtual}</CurrentDatesText>
        <RightSideButtons>
            <ButtonIcon iconName='ChevronLeft'/>
            <ButtonIcon iconName='ChevronRight'/>
        </RightSideButtons>
      </ControlesAgendaContainer>
    );
  }

export {ControlesAgenda}