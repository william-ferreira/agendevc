import styled from 'styled-components';
import {theme} from "../../../styles/theme";

export const Header = styled.body`
  color: ${theme.COLORS.PRIMARY_COLOR};
  font-size: 80px;
  margin-left: 100px;
  margin-top: 10px;
  font-weight: bold;
`;

export const HeaderContainer = styled.div`
  height: 140px;
  align-items: flex-start;
  width: 100%;
  justify-content: space-around;
`;

export const Separator = styled.div`
  height: 2px;
  width: 1520px;
  margin-top: 20px;
  margin-left: 100px;
  background-color: ${theme.COLORS.DISABLED_COLOR};
`;