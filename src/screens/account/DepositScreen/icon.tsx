import * as React from 'react';
import Svg, {
  SvgProps,
  G,
  Path,
  Defs,
  ClipPath,
  Circle,
} from 'react-native-svg';
export const IconCopy = (props: SvgProps) => (
  <Svg
    width={28}
    height={26}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        fillOpacity={0.01}
        d="M7 6h14v14H7z"
      />
      <G clipPath="url(#b)">
        <Path
          fill="#868686"
          d="M19 6h-8.375a.125.125 0 0 0-.125.125V7c0 .069.056.125.125.125h7.75v10.75c0 .069.056.125.125.125h.875a.125.125 0 0 0 .125-.125V6.5A.5.5 0 0 0 19 6Zm-2 2H9a.5.5 0 0 0-.5.5v8.292c0 .133.053.26.147.353l2.707 2.708a.521.521 0 0 0 .116.086v.03h.066c.054.02.112.031.171.031H17a.5.5 0 0 0 .5-.5v-11A.5.5 0 0 0 17 8Zm-5.532 10.378-1.345-1.347h1.345v1.347Zm4.907.497h-3.907v-2.219a.625.625 0 0 0-.625-.625H9.625V9.125h6.75v9.75Z"
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path
          fill="#fff"
          d="M7 6h14v14H7z"
        />
      </ClipPath>
      <ClipPath id="b">
        <Path
          fill="#fff"
          d="M7 6h14v14H7z"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

export const IconInformation = (props: SvgProps) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#597EF7"
      d="M8 1a7 7 0 1 0 .001 14.001A7 7 0 0 0 8 1Zm.5 10.375a.125.125 0 0 1-.125.125h-.75a.125.125 0 0 1-.125-.125v-4.25c0-.069.056-.125.125-.125h.75c.069 0 .125.056.125.125v4.25ZM8 6a.75.75 0 0 1 0-1.5A.75.75 0 0 1 8 6Z"
    />
  </Svg>
);

export const IconRetweet = (props: SvgProps) => (
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
      fill="#EDA749"
    />
    <Path
      fill="#fff"
      d="M26.781 41.406h2.236a.282.282 0 0 0 .281-.281V32.15h18.584v2.552a.293.293 0 0 0 .475.232l5.038-3.955c.15-.176.126-.362 0-.464l-5.038-3.952a.297.297 0 0 0-.478.232v2.553H29.02a2.526 2.526 0 0 0-2.521 2.524v9.253c0 .155.127.281.281.281Zm26.438-2.812h-2.236a.282.282 0 0 0-.281.281v8.975H32.118v-2.552a.293.293 0 0 0-.475-.232l-5.038 3.955c-.15.176-.126.362 0 .464l5.038 3.952a.297.297 0 0 0 .478-.232v-2.553h18.865a2.526 2.526 0 0 0 2.521-2.524v-9.253a.293.293 0 0 0-.288-.281Z"
    />
  </Svg>
);

export const IconPopupInformation = (props: SvgProps) => (
  <Svg
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <Path
      fill="#1D4279"
      d="M24 3C12.403 3 3 12.403 3 24s9.403 21 21 21 21-9.403 21-21S35.597 3 24 3Zm-1.5 10.875c0-.206.169-.375.375-.375h2.25c.206 0 .375.169.375.375v12.75a.376.376 0 0 1-.375.375h-2.25a.376.376 0 0 1-.375-.375v-12.75ZM24 34.5a2.25 2.25 0 0 1 0-4.5 2.25 2.25 0 0 1 0 4.5Z"
    />
  </Svg>
);
