import React from 'react';
import { Svg, Path, SvgProps } from 'react-native-svg';
import { COLOR_BLACK_1 } from '../../constants';

const IconLength: React.FC<SvgProps> = ({
  color = '#434343',
  width = 10,
  height = 16,
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 10 16"
      fill="none"
    >
      <Path
        d="M6.2605 0.841066V14.8411C6.2605 14.9848 6.14375 15.1016 6 15.1016H1C0.930933 15.1015 0.864713 15.074 0.815874 15.0252C0.767035 14.9764 0.739568 14.9101 0.739502 14.8411V0.841066C0.739502 0.697316 0.856252 0.580566 1 0.580566H6C6.14375 0.580566 6.2605 0.697316 6.2605 0.841066ZM5.7395 1.58057V1.10157H1.2605V14.5806H5.7395V14.1016H5C4.93289 14.0986 4.8695 14.0699 4.82305 14.0214C4.7766 13.9728 4.75067 13.9082 4.75067 13.8411C4.75067 13.7739 4.7766 13.7093 4.82305 13.6608C4.8695 13.6122 4.93289 13.5835 5 13.5806H5.7395V13.1016H4C3.93289 13.0986 3.8695 13.0699 3.82305 13.0214C3.7766 12.9728 3.75067 12.9082 3.75067 12.8411C3.75067 12.7739 3.7766 12.7093 3.82305 12.6608C3.8695 12.6122 3.93289 12.5835 4 12.5806H5.7395V12.1016H5C4.93289 12.0986 4.8695 12.0699 4.82305 12.0214C4.7766 11.9728 4.75067 11.9082 4.75067 11.8411C4.75067 11.7739 4.7766 11.7093 4.82305 11.6608C4.8695 11.6122 4.93289 11.5835 5 11.5806H5.7395V11.1016H4C3.93289 11.0986 3.8695 11.0699 3.82305 11.0214C3.7766 10.9728 3.75067 10.9082 3.75067 10.8411C3.75067 10.7739 3.7766 10.7093 3.82305 10.6608C3.8695 10.6122 3.93289 10.5835 4 10.5806H5.7395V10.1016H5C4.93289 10.0986 4.8695 10.0699 4.82305 10.0214C4.7766 9.97283 4.75067 9.90825 4.75067 9.84107C4.75067 9.77389 4.7766 9.7093 4.82305 9.66077C4.8695 9.61224 4.93289 9.58351 5 9.58057H5.7395V9.10157H4C3.93289 9.09863 3.8695 9.06989 3.82305 9.02136C3.7766 8.97283 3.75067 8.90825 3.75067 8.84107C3.75067 8.77389 3.7766 8.7093 3.82305 8.66077C3.8695 8.61224 3.93289 8.58351 4 8.58057H5.7395V8.10157H5C4.93289 8.09863 4.8695 8.06989 4.82305 8.02136C4.7766 7.97283 4.75067 7.90825 4.75067 7.84107C4.75067 7.77389 4.7766 7.7093 4.82305 7.66077C4.8695 7.61224 4.93289 7.58351 5 7.58057H5.7395V7.10157H4C3.93289 7.09863 3.8695 7.06989 3.82305 7.02136C3.7766 6.97283 3.75067 6.90825 3.75067 6.84107C3.75067 6.77389 3.7766 6.7093 3.82305 6.66077C3.8695 6.61224 3.93289 6.58351 4 6.58057H5.7395V6.10157H5C4.93289 6.09863 4.8695 6.06989 4.82305 6.02136C4.7766 5.97283 4.75067 5.90825 4.75067 5.84107C4.75067 5.77389 4.7766 5.7093 4.82305 5.66077C4.8695 5.61224 4.93289 5.58351 5 5.58057H5.7395V5.10157H4C3.93289 5.09863 3.8695 5.06989 3.82305 5.02136C3.7766 4.97283 3.75067 4.90825 3.75067 4.84107C3.75067 4.77389 3.7766 4.7093 3.82305 4.66077C3.8695 4.61224 3.93289 4.58351 4 4.58057H5.7395V4.10157H5C4.93289 4.09863 4.8695 4.06989 4.82305 4.02136C4.7766 3.97283 4.75067 3.90825 4.75067 3.84107C4.75067 3.77389 4.7766 3.7093 4.82305 3.66077C4.8695 3.61224 4.93289 3.58351 5 3.58057H5.7395V3.10157H4C3.93289 3.09863 3.8695 3.06989 3.82305 3.02136C3.7766 2.97283 3.75067 2.90825 3.75067 2.84107C3.75067 2.77389 3.7766 2.7093 3.82305 2.66077C3.8695 2.61224 3.93289 2.58351 4 2.58057H5.7395V2.10157H5C4.93289 2.09863 4.8695 2.06989 4.82305 2.02136C4.7766 1.97283 4.75067 1.90825 4.75067 1.84107C4.75067 1.77389 4.7766 1.7093 4.82305 1.66077C4.8695 1.61224 4.93289 1.58351 5 1.58057H5.7395ZM7.7395 1.46982L7.18425 2.02532C7.13533 2.07408 7.06907 2.10146 7 2.10146C6.93093 2.10146 6.86467 2.07408 6.81575 2.02532C6.76699 1.97639 6.73961 1.91014 6.73961 1.84107C6.73961 1.77199 6.76699 1.70574 6.81575 1.65682L7.81575 0.656816C7.86467 0.608056 7.93093 0.580676 8 0.580676C8.06907 0.580676 8.13533 0.608056 8.18425 0.656816L9.18425 1.65682C9.23301 1.70574 9.26039 1.77199 9.26039 1.84107C9.26039 1.91014 9.23301 1.97639 9.18425 2.02532C9.13533 2.07408 9.06907 2.10146 9 2.10146C8.93093 2.10146 8.86467 2.07408 8.81575 2.02532L8.2605 1.46982V14.2123L8.81575 13.6568C8.86467 13.6081 8.93093 13.5807 9 13.5807C9.06907 13.5807 9.13533 13.6081 9.18425 13.6568C9.23301 13.7057 9.26039 13.772 9.26039 13.8411C9.26039 13.9101 9.23301 13.9764 9.18425 14.0253L8.18425 15.0253C8.13533 15.0741 8.06907 15.1015 8 15.1015C7.93093 15.1015 7.86467 15.0741 7.81575 15.0253L6.81575 14.0253C6.76699 13.9764 6.73961 13.9101 6.73961 13.8411C6.73961 13.772 6.76699 13.7057 6.81575 13.6568C6.86467 13.6081 6.93093 13.5807 7 13.5807C7.06907 13.5807 7.13533 13.6081 7.18425 13.6568L7.7395 14.2123V1.46982Z"
        fill={color}
      />
    </Svg>
  );
};

export default IconLength;
