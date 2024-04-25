import React from 'react';
import { StyledIconButton } from './styles';
import * as Icons from '@material-ui/icons';
import { theme } from '../../../../styles/theme';

interface ButtonIconProps {
  iconName: keyof typeof Icons;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({ iconName }) => {
  const IconComponent = Icons[iconName];

  const handleClick = () => {
    console.log("Icon button clicked!");
  };

  return (
    <StyledIconButton onClick={handleClick}>
      <IconComponent style={{ fontSize: 60, width: '60px', height: '60px', color: theme.COLORS.PRIMARY_COLOR }} />
    </StyledIconButton>
  );
};

export {ButtonIcon};