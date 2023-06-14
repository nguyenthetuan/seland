import React from 'react';
import { Svg, Path, SvgProps } from 'react-native-svg';

const IconLocation: React.FC<SvgProps> = ({
  color = '#595959',
  width = 8,
  height = 11,
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 8 11"
      fill="none"
    >
      <Path
        d="M3.8208 2.32325C3.4619 2.32198 3.1107 2.42732 2.81175 2.62592C2.51281 2.82452 2.27959 3.10745 2.14165 3.43879C2.00372 3.77013 1.9673 4.13496 2.03701 4.48703C2.10671 4.8391 2.2794 5.16254 2.53318 5.41632C2.78697 5.67011 3.11041 5.8428 3.46248 5.9125C3.81455 5.98221 4.17938 5.94579 4.51072 5.80786C4.84206 5.66992 5.12499 5.4367 5.32359 5.13775C5.52219 4.83881 5.62753 4.48761 5.62626 4.12871C5.62626 3.64987 5.43604 3.19065 5.09745 2.85206C4.75886 2.51347 4.29964 2.32325 3.8208 2.32325ZM3.8208 5.31093C3.58671 5.3122 3.35751 5.24394 3.16225 5.11481C2.96699 4.98568 2.81446 4.8015 2.72399 4.5856C2.63352 4.36969 2.6092 4.13177 2.65409 3.90202C2.69898 3.67227 2.81107 3.46102 2.97615 3.29504C3.14123 3.12906 3.35186 3.01583 3.58137 2.96969C3.81087 2.92355 4.04889 2.9466 4.26529 3.03588C4.48169 3.12517 4.66671 3.27669 4.7969 3.47124C4.92709 3.66579 4.99658 3.89462 4.99659 4.12871C4.9949 4.44003 4.87049 4.73812 4.65035 4.95826C4.43021 5.1784 4.13212 5.30281 3.8208 5.3045V5.31093Z"
        fill={color}
      />
      <Path
        d="M3.82715 0.608887C2.84383 0.608874 1.9005 0.998176 1.20339 1.69168C0.50628 2.38517 0.11209 3.32646 0.106995 4.30976C0.106995 5.78754 0.935843 7.02116 1.5398 7.92068L1.64902 8.08131C2.25298 8.93799 2.89549 9.77968 3.57656 10.6064L3.8143 10.8891L4.05203 10.6064C4.74166 9.79681 5.38417 8.95512 5.97957 8.08131L6.08878 7.91425C6.69275 7.01473 7.52159 5.78754 7.52159 4.30976C7.51655 3.3309 7.12589 2.39347 6.43432 1.70069C5.74275 1.00792 4.806 0.615636 3.82715 0.608887ZM5.58763 7.55444L5.47198 7.7215C4.93227 8.53107 4.18695 9.44343 3.82715 9.89961C3.45449 9.44343 2.7156 8.53107 2.17589 7.7215L2.06024 7.55444C1.50125 6.71918 0.736664 5.58193 0.736664 4.2969C0.772915 3.50247 1.11401 2.75259 1.68902 2.20323C2.26403 1.65386 3.02867 1.3473 3.82393 1.3473C4.61919 1.3473 5.38384 1.65386 5.95884 2.20323C6.53385 2.75259 6.87495 3.50247 6.9112 4.2969C6.89192 5.59478 6.12734 6.71275 5.56835 7.55444H5.58763Z"
        fill={color}
      />
    </Svg>
  );
};

export default IconLocation;
