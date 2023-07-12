import * as React from 'react';
import Svg, { SvgProps, Circle, Path } from 'react-native-svg';
export const IconCheckSuccess = (props: SvgProps) => (
  <Svg
    width={80}
    height={80}
    fill="none"
    {...props}
  >
    <Circle
      cx={40}
      cy={40}
      r={35}
      fill="#52C41A"
    />
    <Path
      fill="#fff"
      d="M56.073 27.063h-2.808c-.394 0-.768.18-1.009.49L35.691 48.538l-7.944-10.065a1.286 1.286 0 0 0-1.008-.49H23.93a.32.32 0 0 0-.253.518l11.005 13.942a1.29 1.29 0 0 0 2.021 0l19.623-24.866a.318.318 0 0 0-.253-.515Z"
    />
  </Svg>
);
