import React from 'react';
import {Dimensions} from 'react-native';
import Svg, {G, Rect} from 'react-native-svg';

const Dashed = ({width}) => {
  const spacing = 16;

  const dashes = new Array(Math.floor(width / spacing)).fill(null);
  return (
    <Svg height="11" width="100%" style={{alignSelf: 'center'}}>
      <G>
        {dashes.map((_, index) => (
          <Rect
            key={index}
            x="11"
            y="10"
            width="10"
            height="1"
            fill="#e3e2e6"
            translateX={spacing * index}
          />
        ))}
      </G>
    </Svg>
  );
};

export default Dashed;
