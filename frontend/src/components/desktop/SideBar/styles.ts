import styled from "styled-components";
import {theme} from "../../../styles/theme";

export const SideBarContainer = styled.div`
  height: 100%;
  width: 200px;
  background-color: ${theme.COLORS.PRIMARY_COLOR};
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

export const LogoContainer = styled.div`
  display: flex;
  height: 80px;
  width: 200px;
`;

export const Logo = styled.div`
  display: flex-row;
  align-items: flex-start;
  margin-right: 20px;
`;

export const Logout = styled.div`
  position: fixed;
  bottom: 0;
`;

export const MenuItemText = styled.header`
  color: ${"theme.COLORS.SECONDARY_COLOR"};
  size: 50px;
  display: flex;
  align-items: center;
  font: ${theme.FONTS.INTER};
`;