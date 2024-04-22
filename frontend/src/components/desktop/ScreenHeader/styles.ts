import styled from 'styled-components';
import {theme} from "../../../styles/theme";

export const Header = styled.h1`
  color: ${theme.COLORS.PRIMARY_COLOR};  // Rosa
  font-size: 80px;
  margin-left: 100px;
  font-weight: bold;
`;

export const HeaderContainer = styled.div`
  width: 100%;
`;

export const Separator = styled.div`
  height: 2px;
  width: 90%;
  margin-left: 100px;
  background-color: ${theme.COLORS.DISABLED_COLOR};
`;