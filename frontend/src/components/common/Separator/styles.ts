import styled from 'styled-components';

export const Container = styled.div<{
  width: number;
  height: number;
  color: string;
  margin: number;
}>`
  width: ${props => props.width}%;
  height: ${props => props.height}px;
  margin: ${props => props.margin}px;
  background-color: ${props => props.color};
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 12%;
  align-items: flex-start;
  justify-content: center;
`;