import React from 'react';
import IconFloor from './floor';
import IconBathroom from './iconBathroom';
import IconBedroom from './iconBedroom';
import IconCompass from './IconCompass';
import IconEdit from './iconEdit';
import IconLength from './iconLength';
import IconLocation from './IconLocation';
import IconNext from './iconNext';
import IconPhone from './IconPhone';
import IconWidth from './IconWidth';
import IconInterior from './interior';
import IconRoad from './road';
import IconStructure from './structure';
import { IconSvgType } from './type';
import CloseIcon from './closeIcon';
import IconPre from './IconPre';
interface IconSvgProps {
  name: IconSvgType;
  color?: string;
  width?: number;
  height?: number;
}

const IconSvg: React.FC<IconSvgProps> = ({ name, color, width, height }) => {
  const renderIcon = () => {
    switch (name) {
      case 'compass':
        return (
          <IconCompass
            color={color}
            width={width}
            height={height}
          />
        );
      case 'bedroom':
        return (
          <IconBedroom
            color={color}
            width={width}
            height={height}
          />
        );
      case 'bathroom':
        return (
          <IconBathroom
            width={width}
            height={height}
          />
        );
      case 'interior':
        return (
          <IconInterior
            width={width}
            height={height}
          />
        );
      case 'location':
        return (
          <IconLocation
            width={width}
            height={height}
          />
        );
      case 'road':
        return (
          <IconRoad
            width={width}
            height={height}
          />
        );
      case 'floor':
        return (
          <IconFloor
            width={width}
            height={height}
          />
        );
      case 'structure':
        return (
          <IconStructure
            width={width}
            height={height}
          />
        );
      case 'phone':
        return (
          <IconPhone
            width={width}
            height={height}
            color={color}
          />
        );
      case 'next':
        return (
          <IconNext
            width={width}
            height={height}
            color={color}
          />
        );
      case 'length':
        return (
          <IconLength
            width={width}
            height={height}
            color={color}
          />
        );
      case 'width':
        return (
          <IconWidth
            width={width}
            height={height}
            color={color}
          />
        );
      case 'edit':
        return (
          <IconEdit
            width={width}
            height={height}
          />
        );
      case 'close':
        return (
          <CloseIcon
            width={width}
            height={height}
          />
        );
      case 'pre':
        return (
          <IconPre
            width={width}
            height={height}
            color={color}
          />
        );

      default:
        return null;
    }
  };

  return <>{renderIcon()}</>;
};

export { IconSvg };
