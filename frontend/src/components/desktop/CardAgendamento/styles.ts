import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const CardContainer = styled.div`
  background-color: #FFE8D6;
  width: 160px; 
  height: 65px;  
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 4px 2px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.COLORS.PRIMARY_LIGHT};
  }
`;

export const NomeServico = styled.h1`
  font-size: 15px;
  font-weight: bold;
  color: ${theme.COLORS.SECONDARY_COLOR};
  padding-bottom: 10px;
  padding-left: 5px;
  margin: 0; 
  overflow: hidden; 
  white-space: nowrap;  
  text-overflow: ellipsis;  
`;

export const NomeCliente = styled.h2`
  font-size: 13px;
  padding-top: 5px;
  padding-left: 5px;
  color: ${theme.COLORS.SECONDARY_COLOR};
  margin: 0;  
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;  // Adiciona "..." se o texto for muito longo
`;

export const WhatsAppCliente = styled.h2`
  font-size: 11px;
  color: ${theme.COLORS.SECONDARY_COLOR};
  padding-bottom: 5px;
  padding-left: 5px;
  margin: 0; 
  overflow: hidden;  
  white-space: nowrap;  // Evita a quebra de linha
  text-overflow: ellipsis;  // Adiciona "..." se o texto for muito longo
`;