import React from 'react';
import { Svg, Path, SvgProps } from 'react-native-svg';
import { COLORS } from '../../constants';

const IconNext: React.FC<SvgProps> = ({
  color = COLORS.BLUE_2,
  width = 6,
  height = 9,
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 6 9"
      fill="none"
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.64091 4.34155L1.05543 1.75606C0.664903 1.36554 0.585757 0.811519 0.87865 0.518625C1.17154 0.225732 1.72556 0.304878 2.11609 0.695402L4.94451 3.52383C5.18781 3.76712 5.31025 4.07387 5.29717 4.3414C5.31035 4.609 5.18791 4.91588 4.94453 5.15926L2.1161 7.98768C1.72558 8.37821 1.17156 8.45735 0.878664 8.16446C0.585771 7.87157 0.664917 7.31755 1.05544 6.92702L3.64091 4.34155Z"
        fill={color}
      />
    </Svg>
  );
};

export default IconNext;
