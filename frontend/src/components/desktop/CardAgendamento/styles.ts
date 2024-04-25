import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const CardContainer = styled.div`
  background-color: #FFE8D6;
  width: 180px; 
  height: 50px;  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.COLORS.PRIMARY_LIGHT};
  }
`;

export const NomeCliente = styled.h1`
  font-size: 15px;
  font-weight: bold;
  color: ${theme.COLORS.SECONDARY_COLOR};
  padding-bottom: 0px;
  padding-left: 5px;
  margin: 0; 
  overflow: hidden; 
  white-space: nowrap;  
  text-overflow: ellipsis;  
`;

export const NomeServico = styled.h2`
  font-size: 13px;
  padding-left: 5px;
  color: ${theme.COLORS.SECONDARY_COLOR};
  margin: 0;  
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;  // Adiciona "..." se o texto for muito longo
`;