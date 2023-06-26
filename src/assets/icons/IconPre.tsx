import React from 'react';
import { Svg, Path, SvgProps } from 'react-native-svg';
import { COLORS } from '../../constants';

const IconPre: React.FC<SvgProps> = ({
  color = COLORS.WHITE,
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
        d="M15 18L9 12L15 6"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default IconPre;
