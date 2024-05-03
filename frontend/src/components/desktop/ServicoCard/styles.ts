import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const ServicoContainer = styled.div`
    background-color: ${theme.COLORS.BACKGROUND_COLOR};
    width: 500px;
    height: 80px;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 600;
    color: ${theme.COLORS.PRIMARY_COLOR};
    border: 1px solid;
    border-radius: 5px;
    border-color: ${theme.COLORS.DISABLED_COLOR};
    overflow: hidden;
`;

export const NomePrecoContainer = styled.div`
    display: flex;
    position: relative;
    top: -6%;
    height: 20px;
    width: 485px;
    justify-content: space-between;
    align-items: center;
`;

export const DescricaoDuracaoContainer = styled.div`
    display: flex;
    position: relative;
    top: -4%;
    height: 20px;
    width: 485px;
    justify-content: space-between;
    align-items: center;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    position: relative;
    top: 3%;
    right: -38%;
    gap: 5px;
`;

export const ServicoTitle = styled.h1`
    font-size: 20px;
`;

export const PrecoDuracaoTitle = styled.h1`
    font-size: 12px;
    font-weight: 800;
    color: ${theme.COLORS.SECONDARY_COLOR};
`;

export const DescricaoTitle = styled.h1`
    font-size: 12px;
    font-weight: 600;
    color: ${theme.COLORS.SECONDARY_COLOR};
`;