import React from 'react';
import { Svg, Path, SvgProps } from 'react-native-svg';
import { COLORS } from '../../constants';

const IconNext: React.FC<SvgProps> = ({
  color = COLORS.BLUE_2,
  width = 24,
  height = 24,
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M9 18L15 12L9 6"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default IconNext;
