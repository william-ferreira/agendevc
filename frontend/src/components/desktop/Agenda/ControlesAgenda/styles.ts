import styled from "styled-components";
import {theme} from "../../../../styles/theme";

export const ControlesAgendaContainer = styled.div`
  display: flex;
  height: 60px;
  width: 1520px;
  margin-left: 100px;
  margin-bottom: 12px;
  justify-content: space-between;
  background-color: ${theme.COLORS.TRANSPARENT};
`;

export const ButtonGrid = styled.div`
  margin-top: 20px;
  display: flex-column;
`;

export const Separator = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${theme.COLORS.DISABLED_COLOR};
`;

export const RightSideButtons = styled.div`
  display: flex;
`;

export const ChevronRight = styled.div`
  display: flex;
  height: 80px;
  width: 200px;
`;

export const CurrentDatesText = styled.h1`
  color: ${theme.COLORS.SECONDARY_COLOR};
  size: 50px;
  display: flex;
  align-items: center;
  font: ${theme.FONTS.INTER};
`;