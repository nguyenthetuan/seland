import { SvgProps } from 'react-native-svg';
export interface IconSvgProps extends SvgProps {
  size?: number;
}

export type IconSvgType =
  | 'compass'
  | 'bedroom'
  | 'bathroom'
  | 'interior'
  | 'location'
  | 'road'
  | 'floor'
  | 'structure'
  | 'phone'
  | 'next'
  | 'length'
  | 'width'
  | 'edit'
  | 'close'
  | 'pre';
