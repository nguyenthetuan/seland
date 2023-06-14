import React from 'react';
import { Svg, Path, SvgProps } from 'react-native-svg';

const IconFloor: React.FC<SvgProps> = ({ width = 16, height = 15 }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 16 15"
      fill="none"
    >
      <Path
        d="M15.6875 0.797363H10.9375C10.7649 0.797363 10.625 0.93727 10.625 1.10986V2.35996C10.625 2.53256 10.7649 2.67246 10.9375 2.67246H11.5625V5.00979H5.62499C5.45243 5.00979 5.31249 5.14969 5.31249 5.32229V6.57236C5.31249 6.74495 5.45243 6.88486 5.62499 6.88486H6.25002V9.22224H0.312501C0.139907 9.22224 0 9.36215 0 9.53474V10.7848C0 10.9574 0.139907 11.0973 0.312501 11.0973H0.749878V14.5725C0.749878 14.7451 0.889785 14.885 1.06238 14.885H6.7424C6.8129 14.885 6.88133 14.8611 6.93656 14.8173L15.8817 7.72442C15.9186 7.69517 15.9484 7.65795 15.9689 7.61555C15.9894 7.57315 16 7.52667 16 7.47958V1.10986C16 0.93727 15.8601 0.797363 15.6875 0.797363ZM5.93749 6.25985V5.63479H11.5625V6.25985H5.93749ZM0.625002 10.4723V9.84724H6.25002V10.4723H0.625002ZM15.375 3.2749H14.0926C13.9201 3.2749 13.7801 3.41481 13.7801 3.58741C13.7801 3.76 13.9201 3.89991 14.0926 3.89991H15.375V7.32852L6.63349 14.26H1.37488V12.3146H2.65726C2.82982 12.3146 2.96976 12.1747 2.96976 12.0021C2.96976 11.8295 2.82982 11.6896 2.65726 11.6896H1.37488V11.0973H6.56253C6.73512 11.0973 6.87503 10.9574 6.87503 10.7848V6.88486H11.875C12.0476 6.88486 12.1875 6.74495 12.1875 6.57236V2.67246H15.375V3.2749ZM15.375 2.04746H11.25V1.42237H15.375V2.04746Z"
        fill="#434343"
      />
    </Svg>
  );
};

export default IconFloor;
