import React from 'react';
import { Svg, Path, SvgProps } from 'react-native-svg';

const IconRoad: React.FC<SvgProps> = ({ width = 16, height = 17 }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 16 17"
      fill="none"
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 0.841309H16V16.8413H0V0.841309Z"
        fill-opacity="0.01"
      />
      <Path 
        d="M3.67 2.84131L2 14.8413"
        stroke="#434343"
        stroke-width="1.33"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12.34 2.84131L13.99 14.8413"
        stroke="#434343"
        stroke-width="1.33"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8 2.84131V4.84131"
        stroke="#434343"
        stroke-width="1.33"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8 12.5112V14.8412"
        stroke="#434343"
        stroke-width="1.33"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8 7.51123V9.84123"
        stroke="#434343"
        stroke-width="1.33"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default IconRoad;
