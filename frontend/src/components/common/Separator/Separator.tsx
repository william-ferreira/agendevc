import React from 'react';

import {theme} from '../../../styles/theme';
import {Container} from './styles';

interface SeparatorProps {
  widthPercentage?: number;
  height?: number;
  color?: string;
  margin?: number;
}

const Separator: React.FC<SeparatorProps> = ({
  widthPercentage = 80,
  height = 1,
  color = theme.COLORS.DISABLED_COLOR,
  margin = 0,
}) => {
  return (
    <Container
      width={widthPercentage}
      height={height}
      color={color}
      margin={margin}
    />
  );
};

export {Separator};