import React from 'react';
import { Svg, Path, SvgProps } from 'react-native-svg';

const IconPhone: React.FC<SvgProps> = ({
  color = '#595959',
  width = 14,
  height = 11,
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
    >
      <Path
        d="M12.9996 9.98447V11.7909C13.0024 12.4815 12.3815 13.0582 11.6843 12.9953C5.66667 13 1 8.29 1.00471 2.31279C0.941916 1.6193 1.51572 1.00071 2.20541 1.00006H4.0155C4.30832 0.997179 4.59219 1.10067 4.81421 1.29123C5.44542 1.83299 5.8514 3.67185 5.6952 4.40285C5.57325 4.97357 4.99794 5.37286 4.6068 5.7632C5.46572 7.2708 6.7164 8.519 8.227 9.37627C8.61814 8.98587 9.0182 8.41173 9.59007 8.29C10.3237 8.13387 12.1743 8.5404 12.7139 9.176C12.9053 9.4014 13.0069 9.68913 12.9996 9.98447Z"
        stroke={color}
        stroke-width="1.26667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default IconPhone;
