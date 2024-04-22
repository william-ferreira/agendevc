import styled from "styled-components";
import {theme} from "../../../styles/theme";

export const SideBarContainer = styled.div`
  height: 100%;
  width: 200px;
  background-color: ${theme.COLORS.PRIMARY_COLOR};
  padding: 85px 0 35px;
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

export const MenuItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
  cursor: pointer;
  padding: 15px 0;
`;

export const MenuItemText = styled.header`
  color: ${"theme.COLORS.SECONDARY_COLOR"};
  size: 50px;
  display: flex;
  align-items: center;
  font: ${theme.FONTS.INTER};
`;